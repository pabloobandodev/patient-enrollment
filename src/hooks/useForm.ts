import { useState } from 'react'

const useForm = (defaults: any) => {
  const [values, setValues] = useState(defaults)
  const [isInvalidForm, setIsInvalid] = useState(false)

  const updateValue = (e: any) => {
    let { value } = e.target
    if (e.target.type === 'number') {
      value = parseInt(value)
    }
    setValues({ ...values, [e.target.name]: value })
  }

  const onIsInvalidForm = () => {
    setIsInvalid(false)
    for (let key in values) {
      if (!values[key]) {
        setIsInvalid(true)
        return true
      }
    }
    return false
  }

  const clearSpecificValue = (key: string) =>
    setValues({ ...values, [key]: '' })

  return {
    values,
    updateValue,
    onIsInvalidForm,
    isInvalidForm,
    clearSpecificValue,
  }
}

export default useForm
