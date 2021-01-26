import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { theme } from './lib/theme'
import { EnrollmentProvider } from './context/enrollment'
import FormSteps from './components/FormSteps'
import Typography from './components/Typography'

const Header = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px;
  padding: 1rem 0 1rem 0;
  h3 {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
`

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Typography />
    <Header>
      <h3 className='center'>Parsley Health</h3>
    </Header>
    <EnrollmentProvider>
      <FormSteps />
    </EnrollmentProvider>
  </ThemeProvider>
)

export default App
