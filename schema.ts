import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  region: text("region").notNull(),
  district: text("district").notNull(),
  village: text("village").notNull(),
  pin: text("pin").notNull(),
  preferredLanguage: text("preferred_language").notNull(),
});

export const insertUserSchema = createInsertSchema(users)
  .extend({
    age: z.number().min(18).max(120),
    pin: z.string().length(6),
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;