import React from 'react'
import Form from '../Form'
import GeneralInfo from './general-info'
import Conditions from './conditions'
import Questionnaire from './questionnaire'
import Summary from './summary'
import Submit from './submit'
import usePagination from '../../hooks/usePagination'
import useEnrollment from '../../hooks/useEnrollment'

const FormPagination: React.FC = () => {
  const { index, onNext, onPrev, setIndex } = usePagination()
  const { submitEnrollment } = useEnrollment()

  return (
    <Form onSubmit={submitEnrollment}>
      <GeneralInfo isVisible={index === 0} onNext={onNext} />
      <Conditions isVisible={index === 1} onPrev={onPrev} onNext={onNext} />
      <Questionnaire isVisible={index === 2} onPrev={onPrev} onNext={onNext} />
      <Summary
        isVisible={index === 3}
        onPrev={onPrev}
        onNext={onNext}
        setIndex={setIndex}
      />
      <Submit isVisible={index === 4} onPrev={onPrev} />
    </Form>
  )
}

export default FormPagination
