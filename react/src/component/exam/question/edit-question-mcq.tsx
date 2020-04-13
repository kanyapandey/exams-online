import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button, Pagination } from "react-bootstrap";
import EditOptionsMcq from "./options-mcq";

export default class editquestionmcq extends Component {
  render() {
    const text = ["one", "two", "three"];

    return (
      <Container className="m-1 panel-center">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Question details</Form.Label>
            <Form.Control size="sm" as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <EditOptionsMcq options={text}></EditOptionsMcq>
        <Row className="text-center">
          <Col xs={{ span: 3, offset: 4 }}>
            <Button size="sm" variant="success">
              Save
            </Button>
          </Col>
          <Col xs={{ span: 3, offset: 1 }}>
            <Pagination>
              <Pagination.Prev />
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>
    );
  }
}
