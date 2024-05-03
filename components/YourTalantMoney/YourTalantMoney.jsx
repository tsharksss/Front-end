import React from 'react'

import styles from './YourTalantMoney.module.css'
import Image from 'next/image'
import BlueButton from '../buttons/BlueButton/BlueButton'
import SecondBlueButton from '../buttons/SecondBlueButton/SecondBlueButton'
function YourTalantMoney (props) {


  return (
    <div>
      <div className={styles.main_title}></div>
      <div className={styles.flex}>
        <div className={styles.first_column}>
          <h1>Лучший способ заработка и общения с аудиторией для авторов контента.</h1>

          <div className={styles.grid}>
            <div className={styles.col}>
              <div className={styles.row}>
                <Image/>
                <p>Some text</p>
              </div>

              <div className={styles.row}>
                <Image/>
                <p>Some text</p>
              </div>

              <div className={styles.row}>
                <Image/>
                <p>Some text</p>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.row}>
                <Image/>
                <p>Some text</p>
              </div>

              <div className={styles.row}>
                <Image/>
                <p>Some text</p>
              </div>

              <div className={styles.row}>
                <Image/>
                <p>Some text</p>
              </div>
            </div>

          </div>
          <SecondBlueButton text={'Стать Автором'}/>
        </div>
        <div className={styles.second_column}>
          <Image src={""} alt={"image"}/>
        </div>
      </div>
    </div>
  )
}

export default YourTalantMoney