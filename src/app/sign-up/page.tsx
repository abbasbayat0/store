'use client';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '@/lib/supabase/supabase';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';
import useTheme from '@/lib/utils/useTheme';

export default function SignUp() {
  const dark = useTheme();
  return (
    <div className='container mx-auto max-w-1/3 p-4'>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme={dark ? 'dark' : 'light'}
        providers={['github']}
      />
      <Link href='/' className='mt-4 block text-blue-500'>
        Return Home
      </Link>
    </div>
  );
}
