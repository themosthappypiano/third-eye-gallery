import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { artistsTable, galleryImagesTable, artPrintsTable } from "@workspace/db";
import { GetArtistsResponse, GetGalleryImagesResponse, GetArtPrintsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/artists", async (_req, res) => {
  const artists = await db.select().from(artistsTable);
  const data = GetArtistsResponse.parse(artists);
  res.json(data);
});

router.get("/gallery", async (_req, res) => {
  const images = await db.select().from(galleryImagesTable);
  const data = GetGalleryImagesResponse.parse(images);
  res.json(data);
});

router.get("/prints", async (_req, res) => {
  const prints = await db.select().from(artPrintsTable);
  const data = GetArtPrintsResponse.parse(prints);
  res.json(data);
});

export default router;
