'use client'
import React, { useState, useCallback } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './writePage.module.css'
import { useSession } from 'next-auth/react'

const WritePage = () => {
  const router = useRouter()
  const { status } = useSession()

  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState('')
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')

  const handleSubmit = useCallback(() => {
    console.log(value)
  }, [value])

  if (status === 'authenticated') {
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <input type='text' placeholder='Title' className={styles.input} onChange={(e) => setTitle(e.target.value)} />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value='style'>style</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='culture'>culture</option>
        <option value='travel'>travel</option>
        <option value='coding'>coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type='file' id='image' style={{ display: 'none' }} />
            <button className={styles.addButton}>
              <label htmlFor='image'>
                <Image src='/image.png' alt='' width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell your story...'
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default WritePage
