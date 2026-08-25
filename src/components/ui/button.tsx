import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-widest leading-none transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      // `size` is resolved first so a variant like `link` (which resets
      // height/padding to look like inline text) always wins the merge in
      // `cn()` regardless of which `size` prop is passed alongside it.
      size: {
        default: "h-11 px-5 has-[>svg]:px-4",
        sm: "h-11 px-4 text-[0.6875rem]",
        icon: "h-11 w-11 shrink-0",
      },
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-input bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
        link: "text-muted-foreground hover:text-accent px-0 h-auto min-h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button };
