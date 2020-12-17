import React, { useReducer, useCallback } from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import Demographic from './demographic'
import Conditions from './conditions'
import Questionnaire from './questionnaire'
import Summary from './summary'
import Submit from './submit'

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: hidden;
  font-size: 1.1rem;
  line-height: 1.1;
  font-weight: 600;
  padding: 1rem 1rem 0 1rem;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    display: block;
    width: 90%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.body};
    }
    margin-top: 0.3rem;
  }
  input[type='radio'],
  input[type='checkbox'] {
    width: auto;
    display: inline;
    padding: 0rem;
  }
  input[type='date'] {
    width: auto;
    display: block;
  }
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`
const ModalHeader = styled.div`
  padding: 1rem;
`
const StyledTimesIcon = styled(FaTimes)`
  width: 15px;
  height: 14px;
`
const ButtonClose = styled.button`
  background: transparent;
  border: none;
`

const initialState: number = 0

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'nextIndex':
      return state + 1
    case 'prevIndex':
      return state - 1
    case 'setIndex':
      return parseInt(action.payload)
    default:
      throw new Error('You must to pass a type')
  }
}

const FormPagination: React.FC<any> = ({ onClose }) => {
  const [index, dispatch] = useReducer(reducer, initialState)
  const onNext = useCallback(() => dispatch({ type: 'nextIndex' }), [dispatch])
  const onPrev = useCallback(() => dispatch({ type: 'prevIndex' }), [dispatch])
  const setIndex = useCallback(
    (i) => dispatch({ type: 'setIndex', payload: i }),
    [dispatch]
  )

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <ModalHeader>
        <ButtonClose onClick={onClose}>
          <StyledTimesIcon />
        </ButtonClose>
      </ModalHeader>
      <Form onSubmit={onSubmitForm}>
        <Demographic isVisible={index === 0} onNext={onNext} />
        <Conditions isVisible={index === 1} onPrev={onPrev} onNext={onNext} />
        <Questionnaire
          isVisible={index === 2}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Summary isVisible={index === 3} onPrev={onPrev} onNext={onNext} />
        <Submit isVisible={index === 4} onPrev={onPrev} />
      </Form>
    </>
  )
}

export default FormPagination
