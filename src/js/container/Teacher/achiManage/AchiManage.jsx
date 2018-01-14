import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './AchiManage.css'

export default class AchiManage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

          <div className="AchiManage">
          <Header title="通信原理实验"/>
          <h2>成绩管理</h2>
          <div className="list">
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
          </div>
          <div className="save">
              <span onClick={()=>{alert('保存成功')}}>保存</span>|
              <span onClick={()=>{alert('提交成功')}}>提交</span>
          </div>
          <Footer/>    
          </div>
        	)
        }
    }