import React from 'react'

import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export interface ICard {
  key: string
  item: ICardItem
}

export interface ICardItem {
  _id: string
  img: string
  title: string
  createdAt: string
  catSlug: string
  slug: string
  desc: string
}
const Card = ({ key, item }: ICard) => {
  console.log('item.img', item.img)
  return (
    <div className={styles.container} key={key}>
      {item.img.length > 0 && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt='img' fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }} />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
