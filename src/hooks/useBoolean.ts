import { useState } from 'react'
import { ModalValues } from './types'

const useBoolean = (): ModalValues => {
  const [isVisible, setVisible] = useState(true)
  const toggleVisible = () => setVisible((prevValue) => !prevValue)
  return [isVisible, toggleVisible]
}

export default useBoolean
