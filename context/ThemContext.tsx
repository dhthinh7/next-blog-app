'use client'
import { useCallback } from 'react'
import { createContext, useState } from 'react'

interface IThemeContext {
  theme: 'dark' | 'light'
  handleSetTheme: (theme: 'dark' | 'light') => void
}

interface IThemeContextProvider {
  children: React.ReactNode
}

const getThemeStorage: () => 'dark' | 'light' = () => {
  let value: 'dark' | 'light' = 'light'
  if (typeof window !== 'undefined') {
    value = window.localStorage.getItem('theme') as 'dark' | 'light'
  }
  return value || 'light'
}

const setThemStorage: (theme: string) => void = (theme) => {
  if (typeof window !== undefined) window.localStorage.setItem('theme', theme)
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemContextProvider = ({ children }: IThemeContextProvider) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => getThemeStorage())
  const handleSetTheme = useCallback((themeUpdate: 'dark' | 'light') => {
    setThemStorage(themeUpdate)
    setTheme(themeUpdate)
  }, [])

  return <ThemeContext.Provider value={{ theme, handleSetTheme }}>{children}</ThemeContext.Provider>
}
