import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import question from './question/question'

export default class ExamRouter extends Component {
    render() {
       return  <div>
          <Route exact path="/" component={question} />
        </div>
   }
  }
