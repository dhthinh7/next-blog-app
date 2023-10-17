import Link from 'next/link'
import React from 'react'

import styles from './categoryList.module.css'
import Image from 'next/image'

interface ICategory {
  id: string
  slug: string
  title: string
  img?: string
}

const getCategoryList = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-cache'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const CategoryList = async () => {
  const response = await getCategoryList()
  const categories = response.data as ICategory[]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => {
          return (
            <Link key={item.id} href='/blog?cat=style' className={`${styles.category} ${styles[item.slug]}`}>
              <Image
                src={item.img ? item.img : ''}
                alt='img'
                width={32}
                height={32}
                className={`w-8 h-8 ${styles.image}`}
              />
              {item.title}
            </Link>
          )
        })}
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
