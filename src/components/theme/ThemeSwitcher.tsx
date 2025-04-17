
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-background/50 backdrop-blur-lg border border-brand-purple/20 hover:bg-brand-purple/20 transition-all duration-300"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-brand-light-purple hover:text-white transition-colors duration-300" />
      ) : (
        <Sun className="h-5 w-5 text-brand-vivid-purple hover:text-brand-purple transition-colors duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
