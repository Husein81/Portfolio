import * as React from "react";

import { cn } from "@/lib/utils";

const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => (
  <input
    type={type}
    data-slot="input"
    className={cn(
      "flex h-11 w-full min-w-0 border border-input bg-transparent px-3.5 py-2 text-[0.9375rem] text-foreground transition-colors duration-200 outline-none",
      "placeholder:text-muted-foreground",
      "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-ring/40",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
      className
    )}
    {...props}
  />
);

export { Input };
