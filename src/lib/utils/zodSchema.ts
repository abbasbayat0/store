import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'name must be at least 2 characters.',
    })
    .max(100, {
      message: 'name must be less than 100 characters.',
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number.',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'description must be between 10 and 1000 words.',
    },
  ),
});

const imageFn = () => {
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= 1024 * 1024;
    }, 'image size must be under 1MB')
    .refine((file) => {
      return !file || file.type.startsWith('image/');
    }, 'selected file must be an image');
};
export const imageSchema = z.object({
  image: imageFn(),
});

export const validationWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const validated = schema.safeParse(data);
  if (!validated.success) {
    throw new Error(validated.error.message);
  }
  return validated.data;
};
