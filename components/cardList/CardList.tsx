import React from 'react'

import styles from './cardList.module.css'
import Card, { ICard, ICardItem } from '../card/Card'
import Pagination from '../pagination/Pagination'

const posts: ICardItem[] = [
  {
    _id: '0',
    img: '/p1.jpeg',
    createdAt: '11.02.2023',
    catSlug: 'catSlug',
    slug: 'slug',
    title: 'title',
    desc: 'description'
  },
  {
    _id: '2',
    img: '/food.png',
    createdAt: '11.02.2023',
    catSlug: 'catSlug',
    slug: 'slug',
    title: 'title',
    desc: 'description'
  },
  {
    _id: '3',
    img: '/food.png',
    createdAt: '11.02.2023',
    catSlug: 'catSlug',
    slug: 'slug',
    title: 'title',
    desc: 'description'
  }
]

export interface ICardList {
  page: number
  cat?: string
}

const CardList = ({ page, cat }: ICardList) => {
  const POST_PER_PAGE = 2
  const count = 3
  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}> {posts?.map((item) => <Card item={item} key={item._id} />)}</div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList
