import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
};

const DIRECTION_CLASS: Record<NonNullable<AnimatedSectionProps['direction']>, string> = {
  up: 'animate-fade-up',
  down: 'animate-fade-down',
  left: 'animate-fade-left',
  right: 'animate-fade-right',
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const style = {
    animationDelay: `${delay}s`,
  };

  return (
    <div className={cn('opacity-0 motion-safe:animate-in motion-safe:fill-mode-forwards motion-safe:duration-500', DIRECTION_CLASS[direction], className)} style={style}>
      {children}
    </div>
  );
}
