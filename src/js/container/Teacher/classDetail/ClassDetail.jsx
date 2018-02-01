import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './ClassDetail.css';
import jumpPage from '../../../core/jumpPage';
import ListItem from './ListItem.jsx';
import Util from '../../../util/util';
import DataItem from './DataItem.jsx';
import Teacher from '../../../core/teacher.js'
import ReactDOM from 'react-dom';
let studentlist1=[
{name:"蔡天炜",studentId:"123451",schedule:"60%",homework:"是",score:"90"},
{name:"王鹏",studentId:"123452",schedule:"60%",homework:"是",score:"90"},
{name:"郑秋宏",studentId:"123453",schedule:"60%",homework:"是",score:"90"},
{name:"黄博文",studentId:"123454",schedule:"60%",homework:"是",score:"90"},
{name:"张育衔",studentId:"123455",schedule:"60%",homework:"是",score:"90"},
{name:"钟凯伦",studentId:"123456",schedule:"60%",homework:"是",score:"90"},
{name:"闵从文",studentId:"123457",schedule:"60%",homework:"是",score:"90"},

];

let studentlist2=[
{name:"蔡天炜",studentId:"654321",schedule:"70%",homework:"否",score:""},
{name:"王鹏",studentId:"654322",schedule:"70%",homework:"否",score:""},
{name:"郑秋宏",studentId:"654323",schedule:"70%",homework:"否",score:""},
{name:"黄博文",studentId:"654324",schedule:"70%",homework:"否",score:""},
{name:"张育衔",studentId:"654325",schedule:"70%",homework:"否",score:""},
{name:"钟凯伦",studentId:"654326",schedule:"70%",homework:"否",score:""},
{name:"闵从文",studentId:"654327",schedule:"70%",homework:"否",score:""},
];

let studentlist3=[
{name:"蔡天炜",studentId:"234561",schedule:"80%",homework:"是",score:"95"},
{name:"王鹏",studentId:"234562",schedule:"80%",homework:"是",score:"95"},
{name:"郑秋宏",studentId:"234563",schedule:"80%",homework:"是",score:"95"},
{name:"黄博文",studentId:"234564",schedule:"80%",homework:"是",score:"95"},
{name:"张育衔",studentId:"234565",schedule:"80%",homework:"是",score:"95"},
{name:"钟凯伦",studentId:"234566",schedule:"80%",homework:"是",score:"95"},
{name:"闵从文",studentId:"234567",schedule:"80%",homework:"是",score:"95"},
];

let studentlist4=[
{name:"蔡天炜",studentId:"3234561",schedule:"80%",homework:"是",score:"95"},
{name:"王鹏",studentId:"3234562",schedule:"80%",homework:"是",score:"95"},
{name:"郑秋宏",studentId:"3234563",schedule:"80%",homework:"是",score:"95"},
{name:"黄博文",studentId:"3234564",schedule:"80%",homework:"是",score:"95"},
{name:"张育衔",studentId:"3234565",schedule:"80%",homework:"是",score:"95"},
{name:"钟凯伦",studentId:"3234566",schedule:"80%",homework:"是",score:"95"},
{name:"闵从文",studentId:"3234567",schedule:"80%",homework:"是",score:"95"},
];

let courses=[{id:'1',abstract:"通信原理实验"},{id:'2',abstract:"移动通信原理"},
             {id:'3',abstract:"信号与系统"},{id:'4',abstract:"信息论基础"}]

let studentlists=[studentlist1,studentlist2,studentlist3,studentlist4]
export default class ClassDetail extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      studentlists : studentlists[0],//[]
      filedata:[{name:"实验指导",time:"2016-10-21",documentId:"123",type:"pdf",url:"http://baidu.com",size:'1KB'},{name:"实验报告参考",time:"2016-10-21",documentId:"456",type:"doc",url:"http://baidu.com",size:'5KB'}],
      studentlistIndex:0,
      courseId : Util.Url.getUrlParam().courseid||0,
      title:"通信原理",
      number:"40",
      time:"2016-2017/2",
      type:"选修",
      score:"2学分",
      description:"通信技术日新月异的发展，使更多的人们希望掌握通信的原理。本书的宗旨是系统深入的阐述通信系统和通信网的基本原理",
      items:[1,2],
      pages:'',
      documentId:'',
      documentname:'',
      documenttype:'',
      documenttime:'',
      documentsize:''
    }
  }

  getstudentlist(){                     //获取学生名单
   // let url='';
    //let teacher=new Teacher();
    let param={
          courseId:this.state.courseId,
          page:this.state.studentlistIndex+1,
          number:10
    };
    console.log(param.page)
   /* teacher.studentlistquery(url,param).then(
      (response)=>{this.setState(
         {
          studentlists:response.data
         }
        )               
       }
      )  */

  }

  deletedocument(){                                  //删除文件
    console.log(this.state.documentId)
    let url='http://120.79.198.95:8082/teacher/document/delete/';
    let teacher=new Teacher();
    let param={
          courseId:this.state.courseId,
          documentId:this.state.documentId
          }
     teacher.documentdelete(url,param).then(
     (response)=>{
  
          alert('恭喜删除成功')
  
         }
     )     

  }


 componentWillMount(){
 /*   let url='http://10.112.149.122:8082/teacher/document/obtain/';                        //获取课程资料信息
    let teacher=new Teacher();
    let param={
      courseId:this.state.courseId,
      page:1,
      number:10
    } ;
    teacher.documentObtain(url,param).then(
      (response)=>{
        let jsonLength = 0;
        for(let item in response.data.content){jsonLength++}
        console.log(jsonLength);
        let datarestore=[];
        for(let i=0;i<jsonLength;i++){datarestore.push(response.data.content[i])}
        this.setState({filedata:datarestore})
    }

      )                
    
  */
   let url='http://120.79.198.95:8082/teacher/studentlist/query/';
   let teacher=new Teacher();
    let param={
            page:this.state.studentlistIndex+1,
            number:8,
            courseId:this.state.courseId
    }
    teacher.getstudentlist(url,param).then(
      (response)=>{
          let jsonLength = 0;
          for(let item in response.data.content){jsonLength++}
          console.log(jsonLength);
          let datarestore=[];
          for(let i=0;i<jsonLength;i++){datarestore.push(response.data.content[i])}
          this.setState({
                         studentlists:datarestore,
                         pages:response.data.pages},()=>{let a=[];
                          for(let i=1;i<=parseInt(this.state.pages);i++){a.push(i)};
                             this.setState({items:a},()=>{console.log(a)})}
          )
      }


      )

 }
 





  componentDidMount(){   
        let a=[];
        for(let i=1;i<=4;i++){a.push(i)};
        this.setState({items:a},()=>{console.log(a)});
        console.log(this.state.courseId);
        let teacher=new Teacher();                 //获取课程详情
        let url='http://120.79.198.95:8082/admin/course/info/query/';
        let param={
          course:{course_id:this.state.courseId}        
                  };
         teacher.coursedetail(url,param).then(
          (response)=>{
            
            console.log(response);
            this.setState(
            {
             title:response.data.course_name,
             number:response.data.course_number,
             time:response.data.course_time,
             type:response.data.course_property,
             score:response.data.credit,
             description:response.data.description
            }
            )}
            
      );  

  /*     let inputfile=ReactDOM.findDOMNode(this.refs.submitfile);
       console.log(inputfile) */
  }


    render() {
        return (
           <div className="classdetail">
              <Header title={this.state.title}>
              <span id="managelink" onClick={()=>{jumpPage('teacher/classdetail/manage?courseid='+this.state.courseId)}}>成绩管理</span>
              </Header>
              <div className="information">
                <h3>课程信息</h3>
                <p>有<span>{this.state.number}</span>人选修了该门课</p>
                <ul>
                 <li>课程编号：{this.state.courseId}</li>
                 <li>开课时间：{this.state.time}</li>
                 <li>课程属性：{this.state.type}</li>
                 <li>学&emsp;&emsp;分：{this.state.score}</li>
                 <li>课程描述:</li>
                </ul>
                <p>&emsp;&emsp;{this.state.description}</p>
              </div>
              <div className="data">
                 <h3>课程资料</h3>
                {                             
                   this.state.filedata.map((file,index)=>{
                   return(
                        <DataItem
                        key={file.documentId}
                        name={file.name+"."+file.type}
                        time={'上传于'+file.time}
                        size={file.size}
                        url={file.url}
                        handleClick={
                                       ()=>{
                                       alert('删除');
                                       this.setState({documentId:this.state.filedata[index].documentId},
                                       ()=>{this.deletedocument()})}   
                                    }/>
                     )
                  
                     }) 
                     
                  

                 }
                 <h3>上传资料</h3> 
                 <input type="file" ref="submitfile" style={{display:'inline'}}/>
                 <button style={{background:"#20b18a",color:'#fff',width:"8%",border:'none'}} onClick={()=>{alert("正在开发中，敬请期待")}}>提交</button>    
              </div>
              <div className="studentList">
                 <h3>学生列表</h3>
                 <ListItem
                   name="姓名"
                   studentId="学号"
                   schedule="进度"
                   homework="作业提交"
                   score="作业评分"
                   />
                 {this.state.studentlists.map((studentlist,index)=>{
            return(
              <ListItem

                key={studentlist.studentId}
                name={studentlist.name}
                studentId={studentlist.studentId}
                schedule={studentlist.schedule}
                homework={studentlist.homework}
                score={studentlist.score}                
              />
            )
          })}
              </div>

              <nav aria-label="Page navigation" style={{float:'right',marginRight:'17%'}}>
                  <ul className="pagination">
                  <li onClick={()=>{
              this.setState({
                studentlistIndex : this.state.studentlistIndex-1>=0?this.state.studentlistIndex-1:0
              },()=>{
                this.setState({
                  studentlists:studentlists[this.state.studentlistIndex]
                }, ()=>{this.getstudentlist()})
              })
            }}>
              <a  aria-label="Next">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            { 
             this.state.items.map((studentlist,index)=>{
                return (
                  <li
                    key={index}
                    className={this.state.studentlistIndex==index?'active':''}
                    onClick={()=>{
                      this.setState({
                        studentlists : studentlists[index],
                        studentlistIndex:index,

                      }, ()=>{this.getstudentlist()})
                    }  }><a>{studentlist}</a></li>
                )
              }) 
            }

            <li onClick={()=>{
              this.setState({
                studentlistIndex : this.state.studentlistIndex+1<=4?this.state.studentlistIndex+1:4
              },()=>{
                this.setState({
                  studentlists:studentlists[this.state.studentlistIndex]
                }, ()=>{this.getstudentlist()})
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
        	)
    }
}