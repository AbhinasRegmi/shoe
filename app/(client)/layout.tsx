'use client';

import { Navbar } from '@/components/client/navbar';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const offsetY = window.scrollY;
      setIsSticky(offsetY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <div
        className={cn(
          isSticky && 'sticky left-0 right-0 top-0 shadow-sm',
          'bg-background'
        )}
      >
        <Navbar />
      </div>
      {children}
    </main>
  );
}
