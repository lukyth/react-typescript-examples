import React from 'react'
import PropTypes from 'prop-types'

export default class MouseJS extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 0, y: 0 }
  }

  static propTypes = {
    render: PropTypes.func.isRequired
  }

  handleMouseMove = event => {
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
