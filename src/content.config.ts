import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const hello = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hello' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags:  z.array(z.string())
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { hello };