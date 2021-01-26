import { useState, ChangeEvent } from 'react'

type IDefaults = {
  [key: string]: string
}

const useForm = (defaults: IDefaults) => {
  const [values, setValues] = useState(defaults)
  const [isInvalidForm, setIsInvalid] = useState(false)

  const updateValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => setValues({ ...values, [e.target.name]: e.target.value })

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
