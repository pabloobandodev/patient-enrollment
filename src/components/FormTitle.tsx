import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`
const Number = styled.span`
  background-color: blue;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.grannysmith};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  font-size: 1.3rem;
`
const H2 = styled.h2`
  margin-bottom: 0.3rem;
`

const FormTitle: React.FC<{ number: string; subTitle: string }> = ({
  children,
  number,
  subTitle,
}) => (
  <Container>
    <Number>{number}</Number>
    <div>
      <H2>{children}</H2>
      <h4>{subTitle}</h4>
    </div>
  </Container>
)

export default FormTitle
