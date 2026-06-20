import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { timestamp } from "drizzle-orm/gel-core"

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: integer("created_at", {mode: "timestamp_ms"}).notNull(),
  updatedAt: integer("updated_at", {mode: "timestamp_ms"}).notNull()
})