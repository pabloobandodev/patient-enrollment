import React from 'react'
import styled from 'styled-components'
import { BiEdit } from 'react-icons/bi'
import { Element, Button } from './List'

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

const VisualizeData: React.FC<{ id: string; data: any; setIndex: any }> = ({
  id,
  children,
  data,
  setIndex,
}) => {
  return (
    <Container>
      <ContainerH>
        <h3>{children}</h3>
        <Button type='button' onClick={() => setIndex(id)}>
          <BiEdit />
        </Button>
      </ContainerH>
      {data.map((element: any) => (
        <React.Fragment key={`${id}-${element.label}`}>
          <Label>{element.label}</Label>
          <Element>
            {element.value.length !== 0 ? element.value : 'No information'}
          </Element>
        </React.Fragment>
      ))}
    </Container>
  )
}

export default VisualizeData
