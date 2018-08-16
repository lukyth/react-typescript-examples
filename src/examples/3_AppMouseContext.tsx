import React from 'react'

import Dog from './Dog'
import Mouse from './Mouse'

export default () => (
  <>
    {/* <Mouse render={mouse => <Cat size="200px" mouse={mouse} />} /> */}
    <Mouse render={mouse => <Dog size="200px" mouse={mouse} />} />
  </>
)

// Uncomment Mouse-Cat
// Use AnimalSizeContext to provide size
