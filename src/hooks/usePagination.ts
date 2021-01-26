import { useReducer, useCallback } from 'react'

const initialState: number = 0

const reducer = (state: number, action: { type: string; payload: number }) => {
  switch (action.type) {
    case 'nextIndex':
      return state + 1
    case 'prevIndex':
      return state - 1
    case 'setIndex':
      return action.payload
    default:
      throw new Error('You must to pass a type')
  }
}

const usePagination = () => {
  const [index, dispatch] = useReducer(reducer, initialState)
  const onNext = useCallback(
    () => dispatch({ type: 'nextIndex', payload: 0 }),
    [dispatch]
  )
  const onPrev = useCallback(
    () => dispatch({ type: 'prevIndex', payload: 0 }),
    [dispatch]
  )
  const setIndex = useCallback(
    (i: number) => dispatch({ type: 'setIndex', payload: i }),
    [dispatch]
  )

  return {
    index,
    onNext,
    onPrev,
    setIndex,
  }
}

export default usePagination
