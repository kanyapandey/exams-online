import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button, Pagination } from "react-bootstrap";
import "../question.scss";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { addQuestion, updateQuestionText, updateQuestion } from "../../_store/exams.actions";
import EditOptionsMcq from "./options";
import { Question } from "../../../../models/question.model";

interface Props {
  state: any;
  questionInEdit:Question<any>
  saveQuestion?: Function;
  saveText?: Function;
  updateQuestion?:Function
}

export class editquestionmcq extends Component<Props, any> {
  save = (e: any) => {
    
    const inEdit = this.props.state.questionInEdit;

    if(!!inEdit.id && inEdit.id< this.props.state.questions.length){
      this.props.updateQuestion!({index: inEdit.text,item: inEdit})
    }
    this.props.state.questionInEdit.id= this.props.state.questions.length;
    this.props.saveQuestion!(this.props.state.questionInEdit);
  };

  saveText =(e:any)=>{
    this.props.saveText!(e.target.value);
  }

  render() {
    const text = ["one", "two", "three"];

    return (
      <Container className="m-1 panel-center question">
        <Form>
          <Form.Group  onBlur={this.saveText} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Question details</Form.Label>
            <Form.Control size="sm" as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <EditOptionsMcq options={text}></EditOptionsMcq>
        <Row className="text-center">
          <Col xs={{ span: 3, offset: 4 }}>
            <Button size="sm" variant="success" onClick={this.save}>
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

const mapStateToProps = (state: any, props: Props) => {
  console.log(state.createtest.questionInEdit);
  return {
    state: state.createtest,
    questionInEdit: state.createtest.questionInEdit
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveQuestion: bindActionCreators<any, any>(addQuestion, dispatch),
    saveText: bindActionCreators<any, any>( updateQuestionText, dispatch),
    updateQuestion: bindActionCreators<any, any>( updateQuestion, dispatch),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editquestionmcq);
