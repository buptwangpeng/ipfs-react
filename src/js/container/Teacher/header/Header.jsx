import React from 'react';
import jumpPage from '../../../core/jumpPage.js';
import './Header.css'
export default class Header extends React.Component{
    render(){
        return (
        <div style={{width:'100%',padding:'0 15px'}}>
            <div className="row header-background">
                <div
                    onClick={()=>{jumpPage('teacher')}}
                    className="col-xs-6 col-lg-6">
                    <p style={{marginLeft:60,fontSize:60,color:'#fff'}}>LOGO</p>
                </div>
                <div className="col-xs-12 col-md-6 header-nav">
                    <div
                        onClick={()=>{jumpPage('teacher/classlist')}}
                        className="header-nav width12 headdetail">
                        课程详情
                    </div>
                    
                    <div
                        onClick={()=>{jumpPage('teacher/apply')}}
                        className="header-nav width25 headnew">
                        申请新课
                    </div>
                    <div
                        onClick={()=>{jumpPage('teacher/personalcen')}}
                        className="header-nav width25 headpersonal">
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
            <div  className="row header-sub">
                <div className="col-md-6 col-xs-6 header-sub-left">
                    <div className="color-block" style={{marginLeft:-15}}></div>
                    <div className="header-sub-title">{this.props.title}</div>
                </div>
                <div className="col-md-6 col-xs-6 header-sub-right">
                    {this.props.children}
                </div>
            </div>
        </div>
        )
    }

}