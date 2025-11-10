import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/shared/global/Container';
import Navbar from '@/components/shared/navbar/Navbar';
import ThemeProvider from '@/components/shared/global/ThemeProvider';
import AppProvider from '@/components/shared/global/AppProvider';

import { ClerkProvider } from '@clerk/nextjs';
import Notif from './Notif';

export const metadata: Metadata = {
  title: 'Store',
  description: 'Still My Training Store',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <AppProvider>
          <body>
            <Notif />
            <ThemeProvider>
              <Navbar />
              <Container className='min-h-screen py-20'>{children}</Container>
            </ThemeProvider>
          </body>
        </AppProvider>
      </html>
    </ClerkProvider>
  );
}
