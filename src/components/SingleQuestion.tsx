import React from 'react'
import { useForm, QUESTIONNAIRE } from '../context/form-context'
import { Question } from '../context/types'

const SingleQuestion: React.FC<{ question: Question }> = ({ question }) => {
  const { dispatch } = useForm()

  const inputHandler = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    dispatch({
      type: QUESTIONNAIRE,
      payload: { primary: name, value },
      fieldName,
    })
  }

  const renderSecondaryQuestion = () => {
    if (question.answer === 'no' || question.answer === '') return null

    if (Array.isArray(question.value)) {
      return (
        <>
          {question.value.map((item: string) => (
            <div key={item}></div>
          ))}
          <label htmlFor={question.secondary}>
            {question.secondary}
            <input
              type='text'
              id={question.secondary}
              name={question.primary}
              placeholder='tell us...'
              required
              value={question.value}
              onChange={inputHandler('value')}
            />
          </label>
        </>
      )
    }

    return (
      <label htmlFor={question.secondary}>
        {question.secondary}
        <input
          type='text'
          id={question.secondary}
          name={question.primary}
          placeholder='tell us...'
          required
          value={question.value}
          onChange={inputHandler('value')}
        />
      </label>
    )
  }

  return (
    <fieldset key={question.primary}>
      {question.primary}
      <label htmlFor={`yes - ${question.primary}`}>
        <input
          type='radio'
          id={`yes - ${question.primary}`}
          name={question.primary}
          required
          value='yes'
          onChange={inputHandler('answer')}
          checked={question.answer === 'yes'}
        />
        yes
      </label>
      <label htmlFor={`no - ${question.primary}`}>
        <input
          type='radio'
          id={`no - ${question.primary}`}
          name={question.primary}
          required
          value='no'
          onChange={inputHandler('answer')}
          checked={question.answer === 'no'}
        />
        no
      </label>
      {renderSecondaryQuestion()}
    </fieldset>
  )
}

export default SingleQuestion
