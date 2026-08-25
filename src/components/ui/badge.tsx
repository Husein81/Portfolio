import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[0.6875rem] font-medium uppercase tracking-wider leading-normal w-fit whitespace-nowrap shrink-0 transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        outline: "border-border text-muted-foreground",
        accent: "border-accent/40 bg-accent/10 text-accent",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

const Badge = ({ className, variant, asChild = false, ...props }: BadgeProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Badge };
