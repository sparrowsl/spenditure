import { error, fail, redirect } from "@sveltejs/kit";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import drizzle from "$lib/server/db/drizzle.js";
import { usersTable } from "$lib/server/db/schema.js";

const registerSchema = z.object({
  id: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be 4 or more letters"),
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) { }

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const form = Object.fromEntries(await request.formData());

    /** @type {import("$lib/types").User} */
    let user;

    try {
      user = registerSchema.parse(form);
    } catch (/** @type {any} */ e) {
      const { fieldErrors: errors } = e.flatten();
      return fail(400, { message: Object.values(errors).map((err) => err[0])[0] });
    }

    // console.log(user)

    const data = await drizzle
      .insert(usersTable)
      .values({id:crypto.randomUUID(),...user}).returning()
      console.log(data)
      // .where(and(eq(usersTable.email, user.email), eq(usersTable.password, user.password))))[0];

      // console.log(data)
    // if (!data) return fail(403,{ message: "Invalid email and password" });

    // console.log("after data check...")
    // return { data };
    // const employee = await prisma.employee.findFirst({
    // 	where: {
    // 		email: username,
    // 		password,
    // 	},
    // });

    // if (!employee) return { error: "Invalid login details, try again!!" };

    // cookies.set("session", employee.id, {
    // 	path: "/",
    // 	sameSite: "strict",
    // 	httpOnly: true,
    // 	maxAge: 60 * 60 * 24 * 7,
    // });

    // if (employee.isAdmin) throw redirect(302, "/dashboard");

    // throw redirect(302, "/sales");
  },
};
