import React from 'react'
import ColumnInformation from './ColumnInformation/ColumnInformation'

function HowItWork (props) {


  return (
    <div>
      <h1>Как это работает?</h1>
      <div>
        <ColumnInformation/>
        <ColumnInformation/>
        <ColumnInformation/>
      </div>
    </div>
  )
}

export default HowItWork