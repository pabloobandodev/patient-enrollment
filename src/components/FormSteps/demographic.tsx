import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { genders, maritalStatus } from '../../lib/constants'
import useForm from '../../hooks/useForm'
import useEnrollment from '../../hooks/useEnrollment'

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

const Demographic: React.FC<any> = ({ isVisible, onNext }) => {
  const [demographicsValues, setValue] = useForm({
    firstName: '',
    lastName: '',
    gender: '',
    birth: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    maritalStatus: '',
  })
  const { addToData } = useEnrollment()

  const onContinue = () => {
    addToData({ demographicsValues })
    onNext()
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      <Container>
        <label htmlFor='firstName'>
          First Name
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='first name'
            required
            value={demographicsValues.firstName}
            onChange={setValue}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='last name'
            required
            value={demographicsValues.lastName}
            onChange={setValue}
          />
        </label>
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
                onChange={setValue}
                checked={demographicsValues.gender === gender}
              />
              {gender}
            </label>
          ))}
        </div>
        <label htmlFor='birth'>
          Birth
          <input
            type='date'
            id='birth'
            name='birth'
            required
            placeholder='DD-MM-YYYY'
            min='2002-01-01'
            value={demographicsValues.birth}
            onChange={setValue}
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email'
            required
            value={demographicsValues.email}
            onChange={setValue}
          />
        </label>
        <label htmlFor='phone'>
          Phone
          <input
            type='tel'
            id='phone'
            name='phone'
            placeholder='phone'
            required
            value={demographicsValues.phone}
            onChange={setValue}
          />
        </label>
        <label htmlFor='streetAddress'>
          Street Address
          <input
            type='text'
            id='streetAddress'
            name='streetAddress'
            placeholder='street address'
            required
            value={demographicsValues.streetAddress}
            onChange={setValue}
          />
        </label>
        <label htmlFor='city'>
          City
          <input
            type='text'
            id='city'
            name='city'
            placeholder='city'
            required
            value={demographicsValues.city}
            onChange={setValue}
          />
        </label>
        <label htmlFor='state'>
          State
          <input
            type='text'
            id='state'
            name='state'
            placeholder='state'
            required
            value={demographicsValues.state}
            onChange={setValue}
          />
        </label>
        <label htmlFor='zip'>
          Zip
          <input
            type='text'
            id='zip'
            name='zip'
            placeholder='zip'
            required
            value={demographicsValues.zip}
            onChange={setValue}
          />
        </label>
        <label htmlFor='maritalStatus'>
          Select
          <select
            id='maritalStatus'
            name='maritalStatus'
            placeholder='maritalStatus'
            required
            value={demographicsValues.maritalStatus}
            onChange={setValue}
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

export default Demographic
