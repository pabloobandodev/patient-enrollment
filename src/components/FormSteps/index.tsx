import React, { useReducer, useCallback } from 'react'
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Demographic from './demographic'
import Conditions from './conditions'
import Questionnaire from './questionnaire'
import Summary from './summary'
import Submit from './submit'

const ModalHeader = styled.div`
  padding: 1rem;
`
const ContainerModalChild = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
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
  const setIndex = useCallback((i) => dispatch({ type: 'setIndex', payload: i }), [dispatch])

  return (
    <>
      <ModalHeader>
        <ButtonClose onClick={onClose}>
          <StyledTimesIcon />
        </ButtonClose>
      </ModalHeader>
      <ContainerModalChild>
        <Demographic isVisible={index === 0} onNext={onNext}/>
        <Conditions isVisible={index === 1} onPrev={onPrev} onNext={onNext}/>
        <Questionnaire isVisible={index === 2} onPrev={onPrev} onNext={onNext}/>
        <Summary isVisible={index === 3} onPrev={onPrev} onNext={onNext}/>
        <Submit isVisible={index === 4} onPrev={onPrev} />
      </ContainerModalChild>
    </>
  )
}

export default FormPagination
