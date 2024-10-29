import { useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import { useTheme } from "../providers/ThemeProvider";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  const { setTheme } = useTheme();
  const prevTheme = localStorage.getItem("vite-ui-theme");
  const [currTheme, setCurrTheme] = useState(prevTheme || "light");

  const handleThemeChange = () => {
    const value = currTheme === "light" ? "dark" : "light";

    setCurrTheme(value);
    setTheme(value);
  };

  return (
    <div className="flex items-center justify-between h-[10%]">
      <img src={logo} className="h-20" />
      <Button
        variant="secondary"
        onClick={handleThemeChange}
        className="text-2xl rounded-full p-2"
      >
        {currTheme === "light" ? (
          <MdLightMode className="text-primary" />
        ) : (
          <MdDarkMode className="text-primary" />
        )}
      </Button>
    </div>
  );
};

export default Header;
