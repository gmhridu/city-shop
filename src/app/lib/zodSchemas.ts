import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(1),
  images: z.array(z.string()).min(1, "At least one image is required"),
  category: z.enum(["square", "round", "multicolor"]),
  isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
  title: z.string().optional(),
  imageString: z.string(),
});