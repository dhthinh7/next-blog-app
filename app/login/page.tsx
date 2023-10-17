'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import styles from './login.module.css'
import { useSession, signIn } from 'next-auth/react'
const Login = () => {
  const { data, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  if (status === 'authenticated') {
    router.push('/')
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.socialButton} onClick={() => signIn('google')}>
          Sign in with Google
        </button>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default Login
