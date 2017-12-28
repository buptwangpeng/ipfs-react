import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router';

export default class ClassOne extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
           <div className="classone">
              <Header/>
              <div className="headerun"></div>
              <span className="headeropen">通信原理实验</span>
              <Link to="/classone/manage" id="manageLink"><span>成绩管理</span></Link>
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
                 <table>
                  <thead>
                    <tr>
                      <td>姓名</td>
                      <td>学号</td>
                      <td>进度</td>
                      <td>作业提交</td>
                      <td>作业评分</td>
                    </tr>
                   </thead>
                   <tbody> 
                    <tr>
                      <td>蔡天炜</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>王鹏</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>黄博文</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>郑秋宏</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>张育衔</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                   </tbody>    
                 </table>
              </div>
            <Footer/>
          </div>
        	)
    }
}