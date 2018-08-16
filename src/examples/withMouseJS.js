import React from 'react'
import { IMouse } from './Mouse'

export default function withMouseJS(BaseComponent) {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = { x: 0, y: 0 }
    }
    handleMouseMove = event => {
      this.setState({ x: event.clientX, y: event.clientY })
    }
    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <BaseComponent mouse={this.state} {...this.props} />
        </div>
      )
    }
  }

  return WrappedComponent
}
