import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.springwood};
    color: ${({ theme }) => theme.tundora};
    transition: all 0.50s linear;
    margin: 0;
  }
  `
