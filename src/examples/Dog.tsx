import React from 'react'

import AnimalSizeContext from './AnimalSizeContext'
import { IMouse } from './Mouse'
import dogPic from './images/dog.jpg'

type Props = {
  size?: '200px' | '400px'
  mouse: IMouse
}

const Dog: React.SFC<Props> = props => (
  <AnimalSizeContext.Consumer>
    {size => (
      <img
        src={dogPic}
        alt="dog"
        style={{
          position: 'absolute',
          width: props.size || size,
          top: props.mouse.y,
          left: props.mouse.x
        }}
      />
    )}
  </AnimalSizeContext.Consumer>
)

export default Dog
