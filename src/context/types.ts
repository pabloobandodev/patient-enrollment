export type IObjectData = {
  [key: string]: string
}

export type IData = {
  generalInfo: IObjectData
  conditionIds: string[]
  questionnaire: IObjectData
}

export type ICondition = {
  type: string
  condition: string
  id: string
}
