import { useState, useEffect } from "react";

export function useTheme() {
  const [colorTheme, setColorTheme] = useState("light");

  const toggleTheme = () => {
    setColorTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("colorTheme") === "dark";
    if (isDarkMode) {
      setColorTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("colorTheme", colorTheme);
    if (colorTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorTheme]);

  return { colorTheme, toggleTheme };
}
