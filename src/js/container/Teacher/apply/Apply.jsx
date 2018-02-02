import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import jumpPage from '../../../core/jumpPage';
import './Apply.css'
import ListItem from './ListItem.jsx'
import Teacher from '../../../core/teacher.js'
let course1 = [
  {courseName:"通原实验",courseId:"1234561",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234562",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234563",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:2},
  {courseName:"通原实验",courseId:"1234564",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:1},
  {courseName:"通原实验",courseId:"1234565",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:3},
  {courseName:"通原实验",courseId:"1234566",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:2},
  {courseName:"通原实验",courseId:"1234567",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:3},
  {courseName:"通原实验",courseId:"1234568",time:'2016-2017/2',score:"3",object:"信通院/大二 ", type:"必修",status:3},
  
];
let course2 = [
  {courseName:"信号与系统",courseId:"6543211",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543212",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543213",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:2},
  {courseName:"信号与系统",courseId:"6543214",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543215",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:3},
  {courseName:"信号与系统",courseId:"6543216",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  {courseName:"信号与系统",courseId:"6543217",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:3},
  {courseName:"信号与系统",courseId:"6543218",time:'2016-2017/2',score:"3",object:"信通院/大二", type:"必修",status:1},
  
];
let course3 = [
  {courseName:"数据库",courseId:"2234561",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234562",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234563",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234564",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234565",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234566",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:2},
  {courseName:"数据库",courseId:"2234567",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  {courseName:"数据库",courseId:"2234568",time:'2016-2017/2',score:"1",object:"信通院/大二", type:"选修",status:1},
  
];

let courses = [course1,course2,course3];
export default class Apply extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      courses : [],
      courseIndex:0,
      courseId:'1',
      items:[1,2],
      pages:'2'
    }
  }

  handleSearch = (e)=>{
    if(e&&e.keyCode ==13){
      //检测到回车开始搜索
      alert('未搜索到课程')
    }
  }


  getapplylist(){                                   //获取可申请名单
      let teacher=new Teacher();
       let url='http://120.79.198.95:8000/teacher/courseapply/query/';
       let param={page:this.state.courseIndex+1,
                  number:8
              };console.log(param.page);  
     teacher.courseapplyquery(url,param).then(
         (response)=>{
          let jsonLength = 0;
          for(let item in response.data.content){jsonLength++}
          console.log(jsonLength);
          let datarestore=[];
          for(let i=0;i<jsonLength;i++){datarestore.push(response.data.content[i])}
          this.setState({courses:datarestore,
                         pages:response.data.pages},()=>{let a=[];
                          for(let i=1;i<=parseInt(this.state.pages);i++){a.push(i)};
                             this.setState({items:a},()=>{console.log(a)})}
          )
      }
     
      )
  }

  applysubmit(){                                //提交申请
     let teacher=new Teacher();
     let url='http://120.79.198.95:8000/teacher/courseapply/submit/';
     console.log(this.state.courseId);
     let param={courseId:this.state.courseId};
     teacher.courseapplysubmit(url,param).then(
       (response)=>{
        alert('恭喜提交成功')
       }

      )
   
  }
   componentWillMount(){
     // this.setState({pages:'4'})  

       let teacher=new Teacher();
       let url='http://120.79.198.95:8000/teacher/courseapply/query/';
       let param={page:this.state.courseIndex+1,
                  number:8
              };console.log(param.page);  
     teacher.courseapplyquery(url,param).then(
         (response)=>{
          let jsonLength = 0;
          for(let item in response.data.content){jsonLength++}
          console.log(jsonLength);
          let datarestore=[];
          for(let i=0;i<jsonLength;i++){datarestore.push(response.data.content[i])}
          this.setState({courses:datarestore,
                         pages:response.data.pages},()=>{let a=[];
                          for(let i=1;i<=parseInt(this.state.pages);i++){a.push(i)};
                             this.setState({items:a},()=>{console.log(a)})}
          )
      }
     
      )


   

   }



  componentDidMount(){
                /*     let a=[];
                     console.log('现在的页数'+this.state.pages)
                     for(let i=1;i<=parseInt(this.state.pages);i++){a.push(i)};
                    this.setState({items:a},()=>{console.log(a)})  */
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
                  alert('申请成功');
                  let tempCourses = this.state.courses;
                  tempCourses[index].status =2;
                  this.setState({
                    courses : tempCourses,
                    courseId:tempCourses[index].courseId
                  },()=>{this.applysubmit()}
                  )
                  //console.log(this.state.courseId)
                  
                }
              }
                courseName={course.name}
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
                },()=>{this.getapplylist()})
              })

            }}>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {
              this.state.items.map((course,index)=>{
                return (
                  <li
                    key={index}
                    className={this.state.courseIndex==index?"active":''}
                    onClick={()=>{
                    this.setState({
                      courses : courses[index],
                      courseIndex:index
                    },()=>{this.getapplylist()})
                  }}><a>{course}</a></li>
                )
              })
            }

            <li onClick={()=>{
              this.setState({
                courseIndex : this.state.courseIndex+1<=this.state.pages-1?this.state.courseIndex+1:this.state.pages-1
              },()=>{
                this.setState({
                  courses:courses[this.state.courseIndex]
                },()=>{this.getapplylist()})
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