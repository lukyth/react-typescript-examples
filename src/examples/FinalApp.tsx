import React from 'react'
import Mouse from './Mouse'
import FinalCat from './FinalCat'
import AnimalSizeContext from './AnimalSizeContext'
import fairyWorldPic from './images/fairyWorld.jpg'

export default () => (
  <AnimalSizeContext.Provider value="400px">
    <Mouse
      render={mouse => (
        <div
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            background: `url(${fairyWorldPic}) repeat-y`,
            backgroundSize: 'contain'
          }}
        >
          <FinalCat mouse={mouse} />
        </div>
      )}
    />
  </AnimalSizeContext.Provider>
)
