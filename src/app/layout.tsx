import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/shared/global/Container';
import Navbar from '@/components/shared/navbar/Navbar';
import ThemeProvider from '@/components/shared/global/ThemeProvider';
import AppProvider from '@/components/shared/global/AppProvider';

export const metadata: Metadata = {
  title: 'Store',
  description: 'Still My Training Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <AppProvider>
        <body>
          <ThemeProvider>
            <Navbar />
            <Container className='py-20'>{children}</Container>
          </ThemeProvider>
        </body>
      </AppProvider>
    </html>
  );
}
