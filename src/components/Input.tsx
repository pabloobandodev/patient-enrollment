import React from 'react'
import isEmpty from '../lib/isEmpty'

type InputI = {
  type: string
  id: string
  placeholder: string
  value: string
  onChange: (e: any) => void
  isInvalidForm: boolean
  required: boolean
}

const Input: React.FC<InputI> = ({
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
