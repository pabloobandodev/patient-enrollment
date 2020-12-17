import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { useForm, DEMOGRAPHIC } from '../../context/form-context'
import { genders, maritalStatus } from '../../lib/constants'

const Container = styled.div`
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
const StyledButton = styled(Button)`
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  width: 100%;
`

const Demographic: React.FC<any> = ({ isVisible, onNext }) => {
  const {
    state: { demographics },
    dispatch,
  } = useForm()

  if (!isVisible) {
    return null
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    dispatch({ type: DEMOGRAPHIC, payload: val, fieldName: name })
  }

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    dispatch({ type: DEMOGRAPHIC, payload: value, fieldName: name })
  }

  return (
    <>
      <Container>
        <h3>Demographic</h3>
        <label htmlFor='firstName'>
          First Name
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='firstName'
            required
            value={demographics.firstName}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='lastName'
            required
            value={demographics.lastName}
            onChange={inputHandler}
          />
        </label>
        <fieldset>
          Gender:
          {genders.map((gender) => (
            <label htmlFor={gender} key={gender}>
              <input
                type='radio'
                id={gender}
                name='gender'
                required
                value={gender}
                onChange={inputHandler}
                checked={demographics.gender === gender}
              />
              {gender}
            </label>
          ))}
        </fieldset>
        <label htmlFor='birth'>
          Birth
          <input
            type='date'
            id='birth'
            name='birth'
            required
            value={demographics.birth}
            onChange={inputHandler}
            placeholder='DD-MM-YYYY'
            min='2002-01-01'
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
            value={demographics.email}
            onChange={inputHandler}
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
            value={demographics.phoneNumber}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='streetAddress'>
          Street Address
          <input
            type='text'
            id='streetAddress'
            name='streetAddress'
            placeholder='streetAddress'
            required
            value={demographics.streetAddress}
            onChange={inputHandler}
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
            value={demographics.city}
            onChange={inputHandler}
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
            value={demographics.state}
            onChange={inputHandler}
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
            value={demographics.zip}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='maritalStatus'>
          Select
          <select
            id='maritalStatus'
            name='maritalStatus'
            placeholder='maritalStatus'
            required
            value={demographics.maritalStatus}
            onChange={selectHandler}
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
        <StyledButton color={'#29e0ad'} onClick={onNext}>
          Next
        </StyledButton>
      </ContainerButton>
    </>
  )
}

export default Demographic
