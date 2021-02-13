import React, { useState, useContext } from 'react'
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

const EnrollmentProvider: React.FC = ({ children }) => {
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

const useEnrollment = () => {
  const context = useContext(EnrollmentContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

const addToData = (dispatch: any, prevData: IData, newData: {}) =>
  dispatch({ ...prevData, ...newData })

export { EnrollmentProvider, useEnrollment, addToData }
