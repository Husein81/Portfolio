import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => (
  <textarea
    data-slot="textarea"
    className={cn(
      "flex w-full min-h-28 border border-input bg-transparent px-3.5 py-2.5 text-[0.9375rem] text-foreground transition-colors duration-200 outline-none resize-y",
      "placeholder:text-muted-foreground",
      "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-ring/40",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
      className
    )}
    {...props}
  />
);

export { Textarea };
