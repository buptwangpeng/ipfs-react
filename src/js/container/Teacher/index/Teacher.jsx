import React from 'react';
import Footer from '../footer/Footer.jsx'
import { Link } from 'react-router';
import './Teacher.css';
import jumpPage from '../../../core/jumpPage';
import ListItem from './ListItem.jsx';
import '../../../../css/bootstrap.css';
import '../../../../icon/iconfont.css';

export default class Teacher extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '陈萍老师'
        }
    }

    render() {
        return (
          <div>

            <div clssName="teacher">
              <div className="top">
                <div
                   onClick={()=>{jumpPage('teacher')}}
                   className="col-xs-6 col-lg-6">
                   <p id="logo">LOGO</p>
                </div>
                <div className="col-xs-12 col-md-6 header-nav">
                    <div
                        onClick={()=>{jumpPage('teacher/classlist')}}
                        className="header-nav width12">
                        课程详情
                    </div>
                    <div
                        onClick={()=>{jumpPage('teacher/gradelist')}}
                        className="header-nav width25">
                        成绩管理
                    </div>
                    <div
                        onClick={()=>{jumpPage('teacher/apply')}}
                        className="header-nav width25">
                        申请新课
                    </div>
                    <div
                        onClick={()=>{jumpPage('teacher/personalcen')}}
                        className="header-nav width25">
                        个人中心
                    </div>
                    <div
                        onClick={()=>{
                            if(confirm("确定退出登录?")){
                                jumpPage('teacher')
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
                     {"欢迎你,"+this.state.name}
                     <span id="timetable" onClick={()=>{jumpPage('teacher/timetable')}}>课表</span>
                     <span id="newclass" onClick={()=>{jumpPage('teacher/apply')}}>申请新课</span>
                  </div>
                  <div className="flexCenter"
                  style={{height:'85%', width:'100%'}}>
                  <div className="flexCenter"
                     style={{flexDirection:'column', width:'100%', height:'100%'}}>
                  <ListItem
                    icon="&#xe640;"
                    title="课程一"
                    abstract="通信原理实验"
                    handleClick = {()=>{jumpPage('teacher/classdetail')}}
                  />
                  <ListItem
                    icon="&#xe640;"
                    title="课程三"
                    abstract="移动通信原理"
                    handleClick = {()=>{jumpPage('teacher/classdetail')}}
                  />
                  </div>
                  <div style={{width:'100%',height:'100%'}}>
                  <ListItem
                    icon="&#xe640;"
                    title="课程二"
                    abstract="信号与系统"
                    handleClick = {()=>{jumpPage('teacher/classdetail')}}
                  />
                  <ListItem
                    icon="&#xe640;"
                    title="课程四"
                    abstract="信息论基础"
                    handleClick = {()=>{jumpPage('teacher/classdetail')}}
                  />
                  </div>

                  </div>
                  </div>
                </div>
              </div>
              <Footer/>
            </div>

   
        );
    }
}