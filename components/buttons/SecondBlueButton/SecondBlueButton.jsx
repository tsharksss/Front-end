import React from 'react'

import styles from './SecondBlueButton.module.css'
function SecondBlueButton ({text}) {


  return (
    <div>
      <button className={styles.button}>{text ? text : ''}</button>
    </div>
  )
}

export default SecondBlueButton