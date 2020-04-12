import "./create-test.scss";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container, Button } from "react-bootstrap";

export interface Props {
  name: string;
}

export default class CreateTestForm extends Component {
  render() {
    return (
      <Container fluid className="p-4">
        <Row>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Test Name</Form.Label>
              <Form.Control type="text" placeholder="add test name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="text-center">
              <Form.Label>Total Questions Added</Form.Label>
              <Form.Control size="sm"  type="text" value="0" disabled />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Access Pincode</Form.Label>
              <Form.Control type="text" placeholder="Pincode only 4" maxLength={4} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Sent emails when someone submits test" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
