import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { genders, maritalStatus } from '../../lib/constants'
import useForm from '../../hooks/useForm'
import { useEnrollment, addToData } from '../../context/enrollment-context'
import Input from '../Input'
import FormTitle from '../FormTitle'

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`
const ContainerButton = styled.div`
  flex-grow: 0.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 2rem;
  margin-top: 1rem;
`

type IProps = {
  isVisible: boolean
  onNext: () => void
}

const GeneralInfo: React.FC<IProps> = ({ isVisible, onNext }) => {
  const { values, updateValue, onIsInvalidForm, isInvalidForm } = useForm({
    firstName: '',
    lastName: '',
    gender: 'Other',
    birth: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    maritalStatus: 'Other',
  })
  const { data, setData } = useEnrollment()

  const onContinue = () => {
    if (onIsInvalidForm()) return
    addToData(setData, data, { generalInfo: values })
    onNext()
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      <Container>
        <FormTitle number='1' subTitle='Let’s get started'>
          General Information
        </FormTitle>
        <Input
          type='text'
          id='firstName'
          placeholder='first name'
          required
          isInvalidForm={isInvalidForm}
          value={values.firstName}
          onChange={updateValue}
        >
          First Name
        </Input>
        <Input
          type='text'
          id='lastName'
          placeholder='last name'
          required
          isInvalidForm={isInvalidForm}
          value={values.lastName}
          onChange={updateValue}
        >
          Last Name
        </Input>
        <div>
          Gender:
          {genders.map((gender) => (
            <label htmlFor={gender} key={gender}>
              <input
                type='radio'
                id={gender}
                name='gender'
                required
                value={gender}
                onChange={updateValue}
                checked={values.gender === gender}
              />
              {gender}
            </label>
          ))}
        </div>
        <Input
          type='date'
          id='birth'
          placeholder='DD-MM-YYYY'
          required
          isInvalidForm={isInvalidForm}
          value={values.birth}
          onChange={updateValue}
        >
          Birth
        </Input>
        <Input
          type='email'
          id='email'
          placeholder='email'
          required
          isInvalidForm={isInvalidForm}
          value={values.email}
          onChange={updateValue}
        >
          Email
        </Input>
        <Input
          type='tel'
          id='phone'
          placeholder='phone'
          required
          isInvalidForm={isInvalidForm}
          value={values.phone}
          onChange={updateValue}
        >
          Phone
        </Input>
        <Input
          type='text'
          id='streetAddress'
          placeholder='street address'
          required
          isInvalidForm={isInvalidForm}
          value={values.streetAddress}
          onChange={updateValue}
        >
          Street Address
        </Input>
        <Input
          type='text'
          id='city'
          placeholder='city'
          required
          isInvalidForm={isInvalidForm}
          value={values.city}
          onChange={updateValue}
        >
          City
        </Input>
        <Input
          type='text'
          id='state'
          placeholder='state'
          required
          isInvalidForm={isInvalidForm}
          value={values.state}
          onChange={updateValue}
        >
          State
        </Input>
        <Input
          type='text'
          id='zip'
          placeholder='zip'
          required
          isInvalidForm={isInvalidForm}
          value={values.zip}
          onChange={updateValue}
        >
          Zip
        </Input>
        <label htmlFor='maritalStatus'>
          Select
          <select
            id='maritalStatus'
            name='maritalStatus'
            placeholder='maritalStatus'
            required
            value={values.maritalStatus}
            onChange={updateValue}
          >
            {maritalStatus.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </Container>
      <ContainerButton>
        <Button type='button' onClick={onContinue}>
          Continue
        </Button>
      </ContainerButton>
    </>
  )
}

export default GeneralInfo
