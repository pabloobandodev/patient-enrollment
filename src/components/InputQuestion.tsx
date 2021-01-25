import React, { useState } from 'react'
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
  onChange: () => void
}> = ({ children, id, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(false)
  const toggleIsChecked = () => setIsChecked((prevValue) => !prevValue)

  return (
    <>
      <ContainerQuestion>
        <h4>{children}</h4>
        <Toggle
          isChecked={isChecked}
          toggleIsChecked={toggleIsChecked}
          id={id}
        />
      </ContainerQuestion>
      {isChecked && (
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
      )}
    </>
  )
}

export default InputQuestion
