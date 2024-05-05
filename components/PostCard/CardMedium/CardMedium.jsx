import React from 'react'

import styles from './CardMedium.module.css'
import Image from "next/image";


function CardMedium ({title, description, image}) {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.image}>
          <Image/>
        </div>
        <div className={styles.text}>
          <div className={styles.flex}>
            <h1 className={styles.title}> {title} </h1>
            <h3 className={styles.description}> {description} </h3>
            <div className={styles.money}>
              <h2></h2>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardMedium