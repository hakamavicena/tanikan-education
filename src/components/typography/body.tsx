import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const bodyVariants = cva('font-changa', {
  variants: {
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      xl: 'text-[20px] leading-none',
      lg: 'text-[18px] leading-none',
      md: 'text-[16px] leading-none',
      sm: 'text-[14px] leading-none',
      xs: 'text-[12px] leading-none',
    },
  },
  defaultVariants: {
    weight: 'normal',
    size: 'xl',
  },
});

function Body({
  children,
  className,
  weight,
  size,
  ...props
}: React.ComponentProps<'p'> & VariantProps<typeof bodyVariants>) {
  return (
    <p className={cn(bodyVariants({ weight, size }), className)} {...props}>
      {children}
    </p>
  );
}

export default Body;
