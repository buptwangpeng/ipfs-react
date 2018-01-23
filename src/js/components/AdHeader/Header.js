import React, {Component} from 'react'
import './Header.css'
import jumpPage from '../../core/jumpPage.js'


export default class Header  extends Component{
    constructor(){
        super();
        this.state={
            admin_name:localStorage.name,
        }
    }


    render() {
        return (
             <div style={{width:'100%',padding:'0'}}>
                 <div className="row header-background">
                    <div
                        onClick={()=>{jumpPage('admin')}}
                        className="col-xs-6  col-md-5">
                        <p style={{marginLeft:60,fontSize:60,color:'#fff'}}>LOGO</p>
                    </div>
                    <div className="col-xs-12 col-md-7  header-nav">
                        {/*为什么是col-md-6,而不是col-lg-6*/}
                        <div
                            onClick={()=>{jumpPage('admin/personalInfo')}}
                            className="header-nav width_25">
                            个人中心
                        </div>
                        <div
                            onClick={()=>{
                                if(confirm("确定退出登录?")){
                                    jumpPage('/')
                                }
                            }}
                            className="header-nav width_25">
                            退出
                        </div>
                        <div
                            className="header-nav width_25">
                            当前管理员：{this.state.admin_name}
                        </div>
                    </div>
                 </div>

             </div>

        )
    }

}
