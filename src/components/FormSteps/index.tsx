import React from 'react'
import Demographic from './demographic'
import Conditions from './conditions'
import Questionnaire from './questionnaire'
import Summary from './summary'
import Submit from './submit'
import Form from '../Form'
import usePagination from '../../hooks/usePagination'

const FormPagination: React.FC = () => {
  const { index, onNext, onPrev } = usePagination()
  return (
    <Form>
      <Demographic isVisible={index === 0} onNext={onNext} />
      <Conditions isVisible={index === 1} onPrev={onPrev} onNext={onNext} />
      <Questionnaire isVisible={index === 2} onPrev={onPrev} onNext={onNext} />
      <Summary isVisible={index === 3} onPrev={onPrev} onNext={onNext} />
      <Submit isVisible={index === 4} onPrev={onPrev} />
    </Form>
  )
}

export default FormPagination
