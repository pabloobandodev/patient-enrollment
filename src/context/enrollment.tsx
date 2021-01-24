import React, { useState } from 'react'

const EnrollmentContext = React.createContext<{ data: {}; setData: any }>({
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
