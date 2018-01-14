import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import jumpPage from '../../../core/jumpPage';
import {Button} from 'react-bootstrap';
import './NewClass.css'


export default class Newclass extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (

            <div className="newclass">
               <Header title="开课申请"/>
               <div id="applylink2"></div>
               <span id="applywrite2" onClick={()=>{jumpPage('teacher/apply')}}>可申请课程</span>
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
                 <Button bsStyle="success" id="applysubmit" onClick={()=>{alert('提交成功')}}>提交</Button>
               <Footer/>
            </div>
        	     );
    }
}