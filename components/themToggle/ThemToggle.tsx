'use client'
import React, { useCallback, useContext } from 'react'
import styles from './themToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemContext'
const ThemToggle = () => {
  const themeContext = useContext(ThemeContext)

  const handleChangeTheme = useCallback(() => {
    const theme: 'dark' | 'light' = themeContext?.theme === 'dark' ? 'light' : 'dark'
    themeContext?.handleSetTheme(theme)
  }, [themeContext])

  return (
    <button
      className={styles.container}
      onClick={handleChangeTheme}
      style={themeContext?.theme === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: '#0f172a' }}
    >
      <Image src='/moon.png' alt='' width={14} height={14} />
      <div
        className={styles.ball}
        style={themeContext?.theme === 'dark' ? { left: 2, background: '#0f172a' } : { right: 2, background: 'white' }}
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14} />
    </button>
  )
}

export default ThemToggle
