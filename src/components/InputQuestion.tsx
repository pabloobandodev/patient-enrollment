import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'

const ContainerQuestion = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`

const InputQuestion: React.FC<{
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClear: (key: string) => void
}> = ({ children, id, value, onChange, onClear }) => {
  const [isChecked, setIsChecked] = useState(false)
  const toggleIsChecked = () => {
    onClear(id)
    setIsChecked((prevValue) => !prevValue)
  }

  const renderInput = () => {
    if (!isChecked && value.length === 0) return null
    return (
      <label htmlFor={id} className='secondary-question'>
        How much and how often?
        <input
          type='text'
          id={id}
          name={id}
          required
          value={value}
          onChange={onChange}
        />
      </label>
    )
  }

  return (
    <>
      <ContainerQuestion>
        <h4>{children}</h4>
        <Toggle
          isChecked={isChecked || value.length > 0}
          toggleIsChecked={toggleIsChecked}
          id={id}
        />
      </ContainerQuestion>
      {renderInput()}
    </>
  )
}

export default InputQuestion
