import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemToggle from '../themToggle/ThemToggle'
import styles from './navbar.module.css'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
      </div>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <ThemToggle />
        <Link href='/' className={styles.link}>
          Homepages
        </Link>
        <Link href='/' className={styles.link}>
          Contact
        </Link>
        <Link href='/' className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </section>
  )
}

export default Navbar
