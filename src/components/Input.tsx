import React, { ChangeEvent } from 'react'
import isEmpty from '../lib/isEmpty'

type IInput = {
  type: string
  id: string
  placeholder: string
  value: string
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void
  isInvalidForm: boolean
  required: boolean
}

const Input: React.FC<IInput> = ({
  children,
  type,
  id,
  placeholder,
  value,
  onChange,
  isInvalidForm,
  required,
}) => {
  const isInValid = isInvalidForm && isEmpty(value) && required ? true : false
  return (
    <>
      <label htmlFor='firstName'>
        {children}
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          className={`${isInValid && 'invalid'}`}
        />
      </label>
      {isInValid && <small className='error'>this field is required</small>}
    </>
  )
}

export default Input
