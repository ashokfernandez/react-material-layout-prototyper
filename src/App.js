import React, { Component } from 'react'
import './App.css'
import { contains, map, times } from 'ramda'
import { Grid, Row, Col } from 'react-material-responsive-grid'
import { Rectangle, Circle } from './Shapes'

class App extends Component {
  render() {
    
    const createRectangle = () => {
      return (
        <Col xs4={2} lg={3}>
          <Rectangle width="374px" height ="298.656px" margin="10px auto" borderRadius="6px">This is a rectangle</Rectangle>
          <Circle diameter="374px" margin="10px auto" borderRadius="6px">This is a circle</Circle>
        </Col>
      )
    }

    return (
      <Grid fixed={'center'}>
        <Row>
          {times(createRectangle, 20)}
        </Row>
      </Grid>
    )
  }
}

export default App
