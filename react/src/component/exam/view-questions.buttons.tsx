import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

export default class ViewQuestionsButtons extends Component {
  render() {
    const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <Container fluid>
          { questions.map((a, index)=>{
         return <Button key={index} className="m-2" variant="outline-success">{index+1}</Button>
          })}
      </Container>
    );
  }
}
