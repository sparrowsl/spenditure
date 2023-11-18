/** @type {import("drizzle-kit").Config} */
export default {
	out: "./drizzle",
	schema: "./src/lib/server/db/schema.js",
	breakpoints: true,
	driver: "better-sqlite",
	dbCredentials: {
		url: "./",
	},
};
