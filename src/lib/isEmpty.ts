const isEmpty = (value: string | number): boolean =>
  value === '' || value === null || value === 0 ? true : false

export default isEmpty
