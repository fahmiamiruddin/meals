import React, { useState } from 'react'
import PropsComp from './PropsComp';

export const StateComp = () => {
  const [showContent, setShowContent] = useState(false);

  const testVar = 'hola saya test var';

  const handleOnCLick = () => {
    setShowContent(!showContent);
  }

  return (
    <div>
      <h3>State Comp</h3>
      <button onClick={handleOnCLick}>Show</button>
      {
        showContent && (
          <PropsComp
            testVar={testVar}
            varDua="Saya varDua"
          />
        )
      }
    </div>
  )
}
