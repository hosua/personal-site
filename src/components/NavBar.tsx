import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between border-b px-4 py-3">
      <Button variant="ghost" asChild>
        <a href="/">Home</a>
      </Button>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
