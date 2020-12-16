import React from "react";

export const useDarkMode: () => [string, () => void, boolean] = () => {
  const [theme, setTheme] = React.useState("light");
  const [mountedComponent, setMountedComponent] = React.useState(false);

  const setMode = (mode: string) => {
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  React.useEffect(() => {
    setMode("light");
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};
