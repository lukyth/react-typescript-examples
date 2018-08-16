import React from 'react'

type Props = {
  render: (mouse: IMouse) => React.ReactNode
}

export interface IMouse {
  x: number
  y: number
}

export default class Mouse extends React.Component<Props, IMouse> {
  constructor(props: Props) {
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
        {this.props.render(this.state)}
      </div>
    )
  }
}
