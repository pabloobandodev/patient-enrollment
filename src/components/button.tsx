import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  padding: 0.5rem 2rem;
  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  color: ${({ theme }) => theme.body};
  border: 0 none;
  border-radius: 0.5rem;
  line-height: 1.3;
  font-size: 1.2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: all 150ms linear;
    opacity: 0.9;
  }
  &:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }
  &:focus {
    outline: none;
  }
`
const Button: React.FC<any> = (props) => {
  return <StyledButton {...props} />
}

export default Button
