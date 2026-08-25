import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/lib/utils";

const Label = ({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root
    data-slot="label"
    className={cn(
      "eyebrow flex select-none items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className
    )}
    {...props}
  />
);

export { Label };
