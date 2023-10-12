'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useCallback } from 'react'

import styles from './comments.module.css'

interface IComments {
  postSlug: string
}

interface IUser {
  image: string
  name: string
}

interface ICommentsData {
  _id: string
  user: IUser
  createdAt: string
  desc: string
}

const data: ICommentsData[] = [
  {
    _id: '0',
    user: {
      name: 'John',
      image: '/food.png'
    },
    createdAt: new Date().getTime().toString(),
    desc: 'The description comment for the comment'
  },
  {
    _id: '1',
    user: {
      name: 'John',
      image: '/food.png'
    },
    createdAt: new Date().getTime().toString(),
    desc: 'The description comment for the comment 2'
  }
]
const status = 'authenticated'
const Comments = ({ postSlug }: IComments) => {
  const [desc, setDesc] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = useCallback(() => {}, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder='write a comment...'
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? 'loading'
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image src={item.user.image} alt='' width={50} height={50} className={styles.image} />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments
