import React from 'react'
import styled from 'styled-components'

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`
const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 3rem;
  height: 1.5rem;
  border-radius: 3.2rem;
  border: 2px solid ${({ theme }) => theme.gray};
  position: relative;
  transition: background-color 0.2s;
`
const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  transition: 0.2s;
  background: ${({ theme }) => theme.gray};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    background: #29e0ad;
    left: calc(100%);
    transform: translateX(-100%);
  }
  ${SwitchLabel}:active & {
    width: 1.5rem;
  }
`

const Toggle = ({
  isChecked,
  toggleIsChecked,
  id,
}: {
  isChecked: boolean
  toggleIsChecked: () => void
  id: string
}) => {
  return (
    <>
      <SwitchInput
        className='switch-checkbox'
        id={id}
        type='checkbox'
        checked={isChecked}
        onChange={toggleIsChecked}
      />
      <SwitchLabel className='switch-label' htmlFor={id}>
        <SwitchButton className='switch-button' />
      </SwitchLabel>
    </>
  )
}

export default Toggle
