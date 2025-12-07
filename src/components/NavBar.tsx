import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between border-b px-4 py-3">
      <Button variant="ghost" asChild>
        <Link to="/">hoswoo.xyz</Link>
      </Button>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
