import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: hidden;
  padding: 1rem 1rem 0 1rem;
  max-width: 850px;
  height: 600px;
  margin: 4rem auto 4rem auto;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border-top: 6px solid ${({ theme }) => theme.grannysmith};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  label {
    margin-top: 1.1rem;
    margin-bottom: 1.1rem;
  }
  input,
  textarea,
  select {
    display: block;
    background-color: #f9f9f9;
    width: 95%;
    padding: 0.7rem 0.2rem 0.7rem 0.2rem;
    margin-top: 0.2rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #cccccc;
    border-bottom: 3px solid ${({ theme }) => theme.grannysmith};
    &:focus {
      outline: 0;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    }
  }
  input[type='radio'],
  input[type='checkbox'] {
    width: auto;
    display: inline;
    padding: 0rem;
  }
  input[type='date'] {
    width: auto;
    display: block;
  }
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
  .condition {
    display: block;
  }
`

export default Form
