import React from 'react'

import styles from './SubscribeButtom.module.css'

export default function SubscribeButtom({isActive = false, text, styleee}) {
  return (
    <div>
      <button 
      className={isActive ?  styles.buttonActive : styles.button} 
    //   className={`${ isActive ? styles.buttonActive : styles.button}`} 
      
      style={styleee}>{text ? text : ''}</button>
    </div>
  )
}
