import React from 'react'
import styled from 'styled-components'
import useEnrollment from '../../hooks/useEnrollment'
import useForm from '../../hooks/useForm'
import useList from '../../hooks/useList'
import Button from '../Button'
import InputQuestion from '../InputQuestion'
import List from '../List'

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

const Questionnaire: React.FC<any> = ({ isVisible, onNext, onPrev }) => {
  const [questionnaireValues, setValue] = useForm({
    tobacco: '',
    alcohol: '',
    drugs: '',
  })
  const [
    medications,
    addToMedications,
    removeToMedications,
    removeAllMedications,
  ] = useList()
  const [
    allergies,
    addToAllergies,
    removeToAllergies,
    removeAllAllergies,
  ] = useList()
  const [
    surgeries,
    addToSurgeries,
    removeToSurgeries,
    removeAllSurgeries,
  ] = useList()
  const { addToData } = useEnrollment()

  const onContinue = () => {
    addToData({
      questionary: {
        ...questionnaireValues,
        medications,
        allergies,
        surgeries,
      },
    })
    onNext()
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      <Container>
        <InputQuestion
          id='tobacco'
          value={questionnaireValues.tobacco}
          onChange={setValue}
        >
          Do you smoke any tobacco products?
        </InputQuestion>
        <InputQuestion
          id='alcohol'
          value={questionnaireValues.alcohol}
          onChange={setValue}
        >
          Do you drink alcohol?
        </InputQuestion>
        <InputQuestion
          id='drugs'
          value={questionnaireValues.drugs}
          onChange={setValue}
        >
          Have you regularly used illicit drugs?
        </InputQuestion>
        <List
          title='Current medications'
          id='medication'
          value={medications}
          onRemove={removeToMedications}
          onCreate={addToMedications}
          onRemoveAll={removeAllMedications}
        >
          Please list any medications you are currently taking including
          non-prescription medications, vitamins and supplements.
        </List>
        <List
          title='Medication allergies or reactions'
          id='allergy or reaction'
          value={allergies}
          onRemove={removeToAllergies}
          onCreate={addToAllergies}
          onRemoveAll={removeAllAllergies}
        >
          Please list any medication allergies or reactions.
        </List>
        <List
          title='List any surgeries or hospital stays you have had and their approximate date / year'
          id='surgery'
          value={surgeries}
          onRemove={removeToSurgeries}
          onCreate={addToSurgeries}
          onRemoveAll={removeAllSurgeries}
        >
          Type of surgery or reason for hospitalization
        </List>
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

export default Questionnaire
