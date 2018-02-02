import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import jumpPage from '../../../core/jumpPage';
import {Button} from 'react-bootstrap';
import './NewClass.css';
import Teacher from '../../../core/teacher.js'

export default class Newclass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          name:'',
          courseId:'',
          time:'',
          score:'',
          object:'',
          grade:'',
          courseProperty:'',
          markElement:'',
          introduction:''
        }
    }

    applyname(event){
     this.setState({
            name: event.target.value
        });
  }

    applyId(event){
      this.setState({
         courseId:event.target.value
      }
        )
    }

    applytime(event){
      this.setState({
         time:event.target.value
      }
        )
    }

    applyscore(event){
      this.setState({
         score:event.target.value
      }
        )
    }

    applyobject(event){
      this.setState({
         object:event.target.value
      }
        )
    }
    

   applygrade(event){
      this.setState({
        grade:event.target.value
      }
        )
    }
 
    applyaintroduction(event){
      this.setState({
        introduction:event.target.value
      }
        )
    }

    applycourseProperty(event){
      this.setState({
        courseProperty:event.target.value
      }
        )
    }

    applymarkElement(event){
      this.setState({
        markElement:event.target.value
      }
        )
    }

   addcourse(){
       console.log(this.state.name)
       let teacher=new Teacher();
       let url='http://120.79.198.95:8000/teacher/course/add/';
       let param={
        newCourseInfo:{
        name:this.state.name,
        courseId:this.state.courseId,
        time:this.state.time,
        score:this.state.score,
        object:this.state.object,
        grade:this.state.grade,
        course_property:this.state.courseProperty,
        mark_element:this.state.markElement,
        introduction:this.state.introduction
      }
       };
       teacher.courseadd(url,param).then(
         (response)=>{
          alert('恭喜提交成功')
         }

        ) 
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
                   <input type="text" onChange={this.applyname.bind(this)}/>
                 </div>
                 <div>
                   <span>课程编号</span>
                   <input type="text" onChange={this.applyId.bind(this)}/>
                 </div>
                 <div>
                   <span>开课时间</span>
                   <input type="text" onChange={this.applytime.bind(this)}/>
                 </div>
                 <div>
                   <span>学&emsp;&emsp;分</span>
                   <input type="text" onChange={this.applyscore.bind(this)}/>
                 </div>
                 <div>
                   <span>面向对象</span>
                   <input type="text" onChange={this.applyobject.bind(this)}/>
                 </div>
                  <div>
                   <span>面向年级</span>
                   <input type="text" onChange={this.applygrade.bind(this)}/>
                 </div>    
                 
                 <div>
                   <span>必修|选修</span>
                   <input type="text" onChange={this.applycourseProperty.bind(this)}/>
                 </div>
                <div>
                   <span>成绩组成</span>
                   <input type="text" onChange={this.applymarkElement.bind(this)}/>
                 </div>
                 <div>
                   <span>课程介绍</span>
                   <input type="text" onChange={this.applyaintroduction.bind(this)}/>
                 </div>
                 </div>
                 <Button bsStyle="success" id="applysubmit" onClick={this.addcourse.bind(this)}>提交</Button>
               <Footer/>
            </div>
        	     );
    }
}