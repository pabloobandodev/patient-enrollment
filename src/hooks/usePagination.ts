import { useReducer, useCallback } from 'react'

const initialState: number = 0

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'nextIndex':
      return state + 1
    case 'prevIndex':
      return state - 1
    case 'setIndex':
      return parseInt(action.payload)
    default:
      throw new Error('You must to pass a type')
  }
}

const usePagination = () => {
  const [index, dispatch] = useReducer(reducer, initialState)
  const onNext = useCallback(() => dispatch({ type: 'nextIndex' }), [dispatch])
  const onPrev = useCallback(() => dispatch({ type: 'prevIndex' }), [dispatch])
  const setIndex = useCallback(
    (i) => dispatch({ type: 'setIndex', payload: i }),
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
