import { conditions, questionnaireLabels } from './constants'
import { IObjectData } from '../context/types'
import { ICondition } from '../context/types'

const splitWord = (word: string) => word.split(/(?=[A-Z])/).join(' ')
const capitalizeWord = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const attachDemographicLabels = (generalInfo: IObjectData) => {
  if (!generalInfo) return []
  return Object.keys(generalInfo).map((key) => ({
    label: capitalizeWord(splitWord(key).toLowerCase()),
    value: generalInfo[key],
  }))
}

export const attachConditionLabels = (conditionIds: string[]) => {
  if (!conditionIds || conditionIds.length === 0) return []
  return [
    {
      label: 'Conditions',
      value: conditionIds
        .map((id: string) => {
          const condition = conditions.find(
            (singleCondition: ICondition) => singleCondition.id === id
          )
          return condition?.condition
        })
        .join(', '),
    },
  ]
}

export const attachQuestionnaireLabels = (questionnaire: IObjectData) => {
  if (!questionnaire) return []
  return Object.keys(questionnaire).map((key: string) => ({
    label: questionnaireLabels[key],
    value: questionnaire[key],
  }))
}
