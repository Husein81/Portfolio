import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";
import { Button } from "./button";

const OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const ActiveIcon =
    OPTIONS.find((o) => o.value === theme)?.icon ??
    (resolvedTheme === "dark" ? Moon : Sun);

  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <ActiveIcon size={20} />
    </Button>
  );
};

export default ThemeToggle;
