import React from 'react'
import styled from 'styled-components'
import { BiEdit } from 'react-icons/bi'
import { Element, ButtonIcon } from './List'

const Container = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`
const ContainerH = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.tundora};
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.6rem;
`
const Label = styled.h4`
  margin-bottom: 0.3rem;
  margin-top: 1rem;
`

type IProps = {
  id: string
  data: { label: string; value: string }[]
  setIndex: (i: number) => void
}

const VisualizeData: React.FC<IProps> = ({ id, children, data, setIndex }) => {
  return (
    <Container>
      <ContainerH>
        <h3>{children}</h3>
        <ButtonIcon type='button' onClick={() => setIndex(parseInt(id))}>
          <BiEdit />
        </ButtonIcon>
      </ContainerH>
      {data.map((element: { label: string; value: string }) => (
        <React.Fragment key={`${id}-${element.label}`}>
          <Label>{element.label}</Label>
          <Element>
            {element.value === '' ? 'No information' : element.value}
          </Element>
        </React.Fragment>
      ))}
    </Container>
  )
}

export default VisualizeData
