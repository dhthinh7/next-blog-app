import Link from 'next/link'
import React from 'react'

import styles from './categoryList.module.css'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
          <Image src='/style.png' alt='img' width={32} height={32} className={`w-8 h-8 ${styles.image}`} />
          style
        </Link>
        <Link href='/blog?cat=fashion' className={`${styles.category} ${styles.fashion}`}>
          <Image src='/fashion.png' alt='img' width={32} height={32} className={`w-8 h-8 ${styles.image}`} />
          fashion
        </Link>
        <Link href='/blog?cat=food' className={`${styles.category} ${styles.food}`}>
          <Image src='/food.png' alt='img' width={32} height={32} className={`w-8 h-8 ${styles.image}`} />
          food
        </Link>
        {/* {data?.map((item) => (
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.img && (
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          )}
          {item.title}
        </Link>
      ))} */}
      </div>
    </div>
  )
}

export default CategoryList
