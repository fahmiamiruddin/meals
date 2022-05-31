import React from 'react'

const PropsComp = (props) => {
  return (
    <div>
      <h4>Sembunyikan Saya {props.testVar}</h4>
      <p>{props.varDua}</p>
    </div>
  )
}

export default PropsComp