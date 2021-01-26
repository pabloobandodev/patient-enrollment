import styled from 'styled-components'

const StyledButton = styled.button`
  width: 48%;
  background-color: ${({ theme }) => theme.como};
  display: flex;
  padding: 0.8rem 2rem;
  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  color: ${({ theme }) => theme.springwood};
  border: 0 none;
  border-radius: 2rem;
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
  &[disabled] {
    pointer-events: none;
    opacity: 0.3;
  }
`

export default StyledButton
