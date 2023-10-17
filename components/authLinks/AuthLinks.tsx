'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

import styles from './authLink.module.css'

const AuthLinks = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { status } = useSession()

  return (
    <>
      {status !== 'authenticated' ? (
        <Link href='/login'>Login</Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <button className={styles.link} onClick={() => signOut()}>
            Logout
          </button>
        </>
      )}
      <button className={styles.burger} onClick={() => setOpen(!open)}>
        {Array.from({ length: 3 }, (_, index) => index).map((index) => {
          return <div className={styles.line} key={index}></div>
        })}
      </button>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status !== 'authenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <button className={styles.link} onClick={() => signOut()}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
export default AuthLinks
