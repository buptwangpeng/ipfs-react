import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router';
import {Button} from 'react-bootstrap';



export default class Newclass extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (

            <div className="newclass">
               <Header/>
               <div className="headerun"></div>
               <span className="headeropen">开课申请</span>
               <div id="applylink2"></div>
               <span id="applywrite2"><Link to="/apply">可申请课程</Link></span>
               <div id="newclasslink2"></div>
               <span id="newclasswrite2">申请新课</span>
               <div className="applyform">
                 <div>
                   <span>课程名称</span>
                   <input type="text"/>
                 </div>
                 <div>
                   <span>课程编号</span>
                   <input type="text"/>
                 </div>
                 <div>
                   <span>开课时间</span>
                   <input type="text"/>
                 </div>
                 <div>
                   <span>学&emsp;&emsp;分</span>
                   <input type="text"/>
                 </div>
                 <div>
                   <span>面向对象</span>
                   <input type="text"/>
                 </div>  
                 <div>
                   <span>课程属性</span>
                   <input type="text"/>
                 </div>        
                 </div>
                 <Button bsStyle="success" id="applysubmit">提交</Button>
               <Footer/>
            </div>
        	     );
    }
}