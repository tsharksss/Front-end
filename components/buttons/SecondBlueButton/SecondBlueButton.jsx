import React from 'react'

import styles from './SecondBlueButton.module.css'
function SecondBlueButton ({text, style}) {


  return (
    <div>
      <button className={styles.button} style={style}>{text ? text : ''}</button>
    </div>
  )
}

export default SecondBlueButton