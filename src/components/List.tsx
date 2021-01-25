import React, { useState } from 'react'
import { BiTrash, BiPlusCircle } from 'react-icons/bi'
import styled from 'styled-components'
import Toggle from './Toggle'

const ContainerH = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`
const Element = styled.p`
  background-color: #f9f9f9;
  width: 90%;
  padding: 0.7rem 0.2rem 0.7rem 0.2rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #cccccc;
  border-bottom: 3px solid ${({ theme }) => theme.grannysmith};
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`
const P = styled.p`
  margin-bottom: 0.2rem;
`
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  color: ${(props) => props.color};
  font-size: 1.5rem;
`

const List: React.FC<{
  title: string
  id: string
  value: string[]
  onRemove: (i: number) => void
  onCreate: (value: string) => void
  onRemoveAll: () => void
}> = ({ children, title, id, value, onRemove, onCreate, onRemoveAll }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [text, setText] = useState('')

  const toggleIsChecked = () => {
    onRemoveAll()
    setIsChecked((prevValue) => !prevValue)
  }

  const addValue = () => {
    onCreate(text)
    setText('')
  }

  const renderList = () => {
    if (!isChecked && value.length === 0) return null
    return (
      <>
        <small>{children}</small>
        {value.map((element, i) => (
          <ContainerH key={`${id}-${i}`}>
            <Element>{element}</Element>
            <Button type='button' onClick={() => onRemove(i)} color='#d0312d'>
              <BiTrash />
            </Button>
          </ContainerH>
        ))}
        <P>Add {id}</P>
        <label htmlFor={`list-${id}`} className='add-list'>
          <input
            type='text'
            id={`list-${id}`}
            name={`list-${id}`}
            placeholder={id}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type='button' color='#29e0ad' onClick={addValue}>
            <BiPlusCircle />
          </Button>
        </label>
      </>
    )
  }

  return (
    <>
      <ContainerH>
        <h4>{title}</h4>
        <Toggle
          isChecked={isChecked || value.length > 0}
          toggleIsChecked={toggleIsChecked}
          id={id}
        />
      </ContainerH>
      {renderList()}
    </>
  )
}

export default List
