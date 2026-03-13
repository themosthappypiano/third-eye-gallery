import { pgTable, text, boolean, real, jsonb } from "drizzle-orm/pg-core";
import { sqliteTable, text as sqliteText, integer as sqliteInteger, real as sqliteReal } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

// Auto-detect database type based on URL
const isLocal = process.env.DATABASE_URL?.startsWith('file:') ?? false;

export const artistsTable = isLocal 
  ? sqliteTable("artists", {
      id: sqliteText("id").primaryKey(),
      name: sqliteText("name").notNull(),
      slug: sqliteText("slug").notNull().unique(),
      specialty: sqliteText("specialty").notNull(),
      styles: sqliteText("styles").$type<string>().notNull().default("[]"), // Store as JSON string for SQLite
      bio: sqliteText("bio").notNull(),
      instagram: sqliteText("instagram").notNull(),
      bookingUrl: sqliteText("booking_url"),
      imageUrl: sqliteText("image_url"),
    })
  : pgTable("artists", {
      id: text("id").primaryKey(),
      name: text("name").notNull(),
      slug: text("slug").notNull().unique(),
      specialty: text("specialty").notNull(),
      styles: jsonb("styles").$type<string[]>().notNull().default([]),
      bio: text("bio").notNull(),
      instagram: text("instagram").notNull(),
      bookingUrl: text("booking_url"),
      imageUrl: text("image_url"),
    });

export const insertArtistSchema = createInsertSchema(artistsTable);
export type InsertArtist = z.infer<typeof insertArtistSchema>;
export type Artist = typeof artistsTable.$inferSelect;

export const galleryImagesTable = isLocal
  ? sqliteTable("gallery_images", {
      id: sqliteText("id").primaryKey(),
      imageUrl: sqliteText("image_url").notNull(),
      artistName: sqliteText("artist_name").notNull(),
      artistSlug: sqliteText("artist_slug").notNull(),
      style: sqliteText("style").notNull(),
      title: sqliteText("title"),
    })
  : pgTable("gallery_images", {
      id: text("id").primaryKey(),
      imageUrl: text("image_url").notNull(),
      artistName: text("artist_name").notNull(),
      artistSlug: text("artist_slug").notNull(),
      style: text("style").notNull(),
      title: text("title"),
    });

export const insertGalleryImageSchema = createInsertSchema(galleryImagesTable);
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof galleryImagesTable.$inferSelect;

export const artPrintsTable = isLocal
  ? sqliteTable("art_prints", {
      id: sqliteText("id").primaryKey(),
      title: sqliteText("title").notNull(),
      artistName: sqliteText("artist_name").notNull(),
      imageUrl: sqliteText("image_url").notNull(),
      size: sqliteText("size"),
      price: sqliteReal("price"),
      available: sqliteInteger("available", { mode: "boolean" }).notNull().default(true),
    })
  : pgTable("art_prints", {
      id: text("id").primaryKey(),
      title: text("title").notNull(),
      artistName: text("artist_name").notNull(),
      imageUrl: text("image_url").notNull(),
      size: text("size"),
      price: real("price"),
      available: boolean("available").notNull().default(true),
    });

export const insertArtPrintSchema = createInsertSchema(artPrintsTable);
export type InsertArtPrint = z.infer<typeof insertArtPrintSchema>;
export type ArtPrint = typeof artPrintsTable.$inferSelect;
