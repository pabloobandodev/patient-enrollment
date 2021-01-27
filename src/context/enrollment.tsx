import React, { useState } from 'react'

export type IObjectData = {
  [key: string]: string
}

type IData = {
  generalInfo: IObjectData
  conditionIds: string[]
  questionnaire: IObjectData
}

const EnrollmentContext = React.createContext<{
  data: IData
  setData: any
}>({
  data: {
    generalInfo: {},
    conditionIds: [],
    questionnaire: {},
  },
  setData: (data: {}) => {},
})

export const EnrollmentProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({
    generalInfo: {},
    conditionIds: [],
    questionnaire: {},
  })

  return (
    <EnrollmentContext.Provider value={{ data, setData }}>
      {children}
    </EnrollmentContext.Provider>
  )
}

export default EnrollmentContext
