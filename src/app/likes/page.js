import React from 'react'
import styles from './likes.module.css'

import LeftHand from '../../../components/LeftHand/LeftHand'
import BigCard from '../../../components/PostCard/bigCard/bigCard'

export default function Page() {
  return (
    <div className={styles.main}>
        <div className={styles.flex}>
            <LeftHand history_page={true}/>
            <div>
                <div className={styles.title}>
                    <h1>Вам понравилось</h1>
                </div>
                <div className={styles.content}>
                    <BigCard avtor={true}/>
                    <BigCard avtor={true}/>
                    <BigCard avtor={true}/>
                    <BigCard avtor={true}/>
                </div>
            </div>
        </div>
    </div>   
  )
}
