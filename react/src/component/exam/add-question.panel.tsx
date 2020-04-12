import "./create-test.scss";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Button } from "react-bootstrap";
import { userSelected } from "../../_store/actions/app.actions";
import { bindActionCreators, Dispatch } from "redux";
import { addQuestions} from './_store/exams.actions'
import { connect } from "react-redux";

export  class AddQuestionPanel extends Component<any,any> {

    componentDidMount(){
        console.log(this.props.createTest);
    }

  render() {
    return (
      <Container fluid className="p-4">
        <Row className="m-1">
          <Form>
            <Form.Group
              className="f-inline"
              controlId="exampleForm.ControlSelect2"
            >
              <Form.Label>Select Type of Question</Form.Label>
              <Form.Control as="select" multiple>
                <option>True False</option>
                <option>Multiple Choice</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Col>
                <Button disabled variant="info">added 10</Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = (state:any) => {
    return {
      createTest: state
    }
  }
  
const mapDispatchToProps = (dispatch: Dispatch)=>{
    console.log(userSelected,'##')
    return bindActionCreators({ addQuestions }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionPanel);