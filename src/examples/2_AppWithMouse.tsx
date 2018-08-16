import React from 'react'
import Cat from './Cat'
import withMouseJS from './withMouseJS'
// import withMouse from './withMouse'

const CatWithMouseJS = withMouseJS(Cat)
// const CatWithMouse = withMouse(Cat)

export default () => (
  <>
    <CatWithMouseJS />
  </>
)

// Try using CatWithMouseJS then CatWithMouse and compare their usage
