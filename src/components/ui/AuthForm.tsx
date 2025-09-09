'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase/supabase';

interface AuthFormProps {
  view?: 'sign_in' | 'sign_up' | 'forgotten_password' | 'update_password' | 'magic_link';
}

export default function AuthForm({ view = 'sign_in' }: AuthFormProps) {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{
        theme: ThemeSupa,
        style: {
          button: { background: '#3b82f6', color: 'white' },
          anchor: { color: '#3b82f6' },
        },
      }}
      theme='light'
      providers={['github', 'google']}
      view={view}
      localization={{
        variables: {
          sign_in: {
            email_label: 'email',
            password_label: 'password',
            email_input_placeholder: 'enter your email',
            password_input_placeholder: 'enter your password',
            button_label: 'login',
            loading_button_label: 'logging in ...',
            link_text: 'has an account',
          },
          sign_up: {
            email_label: 'email',
            password_label: 'password',
            email_input_placeholder: 'enter your email',
            password_input_placeholder: 'enter your password',
            button_label: 'sing up',
            loading_button_label: 'signing up ...',
            link_text: 'has no account',
          },
        },
      }}
    />
  );
}
