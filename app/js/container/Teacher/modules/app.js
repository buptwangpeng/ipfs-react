import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div clssName="teacher">
              <Header/>
              <p id="wel">欢迎你，<span id="#">XX</span>老师</p>
              <span id="timetable">课表</span>
              <span id="newclass"><Link to="/apply" >申请新课</Link></span>
              <span id="one"><Link to="/classone"><i className="icon-book icon-4x"></i>课程一</Link></span>
              <span id="two"><i className="icon-book icon-4x"></i>课程二</span>
              <span id="three"><i className="icon-book icon-4x"></i>课程三</span>
              <span id="four"><i className="icon-book icon-4x"></i>课程四</span>
              <Footer/>
            </div>    
        );
    }
}