export type Condition = {
  type: string
  condition: string
  isPositive: boolean
}

export type Question = {
  primary: string
  answer: string
  secondary: string
  value: [] | string
}

export type FormData = {
  demographics: {
    firstName: string
    lastName: string
    gender: string
    birth: string
    email: string
    phoneNumber: string
    streetAddress: string
    city: string
    state: string
    zip: string
    maritalStatus: string
  }
  conditions: Condition[]
  questionnaire: Question[]
}

export type ActionController = {
  type: string
  payload?: any
  fieldName?: any
}
