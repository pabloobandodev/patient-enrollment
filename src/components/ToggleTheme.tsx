import React from 'react'
import { BiBulb, BiMoon } from 'react-icons/bi'
import styled from 'styled-components'

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  color: ${({ theme }) => theme.border};
  font-size: 2rem;
`

const Toggle: React.FC<{ theme: string; toggleTheme: () => void }> = ({
  theme,
  toggleTheme,
}) => (
  <Button onClick={toggleTheme}>
    {theme === 'dark' ? <BiBulb /> : <BiMoon />}
  </Button>
)

export default Toggle
