import { useContext } from 'react'
import EnrollmentContext from '../context/enrollment'

const useEnrollment = () => {
  const { data, setData } = useContext(EnrollmentContext)

  const addToData = (newData: any) => {
    setData({ ...data, ...newData })
  }

  const submitEnrollment = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return {
    data,
    addToData,
    submitEnrollment,
  }
}

export default useEnrollment
