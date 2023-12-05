import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppBar from './components/AppBar';
import Container from './components/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Irregular Verbs Learning App',
  description:
    'Irregular Verbs Learning App created by Heorhii "Aytivets" Aksiuk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
