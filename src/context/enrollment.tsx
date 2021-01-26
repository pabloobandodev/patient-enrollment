import React, { useState, Dispatch, SetStateAction } from 'react'

const EnrollmentContext = React.createContext<{
  data: {}
  setData: Dispatch<SetStateAction<{}>>
}>({
  data: {},
  setData: () => {},
})

export const EnrollmentProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({})
  return (
    <EnrollmentContext.Provider value={{ data, setData }}>
      {children}
    </EnrollmentContext.Provider>
  )
}

export default EnrollmentContext
