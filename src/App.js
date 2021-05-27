import React from "react";
import Click from './components/Button'
import Count from './components/Count'
import {Row,Col} from 'react-bootstrap'

function App() {
  return (
    <Row>
      <Col> <Click/> </Col>
      <Col> <Count/> </Col>
    </Row>
  );
}

export default App;
