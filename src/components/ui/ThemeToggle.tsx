import { Check, Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const ActiveIcon = OPTIONS.find((o) => o.value === theme)?.icon ??
    (resolvedTheme === "dark" ? Moon : Sun);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Theme: ${theme}. Change theme`}
          className="rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <ActiveIcon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => setTheme(option.value)}
          >
            <option.icon aria-hidden="true" />
            {option.label}
            {theme === option.value ? (
              <Check className="ml-auto h-3.5 w-3.5 text-accent" aria-hidden="true" />
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
