import React from 'react'
import { IMouse } from './Mouse'

export default function withMouse<BaseProps extends { mouse: IMouse }>(
  BaseComponent: React.ComponentType<BaseProps>
) {
  type WrappedProps = Pick<BaseProps, Exclude<keyof BaseProps, 'mouse'>>
  class WrappedComponent extends React.Component<WrappedProps, IMouse> {
    constructor(props: WrappedProps) {
      super(props)
      this.state = { x: 0, y: 0 }
    }
    handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
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
