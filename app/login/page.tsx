'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import styles from './login.module.css'
import { useSession, signIn } from 'next-auth/react'
// {
//   "user": {
//       "name": "Đoàn Hoàng Thịnh",
//       "email": "dhthinh7@gmail.com",
//       "image": "https://lh3.googleusercontent.com/a/ACg8ocIXXjwWiT4rekqVEVixHicss76kf7eMTQJnfZqUdo28Xg=s96-c"
//   },
//   "expires": "2023-10-17T18:26:42.608Z"
// }
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
