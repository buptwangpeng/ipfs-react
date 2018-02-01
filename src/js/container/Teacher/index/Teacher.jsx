import React from 'react';
import Footer from '../footer/Footer.jsx'
import { Link } from 'react-router';
import './Teacher.css';
import jumpPage from '../../../core/jumpPage';
import ListItem from './ListItem.jsx';
import '../../../../css/bootstrap.css';
import '../../../../icon/iconfont.css';
import Teacher from '../../../core/teacher.js'



let data=[{id:'123451',name:"通信原理实验",number:'20',time:'2016-2017/2',object:"信通院/大二"},
          {id:'123452',name:"移动通信原理",number:'20',time:'2016-2017/2',object:"信通院/大二"},
          {id:'123453',name:"信号与系统",number:'20',time:'2016-2017/2',object:"信通院/大二"},
          {id:'123454',name:"信息论基础",number:'20',time:'2016-2017/2',object:"信通院/大二"} 
         ]

let number=['一','二','三','四','五','六','七','八','九','十']
export default class TeacherIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         teacher_name :"" ,
         courses:/*[]*/                        [{courseId:'1',name:"通信原理实验"},{courseId:'2',name:"移动通信原理"},
                                          {courseId:'3',name:"信号与系统"},{courseId:'4',name:"信息论基础"}] 
        }
    }



   componentWillMount(){
    /*    let loginUrl = 'http://localhost:3005/response';
        let self = this;
        this.serverRequest = fetch(loginUrl , {
            
            method: "get",
            headers: {
               
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            console.log(response);
            response.json().then(function (response) {
              
                let jsonLength = 0;
                for(let item in response.data){jsonLength++}
                console.log(jsonLength);
                let datarestore=[];
                for(let i=0;i<jsonLength;i++){datarestore.push(response.data[i])}
                console.log(datarestore)  
                self.setState({courses:datarestore})
            })

        }, function (e) {
            console.log('出错：', e)
        })

    */
   }


    
    componentDidMount(){
       let teacher=new Teacher();
       let url1='http://120.79.198.95:8082/teacher/info/query/';
       let url2='http://120.79.198.95:8082/teacher/course/query/';
       let self=this;
       let param={};
       teacher.infoquery(url1,param).then(
        (response)=>{     
            console.log(response.data);      
            self.setState({teacher_name:response.data.teacher_name})
                   }
      );

     teacher.coursequery(url2,param).then(
         (response)=>{
          let jsonLength = 0;
          for(let item in response.data){jsonLength++}
          console.log(jsonLength);
          let datarestore=[];
          for(let i=0;i<jsonLength;i++){datarestore.push(response.data[i])}
          console.log(datarestore)  
          self.setState({courses:datarestore})       
         }
      ) 
    
    }

    render() {
        return (
          <div>

            <div className="teacher">
              <div className="top">
                <div
                   onClick={()=>{jumpPage('teacher')}}
                   className="col-xs-6 col-lg-6">
                   <p id="logo">LOGO</p>
                </div>
                <div className="col-xs-12 col-md-6 header-nav">
                    <div
                        onClick={()=>{jumpPage('teacher/personalcen')}}
                        className="header-nav width25">
                        个人中心
                    </div>
                    <div
                        onClick={()=>{
                            if(confirm("确定退出登录?")){
                                jumpPage('/')
                            }
                        }}
                        className="header-nav width25">
                        退出
                    </div>
                </div>
              </div>
              <div className="teacher-main">
                <div style={{height:window.innerHeight-150,padding:40}}
                     className="col-xs-12 col-lg-8 col-lg-offset-3">
                  <div id="welcome">     
                     {"欢迎你,"+this.state.teacher_name+"老师"}
                     <span id="timetable" onClick={()=>{jumpPage('teacher/timetable')}}>课表</span>
                     <span id="newclass" onClick={()=>{jumpPage('teacher/apply')}}>申请新课</span>
                  </div>
                  
                  {this.state.courses.map((course,index)=>{
                     return(
                      
                        <ListItem
                         icon="&#xe640;"
                         key={course.courseId}
                         title={"课程"+number[index]}
                         abstract={course.name}
                         handleClick = {()=>jumpPage('teacher/classdetail?courseid='+course.courseId)}
                        />
                      
                      )
                    
                  }
                  )
                  }
                  
                  </div>
                </div>
              </div>
              <Footer/>
            </div>

   
        );
    }
}