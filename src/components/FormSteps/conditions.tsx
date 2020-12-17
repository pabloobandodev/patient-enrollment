import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { useForm, CONDITIONS } from '../../context/form-context'
import { typeConditions } from '../../lib/constants'
import { Condition } from '../../context/types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`
const ContainerButton = styled.div`
  flex-grow: 0.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 2rem;
  margin-top: 1rem;
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const StyledButton = styled(Button)`
  width: 48%;
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
`

const Conditions: React.FC<any> = ({ isVisible, onNext, onPrev }) => {
  const [condition, setCondition] = useState('none')
  const {
    state: { conditions },
    dispatch,
  } = useForm()

  if (!isVisible) {
    return null
  }

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setCondition(value)
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch({ type: CONDITIONS, payload: value })
  }

  return (
    <>
      <label htmlFor='condition'>
        Filter by
        <select
          id='condition'
          name='condition'
          placeholder='condition'
          required
          value={condition}
          onChange={selectHandler}
        >
          <option value='none'>none</option>
          {typeConditions.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </label>
      <Container>
        <fieldset>
          Conditions:
          {conditions
            .filter(
              (cond: Condition) =>
                condition === 'none' || cond.type === condition
            )
            .map((cond) => (
              <label htmlFor={cond.condition} key={cond.condition}>
                <input
                  type='checkbox'
                  id={cond.condition}
                  name='condition'
                  required
                  value={cond.condition}
                  onChange={inputHandler}
                  checked={cond.isPositive}
                />
                {cond.condition}
              </label>
            ))}
        </fieldset>
      </Container>
      <ContainerButton>
        <ButtonsContainer>
          <StyledButton onClick={onPrev}>Back</StyledButton>
          <StyledButton color={'#29e0ad'} onClick={onNext}>
            Next
          </StyledButton>
        </ButtonsContainer>
      </ContainerButton>
    </>
  )
}

export default Conditions
