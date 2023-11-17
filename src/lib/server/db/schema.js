import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
	id: text("id").notNull().primaryKey(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
});

export const recordsTable = sqliteTable("records", {
	id: text("id").notNull().primaryKey(),
	name: text("name").notNull(),
	address: text("address").notNull(),
	city: text("city").notNull(),
	created: text("created").notNull(),
});
