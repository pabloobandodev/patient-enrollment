import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { conditions, typeConditions } from '../../lib/constants'
import { Condition } from '../../context/types'
import useForm from '../../hooks/useForm'
import useEnrollment from '../../hooks/useEnrollment'

const Container = styled.fieldset`
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
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
`

const Conditions: React.FC<any> = ({ isVisible, onNext, onPrev }) => {
  const [value, setValue] = useForm({
    condition: 'all',
  })
  const filteredConditions = conditions.filter(
    (singleCondition: Condition) =>
      value.condition === 'all' || singleCondition.type === value.condition
  )
  const [conditionIds, setConditionIds] = useState<string[]>([])
  const { addToData } = useEnrollment()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (conditionIds.includes(value)) {
      setConditionIds(conditionIds.filter((cond) => cond !== value))
    } else {
      setConditionIds([...conditionIds, value])
    }
  }

  const onContinue = () => {
    addToData({ conditionIds })
    onNext()
  }

  if (!isVisible) {
    return null
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
          value={value.condition}
          onChange={setValue}
        >
          <option value='all'>all</option>
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
          {filteredConditions.map((singleCondition) => (
            <label
              htmlFor={singleCondition.id}
              key={singleCondition.id}
              className='condition'
            >
              <input
                type='checkbox'
                id={singleCondition.id}
                name='condition'
                required
                value={singleCondition.id}
                onChange={inputHandler}
                checked={conditionIds.includes(singleCondition.id)}
              />
              {singleCondition.condition}
            </label>
          ))}
        </fieldset>
      </Container>
      <ContainerButton>
        <ButtonsContainer>
          <StyledButton onClick={onPrev} color={'#474747'}>
            Back
          </StyledButton>
          <StyledButton onClick={onContinue}>Next</StyledButton>
        </ButtonsContainer>
      </ContainerButton>
    </>
  )
}

export default Conditions
