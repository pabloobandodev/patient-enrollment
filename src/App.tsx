import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import Button from './components/Button'
import ToggleTheme from './components/ToggleTheme'
import { lightTheme, darkTheme } from './lib/theme'
import useDarkMode from './hooks/useDarkmode'
import useBoolean from './hooks/useBoolean'
import { FormProvider } from './context/form-context'
import Modal from './components/Modal'
import FormSteps from './components/FormSteps'

const ButtonEnrollment = styled(Button)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #3dd28d;
  color: #fff;
  margin-top: 8rem;
`

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [isEnrollment, toggleIsEnrollment] = useBoolean()

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <FormProvider>
        <GlobalStyles />
        <ToggleTheme theme={theme} toggleTheme={themeToggler} />
        <ButtonEnrollment onClick={toggleIsEnrollment}>
          <strong>enrollment</strong>
        </ButtonEnrollment>
        <Modal isOpen={isEnrollment}>
          <FormSteps onClose={toggleIsEnrollment} />
        </Modal>
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
