import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

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
const StyledButton = styled(Button)`
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
`

const Demographic: React.FC<any> = ({ isVisible, onNext, onPrev }) => {
  if (!isVisible) {
    return null
  }
  return (
    <>
      <ContainerText>Demographic</ContainerText>
      <ContainerButton>
        <StyledButton color={'#29e0ad'} onClick={onNext}>
          Next
        </StyledButton>
      </ContainerButton>
    </>
  )
}

export default Demographic
