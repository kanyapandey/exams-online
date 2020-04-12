import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CreateTest from '../component/exam/create-test'

export default class AppRouter extends Component {
    render() {
       return  <div>
          <Route exact path="/" component={CreateTest} />
          <Route path="/about" component={CreateTest} />
          <Route path="/users" component={CreateTest} />
        </div>
   }
  }
