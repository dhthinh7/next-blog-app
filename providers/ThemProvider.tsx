'use client'
import { ThemeContext } from '@/context/ThemContext'
import React, { useContext } from 'react'

interface IThemProvider {
  children: React.ReactNode
}
const ThemProvider = ({ children }: IThemProvider) => {
  const context = useContext(ThemeContext)
  return <div className={context?.theme}>{children}</div>
}

export default ThemProvider
