import React, { useState } from 'react'
import { IData } from './types'

const EnrollmentContext = React.createContext<{
  data: IData
  setData: any
}>({
  data: {
    generalInfo: {},
    conditionIds: [],
    questionnaire: {},
  },
  setData: () => {},
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
