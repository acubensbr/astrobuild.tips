import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const tips = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tips' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    tags:  z.array(z.string()),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { tips };