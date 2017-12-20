import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router';

export default class AchiManage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

          <div className="AchiManage">
          <Header/>
          <div className="headerun"></div>
          <span className="headeropen">通信原理实验</span>
          <h2>成绩管理</h2>
          <table>
                  <thead>
                    <tr>
                      <td>姓名</td>
                      <td>学号</td>
                      <td>平时成绩</td>
                      <td>作业得分</td>
                      <td>总分</td>
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
                    <tr>
                      <td>钟凯伦</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>闵从文</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>王哲</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                   </tbody>    
                 </table>
                 <div className="save">
                   <span>保存</span>|
                   <span>提交</span>
                 </div>
              <Footer/>     
          </div>
        	)
        }
    }