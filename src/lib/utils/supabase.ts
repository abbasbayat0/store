import { createClient } from '@supabase/supabase-js';


// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  // const newName = `/users/${timestamp}-${image.name}`;
  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage.from("image").upload(newName, image, {
    cacheControl: '3600',
  });
  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from("image").getPublicUrl(newName).data.publicUrl;
};
