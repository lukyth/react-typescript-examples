import React from 'react'

import { IMouse } from './Mouse'
import AnimalSizeContext from './AnimalSizeContext'
import catPic from './images/cat.jpg'

type Props = {
  mouse: IMouse
}

const FinalCat: React.SFC<Props> = props => (
  <AnimalSizeContext.Consumer>
    {size => (
      <img
        src={catPic}
        alt="final cat"
        style={{
          position: 'absolute',
          width: size,
          top: props.mouse.y,
          left: props.mouse.x
        }}
      />
    )}
  </AnimalSizeContext.Consumer>
)

export default FinalCat
