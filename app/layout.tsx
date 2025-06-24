// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from './LayoutWrapper'; // Import our new logic component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keerthi Travels - Spiritual Journeys',
  description: 'Curated pilgrimage tours to Kashi, Ayodhya, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}