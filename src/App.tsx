import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Button from "./components/Button";
import ToggleTheme from "./components/ToggleTheme";
import { lightTheme, darkTheme } from "./lib/theme";
import { useDarkMode } from "./hooks/useDarkmode";
import useBoolean from './hooks/useBoolean'
import Modal from './components/Modal'
import FormSteps from './components/FormSteps'

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
  const [isEnrollment, toggleIsEnrollment] = useBoolean()

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ToggleTheme theme={theme} toggleTheme={themeToggler} />
      <ContainerCenter>
        <ButtonEnrollment onClick={toggleIsEnrollment}>
          <strong>enrollment</strong>
        </ButtonEnrollment>
      </ContainerCenter>
      <Modal isOpen={isEnrollment}>
        <FormSteps onClose={toggleIsEnrollment} />
      </Modal>
    </ThemeProvider>
  );
};

export default App;
