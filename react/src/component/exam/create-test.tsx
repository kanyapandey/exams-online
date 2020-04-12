import './create-test.scss'
import  React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CreateTestForm from './create-test-form'
import AddQuestionPanel from './add-question.panel'
import ViewQuestionsButtons from './view-questions.buttons'
import editquestionmcq from './question/edit-question-mcq'

export interface Props {
  name: string;
}

 export default class CreateTest extends Component {

  render(){
    return (
    <div className="container-box" id ="create-test">
    <div className="item-box bg-2 text-center">
      <CreateTestForm></CreateTestForm>
    </div>
    <div className="item-box item-center">
      <Route path="/"  clasName="panel-center" component={editquestionmcq}></Route>
      <hr/>
    </div>
    <div className="item-box bg-2 text-center">
    <AddQuestionPanel></AddQuestionPanel>
    <hr/>
    <ViewQuestionsButtons></ViewQuestionsButtons>
    </div>
      </div>)
  }

}
