import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) => (
  <SheetPrimitive.Overlay
    data-slot="sheet-overlay"
    className={cn(
      "fixed inset-0 z-50 bg-background/70 backdrop-blur-[2px]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
);

type SheetContentProps = React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
};

const SheetContent = ({
  className,
  children,
  side = "right",
  ...props
}: SheetContentProps) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      data-slot="sheet-content"
      className={cn(
        "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-out",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
        side === "right" &&
          "inset-y-0 right-0 h-full w-full border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        side === "left" &&
          "inset-y-0 left-0 h-full w-full border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        side === "top" &&
          "inset-x-0 top-0 h-auto border-b border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        side === "bottom" &&
          "inset-x-0 bottom-0 h-auto border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        className
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
);

const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="sheet-header"
    className={cn("flex h-16 shrink-0 items-center justify-between px-5", className)}
    {...props}
  />
);

const SheetTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) => (
  <SheetPrimitive.Title
    data-slot="sheet-title"
    className={cn("text-[0.9375rem] font-medium tracking-tight", className)}
    {...props}
  />
);

const SheetDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) => (
  <SheetPrimitive.Description
    data-slot="sheet-description"
    className={cn("sr-only", className)}
    {...props}
  />
);

const SheetCloseButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) => (
  <SheetPrimitive.Close
    data-slot="sheet-close-button"
    className={cn(
      "flex h-11 w-11 items-center justify-center text-muted-foreground outline-none transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
      className
    )}
    {...props}
  >
    <X className="h-5 w-5" aria-hidden="true" />
    <span className="sr-only">Close</span>
  </SheetPrimitive.Close>
);

export {
  Sheet,
  SheetClose,
  SheetCloseButton,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
