import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";

import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App">
      <LineChart />
      <PieChart />
      <BarChart />
      {/*<Container style={{ border: "1px solid red" }}>*/}
      {/*  <Form>*/}
      {/*    <Row xs={1} md={2}>*/}
      {/*      <Col>*/}
      {/*        <Form.Group controlId="email">*/}
      {/*          <Form.Label>Email Address</Form.Label>*/}
      {/*          <Form.Control type="email" placeholder="playv@playv.co" />*/}
      {/*          <Form.Text className="text-muted">Email Good!</Form.Text>*/}
      {/*        </Form.Group>*/}
      {/*      </Col>*/}
      {/*      <Col>*/}
      {/*        <Form.Group controlId="password">*/}
      {/*          <Form.Label>Password</Form.Label>*/}
      {/*          <Form.Control type="password" />*/}
      {/*          <Form.Text className="text-muted">Password Good!</Form.Text>*/}
      {/*        </Form.Group>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    <Row>*/}
      {/*      <Button>Submit</Button>*/}
      {/*    </Row>*/}
      {/*  </Form>*/}
      {/*</Container>*/}
    </div>
  );
}

export default App;
