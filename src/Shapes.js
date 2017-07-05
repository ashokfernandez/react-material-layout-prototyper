import React, { Component } from 'react'
import './App.css'

class Rectangle extends Component {
  render() {
    const height = this.props.height || "100px"
    const width = this.props.width || "100px"
    
    const style = {
      height,
      width,
      backgroundColor: this.props.color || "red",
      margin: this.props.margin || "0px",
      padding: this.props.padding || "0px",
      borderRadius: this.props.borderRadius || "0px",
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: height
    }

    return (
      <div style={style}>{this.props.children}</div>
    )
  }
}

class Circle extends Component {
  render() {
    const diameter = this.props.diameter || "100px"
    const style = {
      height: diameter,
      width: diameter,
      borderRadius: this.props.diameter || "100px",
      backgroundColor: this.props.color || "red",
      margin: this.props.margin || "0px",
      padding: this.props.padding || "0px",
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: diameter
    }

    return (
      <div style={style}>{this.props.children}</div>
    )
  }
}


export { Rectangle, Circle }
