import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { conditions, typeConditions } from '../../lib/constants'
import { ICondition } from '../../context/types'
import useForm from '../../hooks/useForm'
import useEnrollment from '../../hooks/useEnrollment'
import FormTitle from '../FormTitle'

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

type IProps = {
  isVisible: boolean
  onNext: () => void
  onPrev: () => void
}

const Conditions: React.FC<IProps> = ({ isVisible, onNext, onPrev }) => {
  const { values, updateValue } = useForm({
    condition: 'all',
  })
  const filteredConditions = conditions.filter(
    (singleCondition: ICondition) =>
      values.condition === 'all' || singleCondition.type === values.condition
  )
  const [conditionIds, setConditionIds] = useState<string[]>([])
  const { addToData } = useEnrollment()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (conditionIds.includes(value)) {
      setConditionIds(
        conditionIds.filter((singleCondition) => singleCondition !== value)
      )
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
      <FormTitle number='2' subTitle='List conditions by category'>
        Conditions
      </FormTitle>
      <label htmlFor='condition'>
        Filter by
        <select
          id='condition'
          name='condition'
          placeholder='condition'
          required
          value={values.condition}
          onChange={updateValue}
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
          <StyledButton type='button' onClick={onPrev} color={'#474747'}>
            Back
          </StyledButton>
          <StyledButton type='button' onClick={onContinue}>
            Continue
          </StyledButton>
        </ButtonsContainer>
      </ContainerButton>
    </>
  )
}

export default Conditions
