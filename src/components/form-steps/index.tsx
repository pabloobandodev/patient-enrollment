import React, { useReducer, useCallback } from 'react'
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const P = styled.p`
  font-weight: bold;
  line-height: 0.7rem;
`
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
    case 'nextStep':
      return state + 1 
    case 'prevStep':
      return state - 1 
    case 'setStep':
      return parseInt(action.payload) 
    default:
      throw new Error('You must to pass a type')
  }
}

const FormSteps: React.FC<any> = ({ onClose }) => {
  const [step, dispatch] = useReducer(reducer, initialState)
  const onNext = useCallback(() => dispatch({ type: 'nextStep' }), [dispatch])
  const onPrev = useCallback(() => dispatch({ type: 'prevStep' }), [dispatch])
  return (
    <>
      <ModalHeader>
        <ButtonClose onClick={onClose}>
          <StyledTimesIcon />
        </ButtonClose>
      </ModalHeader>
      <ContainerModalChild>
      </ContainerModalChild>
    </>
  )
}

export default FormSteps
