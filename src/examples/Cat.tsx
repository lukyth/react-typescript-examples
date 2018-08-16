import React from 'react'

import catPic from './images/cat.jpg'

type Props = {
  width: '200px' | '400px'
}

const Cat: React.SFC<Props> = () => <img src={catPic} alt="cat" />

export default Cat
