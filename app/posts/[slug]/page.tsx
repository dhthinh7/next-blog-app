import React from 'react'

import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

interface IISinglePageDataUser {
  image: string
  name: string
}
interface ISinglePageData {
  title?: string
  user?: IISinglePageDataUser
  img?: string
  desc?: string | TrustedHTML
}

const data: ISinglePageData = {
  title: 'How do I improve coding in 3 months?',
  user: {
    image: '/food.png',
    name: 'Name'
  },
  img: '/food.png',
  desc: `No Phone-Calls,

  No Social Media,
  
  No Disturbance,
  
  Only coding & learning DSA from YouTube or buy a course.
  
  Detox from everyone for at least a few hours in a day will teach you a lot ✨
  
  P.S:- If you're reading this then do upvote this answer because it will motivate me to write more:)`
}

interface ISinglePage {
  slug: string
}

const SinglePage = ({ slug }: ISinglePage) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt='' fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt='' fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc ? data.desc : '' }} />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
