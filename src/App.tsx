import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/global-styles";
import ToggleTheme from "./components/toggle-theme";
import { lightTheme, darkTheme } from "./lib/theme";
import { useDarkMode } from "./hooks/useDarkmode";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ToggleTheme theme={theme} toggleTheme={themeToggler} />
      <p>test</p>
    </ThemeProvider>
  );
};

export default App;
