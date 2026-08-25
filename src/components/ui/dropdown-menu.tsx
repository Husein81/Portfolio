import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuContent = ({
  className,
  sideOffset = 8,
  align = "end",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      data-slot="dropdown-menu-content"
      sideOffset={sideOffset}
      align={align}
      className={cn(
        "z-50 min-w-36 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.Item
    data-slot="dropdown-menu-item"
    data-inset={inset}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none transition-colors duration-150",
      "focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-muted-foreground",
      className
    )}
    {...props}
  />
);

const DropdownMenuCheckItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  checked?: boolean;
}) => (
  <DropdownMenuPrimitive.Item
    data-slot="dropdown-menu-check-item"
    className={cn(
      "relative flex cursor-pointer select-none items-center justify-between gap-2 rounded-sm px-2.5 py-2 text-sm outline-none transition-colors duration-150",
      "focus:bg-muted focus:text-foreground [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-muted-foreground",
      className
    )}
    {...props}
  >
    {children}
    {checked ? <Check className="text-accent" aria-hidden="true" /> : null}
  </DropdownMenuPrimitive.Item>
);

export {
  DropdownMenu,
  DropdownMenuCheckItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
};
