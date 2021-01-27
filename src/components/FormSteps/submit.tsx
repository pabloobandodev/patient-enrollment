import React, { useState } from 'react'
import styled from 'styled-components'
import { terms } from '../../lib/constants'
import isEmpty from '../../lib/isEmpty'
import Button from '../Button'
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
const Li = styled.li`
  margin-bottom: 0.5rem;
`
const Small = styled.small`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  margin-left: 0.3rem;
`
const Span = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.grannysmith};
  color: ${({ theme }) => theme.grannysmith};
  padding-bottom: 0.3rem;
`

type IProps = {
  isVisible: boolean
  onPrev: () => void
}

const Submit: React.FC<IProps> = ({ isVisible, onPrev }) => {
  const [isAgree, setIsAgree] = useState(false)
  const toggleIsAgree = () => setIsAgree((prevValue) => !prevValue)

  if (!isVisible) {
    return null
  }

  return (
    <>
      <Container>
        <FormTitle number='5' subTitle='Read the terms'>
          Terms
        </FormTitle>
        <ul>
          {terms
            .split('.')
            .filter((term) => !isEmpty(term))
            .map((term, i) => (
              <Li key={`term-${i}`}>{term}</Li>
            ))}
        </ul>
        <label htmlFor='terms'>
          <input
            type='checkbox'
            id='terms'
            name='terms'
            required
            onChange={toggleIsAgree}
            checked={isAgree}
          />
          <Small>
            I have read and agree to the <Span>Terms of Use</Span>,{' '}
            <Span>Privacy Policy</Span> and <Span>Membership Agreement</Span>.
          </Small>
        </label>
      </Container>
      <ContainerButton>
        <ButtonsContainer>
          <StyledButton type='button' color={'#474747'} onClick={onPrev}>
            Back
          </StyledButton>
          <StyledButton type='submit' disabled={!isAgree}>
            Submit
          </StyledButton>
        </ButtonsContainer>
      </ContainerButton>
    </>
  )
}

export default Submit
