import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		headerImage: z.string().optional(),
		author: z.string().default('team'),
		tags: z.array(z.string()).default([]),
		isDraft: z.boolean().default(false),
		lang: z.enum(['vi', 'en']).default('vi'), // Thêm trường ngôn ngữ
	}),
});

export const collections = { blog };
