import { relations } from "drizzle-orm"
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: integer("created_at", {mode: "timestamp_ms"}).notNull(),
  updatedAt: integer("updated_at", {mode: "timestamp_ms"}).notNull()
})

export const user = sqliteTable("user", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  firstName: text("first_Name").notNull(),
  lastName: text("last_Name").notNull(),
  createdAt: integer("created_at", {mode: "timestamp_ms"}).notNull(),
  updatedAt: integer("updated_at", {mode: "timestamp_ms"}).notNull()
})

export const sessions = sqliteTable("sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  projectId: integer("project_id").references(() => projects.id),
  totalTime: integer("total_time").notNull(),
  startTime: integer("start_time", {mode: "timestamp_ms"}).notNull(),
  endTime: integer("end_time", {mode: "timestamp_ms"}).notNull(),
  createdAt: integer("created_at", {mode: "timestamp_ms"}).notNull(),
  updatedAt: integer("updated_at", {mode: "timestamp_ms"}).notNull()
})

export const sessionRelations = relations(sessions, ({one}) => ({
  project: one(projects, {
    fields: [sessions.projectId],
    references: [projects.id]
  })
}))
