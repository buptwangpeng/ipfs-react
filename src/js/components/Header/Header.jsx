/**
 * Created by henry on 2017/12/28.
 * Header
 * this.props.title传入子标题
 * this.props.children传入右侧布局内容
 */
import React from 'react';
import jumpPage from '../../core/jumpPage.js';
import './Header.css'
export default class Header extends React.Component{
	render(){
		return (
		<div style={{width:'100%',padding:'0 15px'}}>
			<div  onClick={() => {
                jumpPage('student')
            }}
				  className="nav2 ">
                {/*<Image src="../../../image/2.png" responsive />*/}

				<div style={{width:'0',height:'0'}}>
					<img src="../../../../image/2.png" className="" alt="Responsive image"/>
				</div>

			</div>
			<div className="row header-background">
				<div
					onClick={()=>{jumpPage('student')}}
					className="col-xs-6 col-md-4 col-lg-6 nav2">
					{/*<p style={{marginLeft:60,fontSize:60,color:'#fff'}}>LOGO</p>*/}
				</div>
				<div className="col-xs-12 col-md-8  col-lg-6 header-nav">
					<div
						onClick={()=>{jumpPage('student/chooseCourse')}}
						className="header-nav width12 nav1">
						选课
					</div>
					<div
						onClick={()=>{jumpPage('student/selectedCourse')}}
						className="header-nav width25 nav1">
						已选课程
					</div>
					<div
						onClick={()=>{jumpPage('student/grade')}}
						className="header-nav width25 nav1">
						成绩查询
					</div>
					<div
						onClick={()=>{jumpPage('student/me')}}
						className="header-nav width25 nav1">
						个人中心
					</div>
					<div
						onClick={()=>{
							if(confirm("确定退出登录?")){
								jumpPage('/')
							}
						}}
						className="header-nav width25 nav1">
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