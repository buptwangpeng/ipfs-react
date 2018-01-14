import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import jumpPage from '../../../core/jumpPage';
import './Apply.css'
import ListItem from './ListItem.jsx'
let course1 = [
  {courseName:"通原实验",courseId:"1234561",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234562",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:3},
  {courseName:"通原实验",courseId:"1234563",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234564",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234565",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234566",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:2},
  {courseName:"通原实验",courseId:"1234567",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234568",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  
];
let course2 = [
  {courseName:"信号与系统",courseId:"6543211",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543212",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:3},
  {courseName:"信号与系统",courseId:"6543213",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543214",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543215",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543216",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:2},
  {courseName:"信号与系统",courseId:"6543217",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543218",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  
];
let course3 = [
  {courseName:"数据库",courseId:"2234561",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234562",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:3},
  {courseName:"数据库",courseId:"2234563",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234564",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234565",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234566",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:2},
  {courseName:"数据库",courseId:"2234567",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234568",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  
];

let courses = [course1,course2,course3];
export default class ChooseCourse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      courses : courses[0],
      courseIndex:0
    }
  }

  handleSearch = (e)=>{
    if(e&&e.keyCode ==13){
      //检测到回车开始搜索
      alert('未搜索到课程')
    }
  }


    render() {
        return (

        	<div className="apply">
              <Header title="开课申请">
                 <div className="flex-center course-search">
                     <div className="flex-center search-addon">
                         <icon className="iconfont" style={{fontSize:18}}>&#xe66e;</icon>
                     </div>
                     <input onKeyUp={this.handleSearch} className="search-input" type="text" placeholder="输入课程名"/>
                 </div>
              </Header>
              <div id="applylink"></div>
              <span id="applywrite">可申请课程</span>
              <div id="newclasslink"></div>
              <span id="newclasswrite" onClick={()=>{jumpPage('teacher/newclass')}}>申请新课</span>
              <div className="applytable" style={{padding:'10px 0',width:"70%",margin:'0 auto',background:'#fff',height:window.innerHeight-430}}>
          <ListItem
            courseName="课程名称"
            courseId="课程编号"
            time="开课时间"
            score="学分"
            object="开课对象"
            type="课程属性"
              // status="状态"
          />
          {this.state.courses.map((course,index)=>{
            return(
              <ListItem
                key={course.courseId}
                handleClick={()=>{
                  alert('选课成功');
                  let tempCourses = this.state.courses;
                  tempCourses[index].status = 2;
                  this.setState({courses : tempCourses})
                }}
                courseName={course.courseName}
                courseId={course.courseId}
                time={course.time}
                score={course.score}
                object={course.object}
                type={course.type}
                status={course.status}
              />
              )
          })}
        </div>
        <nav aria-label="Page navigation" style={{float:'right',marginRight:'17%'}}>
          <ul className="pagination">
            <li onClick={()=>{
              this.setState({
                courseIndex : this.state.courseIndex-1>=0?this.state.courseIndex-1:0
              },()=>{
                this.setState({
                  courses:courses[this.state.courseIndex]
                })
              })

            }}>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {
              [1,2,3].map((course,index)=>{
                return (
                  <li
                    key={index}
                    className={this.state.courseIndex==index?"active":''}
                    onClick={()=>{
                    this.setState({
                      courses : courses[index],
                      courseIndex:index
                    })
                  }}><a>{course}</a></li>
                )
              })
            }

            <li onClick={()=>{
              this.setState({
                courseIndex : this.state.courseIndex+1<=2?this.state.courseIndex+1:2
              },()=>{
                this.setState({
                  courses:courses[this.state.courseIndex]
                })
              })
            }}>
              <a  aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
              <Footer/>
            </div>
                );
    }
}