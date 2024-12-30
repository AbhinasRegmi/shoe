'use client';

import { useShouldStick } from '@/hooks/sticky';
import { cn } from '@/lib/utils';

export function StickyTop() {
  const { isSticky } = useShouldStick();

  return <div className={cn(!isSticky && 'h-[6.55rem]')}></div>;
}
