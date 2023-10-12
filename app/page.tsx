import CardList from '@/components/cardList/CardList'
import CategoryList from '@/components/category/CategoryList'
import Featured from '@/components/featured/Featured'

import styles from './homepage.module.css'
import Menu from '@/components/menu/Menu'

const Home = () => {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={1} />
        <Menu />
      </div>
    </div>
  )
}

export default Home
