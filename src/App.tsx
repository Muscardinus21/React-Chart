import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";

import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
    validateOnChange: true,
    validateOnBlur: true,
    validate: (values) => {
      const errors = {
        email: "",
        password: "",
      };
      if (!/^[a-z0-9_+.-]+@([a-z0-9-]+.)+[a-z0-9]{2,4}$/.test(values.email)) {
        errors.email = "Email Validation Error";
      }
      if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,20}$/.test(
          values.password
        )
      ) {
        errors.password = "Password Validation Error";
      }
      if (errors.email || errors.password) return errors;
    },
  });

  return (
    <div className="App">
      {/*<LineChart />*/}
      {/*<PieChart />*/}
      {/*<BarChart />*/}
      <Container style={{ border: "1px solid red" }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formik.handleSubmit);
            formik.handleSubmit();
          }}
        >
          <Row xs={1} md={2}>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="playv@playv.co"
                  // id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <Form.Text className="text-muted">Email Good!</Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  // id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <Form.Text className="text-muted">Password Good!</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{formik.errors.email || formik.errors.password}</p>
            </Col>
            {/*<Col>*/}
            {/*  <p>{formik.errors.password}</p>*/}
            {/*</Col>*/}
          </Row>
          <Row>
            <Button size="sm" className="me-2 shadow" variant="primary">
              Sign In
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
