import { pgTable, text, boolean, real, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const artistsTable = pgTable("artists", {
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

export const galleryImagesTable = pgTable("gallery_images", {
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

export const artPrintsTable = pgTable("art_prints", {
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
