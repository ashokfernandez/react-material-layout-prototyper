import React, { Component } from 'react'
import './App.css'

class Rectangle extends Component {
  render() {
    const style = {
      height: this.props.height || "100px",
      width: this.props.width || "100px",
      backgroundColor: this.props.color || "red"
    }

    return (
      <div style={style}></div>
    )
  }
}

class Circle extends Component {
  render() {
    const style = {
      height: this.props.diameter || "100px",
      width: this.props.diameter || "100px",
      borderRadius: this.props.diameter || "100px",
      backgroundColor: this.props.color || "red"
    }

    return (
      <div style={style}></div>
    )
  }
}


export { Rectangle, Circle }
