'use client';

import { Navbar } from '@/components/client/navbar';
import { useShouldStick } from '@/hooks/sticky';
import { cn } from '@/lib/utils';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSticky } = useShouldStick();

  return (
    <main>
      <div
        className={cn(
          isSticky && 'sticky left-0 right-0 top-0 bg-background shadow-sm',
          !isSticky && 'fixed left-0 right-0 top-0 bg-transparent',
          'transition-all duration-0'
        )}
      >
        <Navbar />
      </div>
      {children}
    </main>
  );
}
