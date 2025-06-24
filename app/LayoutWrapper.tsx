// app/LayoutWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current page is an admin page
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    // If it's an admin page, render it directly.
    // The admin layout is self-contained and doesn't need the public header/footer.
    return <>{children}</>;
  }

  // For all other public pages, wrap them in the standard layout
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}