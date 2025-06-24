// app/components/FadeIn.tsx
"use client";

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export default function FadeIn({ children, className }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        'transition-all duration-700 ease-out',
        { 'opacity-100 translate-y-0': inView },
        { 'opacity-0 translate-y-10': !inView }
      )}
    >
      {children}
    </div>
  );
}