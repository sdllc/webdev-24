
import { z, defineCollection } from 'astro:content';

const page_collection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'pages': page_collection,
  'kb': page_collection,
};

