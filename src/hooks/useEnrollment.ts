import { useContext } from 'react'
import EnrollmentContext from '../context/enrollment'

const useEnrollment = () => {
  const { data, setData } = useContext(EnrollmentContext)

  const addToData = (newData: {}) => {
    setData({ ...data, ...newData })
  }

  const submitEnrollment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('data ', data)
  }

  return {
    data,
    addToData,
    submitEnrollment,
  }
}

export default useEnrollment
