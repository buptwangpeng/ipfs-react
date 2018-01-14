import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './ClassDetail.css';
import jumpPage from '../../../core/jumpPage';
import ListItem from './ListItem.jsx';
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

let studentlists=[studentlist1,studentlist2,studentlist3]
export default class ClassDetail extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      studentlists : studentlists[0],
      studentlistIndex:0
    }
  }

    render() {
        return (
           <div className="classdetail">
              <Header title="通信原理实验" >
              <span id="managelink" onClick={()=>{jumpPage('teacher/classdetail/manage')}}>成绩管理</span>
              </Header>
              <div className="information">
                <h3>课程信息</h3>
                <p>有<span>40</span>人选修了该门课</p>
                <ul>
                 <li>课程编号：123456789</li>
                 <li>开课时间：2016-2017/2</li>
                 <li>课程属性：选修</li>
                 <li>学&emsp;&emsp;分：1学分</li>
                 <li>课程描述:</li>
                </ul>
                <p>&emsp;&emsp;通信技术日新月异的发展，使更多的人们希望掌握通信的原理。
                本书的宗旨是系统深入的阐述通信系统和通信网的基本原理</p>
              </div>
              <div className="data">
                 <h3>课程资料</h3>
                 <table>
                  <tbody>
                   <tr>
                      <td>实验指导.pfd</td>
                      <td>上传于2016-10-21</td>
                      <td>删除</td>
                      <td>重新上传</td>
                   </tr>
                   <tr>
                      <td>实验报告参考.doc</td>
                      <td>上传于2016-10-21</td>
                      <td>删除</td>
                      <td>重新上传</td>
                   </tr>
                  </tbody> 
                 </table>     
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
                })
              })
            }}>
              <a  aria-label="Next">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {
              [1,2,3].map((studentlist,index)=>{
                return (
                  <li
                    key={index}
                    className={this.state.studentlistIndex==index?'active':''}
                    onClick={()=>{
                      this.setState({
                        studentlists : studentlists[index],
                        studentlistIndex:index
                      })
                    }}><a>{studentlist}</a></li>
                )
              })
            }

            <li onClick={()=>{
              this.setState({
                studentlistIndex : this.state.studentlistIndex+1<=2?this.state.studentlistIndex+1:2
              },()=>{
                this.setState({
                  studentlists:studentlists[this.state.studentlistIndex]
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
        	)
    }
}