import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/app.css';
import Navigate from './components/Navigate.jsx';
import Home from './components/Home.jsx';
import Contacts from './components/Contacts.jsx';
import Information from './components/Information.jsx';

ReactDOM.render(
  
        <Router>
            <div>
                <Navigate />
                <Switch>
                    <Route exact path="/" render={()=><Home id={"1"}/>} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/information" component={Information} />
                </Switch>
            </div>
        </Router>,
   
  
  document.getElementById("app")
)

