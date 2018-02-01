import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './AchiManage.css'
import Util from '../../../util/util';
import ListItem from './ListItem.jsx'
import Teacher from '../../../core/teacher.js'
import {default as Web3} from 'web3'
import {default as contract} from 'truffle-contract'
import study_artifacts from '../../../../../build/contracts/studyData.json'

let Study = contract(study_artifacts);
let StudyProvider = new Web3.providers.HttpProvider("http://localhost:8545");
Study.setProvider(StudyProvider);
let web3 = new Web3(StudyProvider)


let courses=[{id:'12345',abstract:"通信原理实验"},{id:'2',abstract:"移动通信原理"},
             {id:'3',abstract:"信号与系统"},{id:'4',abstract:"信息论基础"}]

let lists=[{'name':'蔡天炜','studentId':'1231','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'王鹏','studentId':'1232','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'黄博文','studentId':'1233','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'郑秋宏','studentId':'1234','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'张育衔','studentId':'1235','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'钟凯伦','studentId':'1236','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'闵从文','studentId':'1237','usualGrade':'','homeworkscore':'','totalscore':''},
          {'name':'王哲','studentId':'1238','usualGrade':'','homeworkscore':'','totalscore':''},
         ]             

export default class AchiManage extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      courseId : Util.Url.getUrlParam().courseid || 0,
      studentlists:lists,
      studentlistIndex:0,
      studentId:'',
      teacherId:'',
      serchId:'',
      totalscore:'',
      serchGrade:'',
      address:'',
      unlockpassword:'',
      title:''
    }
  }


  gradesubmit(){
   let self=this;
   let a=parseInt(self.state.teacherId) 
   let b=parseInt(self.state.courseId);
   let c=parseInt(self.state.studentId);
   let d=[parseInt(self.state.totalscore)];
   console.log(a,b,c,d);
   Study.deployed().then((instance)=>{
      return instance.setStuMark(a,b,c,d,{from: self.state.address, gas: 1800000})
    }).then((r)=>{
      if (r) {        
            alert('提交成功');        
      }
      else {
        alert('提交失败');
      }
    }).catch((e)=>{
      console.log(e);
    }) 

  }

  getgrade(){
    let self=this;
    console.log("ok"+self.state.serchId,self.state.courseId);
    Study.deployed().then((instance)=>{
    return instance.getStuMarksByCourse.call(parseInt(self.state.courseId),parseInt(self.state.serchId),{from: self.state.address})
    }).then((r)=>{
     self.setState({serchGrade:r.toNumber()},()=>{console.log(r.toNumber())})
     alert('查询成功')
    }).catch((e)=>{
      console.log(e)
    })




  }


  handleid(event){
     this.setState({
            studentId: event.target.value
        });
  }

  handleserchid(event){
     this.setState({
            serchId: event.target.value
        });
  }

handletotal(event){
     this.setState({
            totalscore: event.target.value
        });
  }


 componentWillMount(){

   let self=this;
   let teacher=new Teacher();
   let url1='http://120.79.198.95:8082/user/addressunlock_password/query/'
   let url2='http://120.79.198.95:8082/teacher/info/query/'
   let param={};
   teacher.getaccount(url1,param).then(
    (response)=>{
      self.setState({address:response.data.address,unlockpassword:response.data.unlock_password},()=>{let a =web3.personal.unlockAccount(self.state.address,self.state.unlockpassword, 3600*1000);console.log(a)})
    }
    )
   teacher.infoquery(url2,param).then(
      (response)=>{
        this.setState({teacherId:response.data.teacher_id})
      }
  
    )

  
 }


  componentDidMount(){
        let teacher=new Teacher();                 //获取课程详情
        let url='http://120.79.198.95:8082/admin/course/info/query/';
        let param={
          course:{course_id:this.state.courseId}        
                  };
         teacher.coursedetail(url,param).then(
          (response)=>{
            this.setState(
            {
             title:response.data.course_name,
            }
            )}
            
      );  
  

  }



 
    render() {
        return (

          <div className="AchiManage">
          <Header title={this.state.title}/>
          <h2>成绩管理</h2>
          <div className="list">
            <div className="inputitem">
                 <span>请输入学号</span>
                 <input type="text" onChange={this.handleid.bind(this)}/>
            </div>
            <div className="inputitem">
                 <span>请输入成绩</span>
                 <input type="text" onChange={this.handletotal.bind(this)}/>
            </div>
            <button onClick={this.gradesubmit.bind(this)} style={{background:"#20b18a",color:'#fff',width:"8%",border:'none'}}>提交</button>
            <div className="inputitem">
                 <span>请输入需要查询的学生号</span>
                 <input type="text" onChange={this.handleserchid.bind(this)}/>
            </div>
            <button onClick={this.getgrade.bind(this)} style={{background:"#20b18a",color:'#fff',width:"8%",border:'none'}}>查询</button>
            <span>成绩：{this.state.serchGrade}</span>               
          </div>
          <Footer/>    
          </div>
          )
        }
    }