import React from 'react'
import styled from 'styled-components'
import useEnrollment from '../../hooks/useEnrollment'
import {
  attachDemographicLabels,
  attachConditionLabels,
  attachQuestionnaireLabels,
} from '../../lib/attachLabels'
import Button from '../Button'
import FormTitle from '../FormTitle'
import VisualizeData from '../VisualizeData'

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

type IProps = {
  isVisible: boolean
  onNext: () => void
  onPrev: () => void
  setIndex: (i: number) => void
}

const Summary: React.FC<IProps> = ({ isVisible, onNext, onPrev, setIndex }) => {
  const { data } = useEnrollment()
  const demographicData = attachDemographicLabels(data.generalInfo)
  const conditionData = attachConditionLabels(data.conditionIds)
  const questionnaireData = attachQuestionnaireLabels(data.questionnaire)

  if (!isVisible) {
    return null
  }

  return (
    <>
      <Container>
        <FormTitle number='4' subTitle='You can go back to edit any mistakes'>
          Summary
        </FormTitle>
        <VisualizeData data={demographicData} id='0' setIndex={setIndex}>
          Demographic Data
        </VisualizeData>
        <VisualizeData data={conditionData} id='1' setIndex={setIndex}>
          Conditions
        </VisualizeData>
        <VisualizeData data={questionnaireData} id='2' setIndex={setIndex}>
          Medical questions
        </VisualizeData>
      </Container>
      <ContainerButton>
        <ButtonsContainer>
          <StyledButton type='button' color={'#474747'} onClick={onPrev}>
            Back
          </StyledButton>
          <StyledButton type='button' onClick={onNext}>
            Next
          </StyledButton>
        </ButtonsContainer>
      </ContainerButton>
    </>
  )
}

export default Summary
