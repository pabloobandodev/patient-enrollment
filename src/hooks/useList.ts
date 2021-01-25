import { useState } from 'react'

const useList = (): [
  string[],
  (value: string) => void,
  (i: number) => void,
  () => void
] => {
  const [list, setList] = useState<string[]>([])

  const addToList = (value: string) => {
    setList([...list, value])
  }

  const removeToList = (i: number) =>
    setList([...list.slice(0, i), ...list.slice(i + 1)])

  const removeAll = () => setList([])

  return [list, addToList, removeToList, removeAll]
}

export default useList
