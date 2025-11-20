import { sql } from "drizzle-orm"
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
//import { drizzle } from "drizzle-orm/better-sqlite3"
//import { seed } from "drizzle-seed"

export const children = sqliteTable("children", {
  id: integer().primaryKey({ autoIncrement: true }),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  dateOfBirth: integer('date_of_birth', { mode: 'timestamp' }).notNull(),
  hometown: text(),
  isNice: integer('is_nice', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

/*async function main() {
  const db = drizzle(process.env.DB_FILE_NAME!)
  await seed(db, { children }).refine((f) => ({
    children: {
      columns: {
        firstName: f.firstName(),
        lastName: f.lastName(),
        dateOfBirth: f.date({ minDate: "2018-01-01", maxDate: "2022-01-01" }),
        hometown: f.city(),
        isNice: f.boolean(),
      }
    }
  }))
}

main()*/