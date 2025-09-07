import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const headingVariants = cva('font-bungee font-normal', {
  variants: {
    size: {
      '3xl': 'text-[72px]',
      '2xl': 'text-[60px]',
      xl: 'text-[56px]',
      lg: 'text-[48px]',
      md: 'text-[36px]',
      sm: 'text-[30px]',
      xs: 'text-[24px]',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

function Heading({
  children,
  className,
  size,
  ...props
}: React.ComponentProps<'h1'> & VariantProps<typeof headingVariants>) {
  return (
    <h1 className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </h1>
  );
}

export default Heading;
