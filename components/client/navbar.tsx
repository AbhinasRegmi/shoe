'use client';

import {
  navbarData,
  NavbarIconDataI,
  NavbarLinkDataI,
} from '@/data/client/navbar';
import { Logo } from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className='container mx-auto flex items-center justify-between px-4 py-5 lg:px-0'>
      <Link href='/home' className='w-24 lg:w-32'>
        <Logo />
      </Link>

      {/* Desktop view */}
      <div className='hidden items-center justify-center gap-3 text-2xl tracking-wider lg:flex'>
        {navbarData.links.map((i) => (
          <NavbarLinkItem key={i.label} {...i} />
        ))}
      </div>
      <div className='hidden items-center justify-center gap-3 lg:flex'>
        {navbarData.icons.map((i) => (
          <NavbarIconItem key={i.label} {...i} />
        ))}
      </div>

      {/* Mobile view */}
      <div className='block lg:hidden'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='sr-only'>
                Open the navmenu for mobile devices.
              </SheetTitle>
            </SheetHeader>
            <section className='py-12'>
              <div className='flex flex-col gap-y-4'>
                {navbarData.links.map((i) => (
                  <div key={i.label} onClick={() => setIsOpen((p) => !p)}>
                    <NavbarLinkItem {...i} />
                  </div>
                ))}
              </div>
              <div className='flex flex-wrap items-center justify-around gap-3 py-8'>
                {navbarData.icons.map((i) => (
                  <div key={i.label} onClick={() => setIsOpen((p) => !p)}>
                    <NavbarIconItem {...i} />
                  </div>
                ))}
              </div>
            </section>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function NavbarLinkItem(props: NavbarLinkDataI) {
  const isActive = usePathname() == props.link;

  return (
    <Link
      href={props.link}
      className={cn(
        'p-2 capitalize decoration-2 underline-offset-2 transition-all hover:underline',
        isActive && 'underline decoration-red-600 hover:decoration-4'
      )}
    >
      {props.label}
    </Link>
  );
}

function NavbarIconItem(props: NavbarIconDataI) {
  const isActive = usePathname() === props.link;

  return (
    <Link
      className={cn(
        'flex size-16 items-center justify-center rounded-full bg-slate-50 transition-all hover:bg-slate-100',
        isActive && 'bg-red-50 hover:bg-red-100'
      )}
      href={props.link ?? ''}
    >
      {props.item}
    </Link>
  );
}
