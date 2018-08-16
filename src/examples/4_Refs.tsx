import React from 'react'

export class Foo extends React.Component {
  imgRef = React.createRef<HTMLImageElement>()
  render() {
    // Type this in real time.
    // Not adding `if` at first to see an error.
    if (this.imgRef.current) {
      console.log(this.imgRef.current.srcset)
    }
    return <img ref={this.imgRef} />
  }
}

// -------------

class Bar extends React.Component {
  focus(doge: boolean) {
    console.log(doge)
  }
  render() {
    return <div>Bar</div>
  }
}

export class Fizz extends React.Component {
  BarRef = React.createRef<Bar>()
  render() {
    if (this.BarRef.current) {
      this.BarRef.current.focus(true)
    }
    return <Bar ref={this.BarRef} />
  }
}

// -------------

export class Buzz extends React.Component {
  render() {
    return (
      <input
        ref={el => {
          if (el) {
            console.log(el.value)
          }
        }}
      />
    )
  }
}
