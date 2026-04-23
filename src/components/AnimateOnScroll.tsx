'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function AnimateOnScroll({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  as = 'div',
}: AnimateOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion.create(as);

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}
