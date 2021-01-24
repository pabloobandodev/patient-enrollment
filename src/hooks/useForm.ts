import { useState } from 'react'

const useForm = (defaults: any) => {
  const [values, setValues] = useState(defaults)

  const updateValue = (e: any) => {
    let { value } = e.target
    if (e.target.type === 'number') {
      value = parseInt(value)
    }
    setValues({ ...values, [e.target.name]: value })
  }

  return [values, updateValue]
}

export default useForm
