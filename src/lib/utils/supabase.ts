import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
);

export const uploadImage = async (image: File) => {
  const newName = `${Date.now()}-${image.name}`;

  const { data, error } = await supabase.storage.from('image').upload(newName, image, {
    cacheControl: '3600',
  });
  if (!data) throw new Error(error.message);
  return supabase.storage.from('image').getPublicUrl(newName).data.publicUrl;
};
