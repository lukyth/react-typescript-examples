import React from 'react'

interface IMouse {
  x: number
  y: number
}

export default class MovableCat extends React.Component<{}, IMouse> {
  constructor(props: {}) {
    super(props)
    // Initialize state
  }

  handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Set mouse event to state
    console.log(event)
  }

  render() {
    return (
      <div
        style={{ width: '100vw', height: '100vh' }} // Set position relatiev
        onMouseMove={this.handleMouseMove}
      >
        {/* Cat here and set mouse to cat */}
        {/* Let's use size instead of width */}
      </div>
    )
  }
}
