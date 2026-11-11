import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files whose names start with "_" (like _TEMPLATE.md) are ignored on purpose.
const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    category: z.enum(['dog-training', 'brain-games', 'dog-enrichment', 'puppy-training']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    productName: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Set to true to ask search engines not to index an unfinished page.
    noindex: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, reviews };
