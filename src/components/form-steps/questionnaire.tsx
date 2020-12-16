import React from 'react'
import styled from "styled-components";
import Button from '../button'

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
const ContainerButton = styled.div`
  flex-grow: 0.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 2rem;
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

const Questionnaire: React.FC<any> = ({ isVisible, onNext, onPrev }) => {
  if (!isVisible) {
    return null
  }
  return (
    <>
      <ContainerText>Questionnaire</ContainerText>
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

export default Questionnaire
