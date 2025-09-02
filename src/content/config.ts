import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    weight: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const practice = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts,
  practice,
};
