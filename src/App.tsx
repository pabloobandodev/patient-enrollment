import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/global-styles";
import Button from "./components/button";
import ToggleTheme from "./components/toggle-theme";
import { lightTheme, darkTheme } from "./lib/theme";
import { useDarkMode } from "./hooks/useDarkmode";

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonEnrollment = styled(Button)`
  background-color: #3dd28d;
  color: #fff;
  margin-top: 8rem;
`

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ToggleTheme theme={theme} toggleTheme={themeToggler} />
      <ContainerCenter>
        <ButtonEnrollment>
          <strong>enrollment</strong>
        </ButtonEnrollment>
      </ContainerCenter>
    </ThemeProvider>
  );
};

export default App;
