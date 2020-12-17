import { useState, useEffect } from 'react'

const useDarkMode: () => [string, () => void, boolean] = () => {
  const [theme, setTheme] = useState('light')
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode: string) => {
    setTheme(mode)
  }

  const themeToggler = () =>
    theme === 'light' ? setMode('dark') : setMode('light')

  useEffect(() => {
    setMode('light')
    setMountedComponent(true)
  }, [])

  return [theme, themeToggler, mountedComponent]
}

export default useDarkMode
