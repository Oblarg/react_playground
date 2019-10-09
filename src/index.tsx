import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login/Login';
import {CalendarPage} from './calendar/Calendar';
import * as serviceWorker from './serviceWorker';

export const calendarPath = "/calendar";
export const loginPath = "/";

const routing = (
  <Router>
    <div>
      <Route exact path={loginPath} component={Login}/>
      <Route path={calendarPath} component={CalendarPage}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
