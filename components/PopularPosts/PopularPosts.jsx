import React from 'react'

import styles from './PopularPosts.module.css'
import CardMedium from '../PostCard/CardMedium/CardMedium'
import TransprentWhiteButton from '../buttons/TransprentWhiteButton/TransprentWhiteButton'
function PopularPosts (props) {
  return (
    <div>
      <h1> Популярное </h1>
      <div className={styles.popular_cards}>
        <div className={styles.grid}>
          <CardMedium/>
          <CardMedium/>
          <CardMedium/>
        </div>
      </div>
      <TransprentWhiteButton text={'Показать еще...'}/>

    </div>
  )
}

export default PopularPosts