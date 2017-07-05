import React, { Component } from 'react'
import './App.css'
import { Grid, Row, Col } from 'react-material-responsive-grid'
import { Rectangle, Circle } from './Shapes'

class App extends Component {
  render() {
    return (
      <Grid>
        <Rectangle height="200px" color="#efeede"/>
        <Circle/>
      </Grid>
    )
  }
}

export default App
