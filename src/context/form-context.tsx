import { useContext, createContext, useReducer, useMemo } from 'react'
import { formData } from '../lib/constants'
import { FormData, ActionController, Condition, Question } from './types'

const [DEMOGRAPHIC, CONDITIONS, QUESTIONNAIRE] = [
  'DEMOGRAPHIC',
  'CONDITIONS',
  'QUESTIONNAIRE',
]

const INITIAL_STATE: FormData = formData

const FormContext = createContext<{
  state: FormData
  dispatch: React.Dispatch<ActionController>
}>({ state: INITIAL_STATE, dispatch: () => {} })
FormContext.displayName = 'FormContext'

const reducer = (state: FormData, action: ActionController) => {
  switch (action.type) {
    case DEMOGRAPHIC:
      return {
        ...state,
        demographics: {
          ...state.demographics,
          [action.fieldName]: action.payload,
        },
      }
    case CONDITIONS:
      return {
        ...state,
        conditions: state?.conditions.map((condition: Condition) =>
          condition.condition === action.payload
            ? {
                ...condition,
                isPositive: !condition.isPositive,
              }
            : condition
        ),
      }
    case QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: state?.questionnaire.map((question: Question) =>
          question.primary === action.payload.primary
            ? {
                ...question,
                [action.fieldName]: action.payload.value,
              }
            : question
        ),
      }
    default:
      return state
  }
}

const FormProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <FormContext.Provider {...props} value={value} />
}

const useForm = () => {
  return useContext(FormContext)
}

export { FormProvider, useForm, DEMOGRAPHIC, CONDITIONS, QUESTIONNAIRE }
