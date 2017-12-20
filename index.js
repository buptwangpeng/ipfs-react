import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import './app/style/1.css';
import App from './app/modules/App';
import Apply from './app/modules/Apply';
import Newclass from './app/modules/newclass';
import ClassOne from './app/modules/classone';
import AchiManage from './app/modules/achimanage';



ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/apply" component={Apply}/>
        <Route path="/newclass"  component={Newclass}/>
        <Route path="/classone"  component={ClassOne}/>
        <Route path="/classone/manage"  component={AchiManage}/>
    </Router>
), document.getElementById('app'));