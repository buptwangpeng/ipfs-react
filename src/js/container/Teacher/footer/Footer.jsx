import React from 'react';
import './Footer.css';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

       return(
          <div className="footer col-xs-12 col-lg-12">
             Copyright@2017 LMS
          </div>
       	)
    }
  }  