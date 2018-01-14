/**
 * Created by henry on 2017/12/28.
 * 课程详情页
 */
import React from 'react';
import Header from '../../../components/header/Header.jsx'
import Footer from '../../../components/footer/Footer.jsx'
import Util from '../../../util/util';
import './CourseDetail.css';
let courses = [
	{title:'通信原理',grade:'90分',files:['通信原理实验指导.pdf','通信原理实验指导.docx'],number:'123456',time:'2016~2017/第一学期',type:'必修',score:'4学分',describe:'通信技术日新月异的发展，使更多的人期望掌握通信的基本原理。本课程的宗旨是深入阐述通信系统和通信网的基本理论。'},
	{title:'计算机原理',grade:'暂未给出',files:['计算机原理课程资料.pdf','计算机原理课程资料.docx'],number:'234567',time:'2016~2017/第二学期',type:'必修',score:'2学分',describe:'通信技术日新月异的发展，使更多的人期望掌握通信的基本原理。本课程的宗旨是深入阐述通信系统和通信网的基本理论。'},
	{title:'电磁场与电磁波',grade:'83分',files:['电磁场与电磁波课程资料.pdf','电磁场与电磁波课程资料.docx'],number:'999999',time:'2017~2018/第一学期',type:'选修',score:'2学分',describe:'通信技术日新月异的发展，使更多的人期望掌握通信的基本原理。本课程的宗旨是深入阐述通信系统和通信网的基本理论。'},
	{title:'数字电路',grade:'暂未给出',files:['数字电路课程资料.pdf','数字电路课程资料.docx'],number:'123456',time:'2017~2018/第二学期',type:'必修',score:'3学分',describe:'通信技术日新月异的发展，使更多的人期望掌握通信的基本原理。本课程的宗旨是深入阐述通信系统和通信网的基本理论。'},
	{title:'概率论',grade:'96分',files:['概率论课程资料.pdf','概率论课程资料.docx'],number:'654321',time:'2017~2018/第二学期',type:'必修',score:'3学分',describe:'通信技术日新月异的发展，使更多的人期望掌握通信的基本原理。本课程的宗旨是深入阐述通信系统和通信网的基本理论。'},
]
export default class CourseDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			courseId : Util.Url.getUrlParam().courseid || 0,
		}
	}
	componentDidMount(){
		document.title = courses[this.state.courseId].title
	}
	render(){
		return(
			<div style={{background:'#eee'}}>
				<Header
					title = {courses[this.state.courseId].title}
				>
					{/*<div>右侧</div>*/}
				</Header>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-xs-12" style={{padding:0,background:'#808080'}}>
							<div className="course-detail-abstract">
								<p>{'课程编号：'+courses[this.state.courseId].number}</p>
								<p>{'开课时间：'+courses[this.state.courseId].time}</p>
								<p>{'课程属性：'+courses[this.state.courseId].type}</p>
								<p>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分：{courses[this.state.courseId].score}</p>
								<p>{'课程概述：'}</p>
								<p style={{textIndent:25}}>{courses[this.state.courseId].describe}</p>
							</div>
						</div>
						<div className="col-md-8 col-md-offset-2 col-xs-12" style={{padding:0,marginTop:30}}>
							<div className="timeline" >
								<div className="course-detail-progress"></div>
								<div style={{display:'flex',flexDirection:'column',width:'80%'}}>
									<div style={{display:'flex'}}>
										<div className="course-detail-progress-title">资料下载</div>
										<div style={{marginLeft:10,color:'#808080',fontSize:10}}>下载资料预习后方可进行下面步奏</div>
									</div>
									<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:190}}>
										<div style={{display:'flex',flexDirection:'column'}}>
											<div style={{display:'flex',alignItems:'center'}}>
												<div className="dot"></div>
												<a
													onClick={()=>{window.open('http://localhost:8080/doc.docx')}}
													style={{textDecoration:"underline",marginLeft:5}}>
													{courses[this.state.courseId].files[0]}
												</a>
											</div>
											<div style={{display:'flex',alignItems:'center'}}>
												<div className="dot"></div>
												<a
													onClick={()=>{window.open('http://localhost:8080/doc.docx')}}
													style={{textDecoration:"underline",marginLeft:5}}>
													{courses[this.state.courseId].files[1]}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="timeline" >
								<div className="course-detail-progress"></div>
								<div style={{display:'flex',flexDirection:'column',width:'80%'}}>
									<div style={{display:'flex'}}>
										<div className="course-detail-progress-title">在线测试</div>
										<div style={{marginLeft:10,color:'#808080',fontSize:10}}>请在每单元预习完成后进行测试</div>
									</div>
									<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:190}}>
											<div style={{display:'flex',alignItems:'center'}}>
												<div className="dot"></div>
												<div style={{marginLeft:5}}>
													第一单元测试
												</div>
												<a
													onClick={()=>{alert('请先下载资料')}}
													style={{textDecoration:"underline",marginLeft:5}}>
													去测试
												</a>
											</div>
											<div style={{display:'flex',alignItems:'center'}}>
												<div className="dot"></div>
												<div style={{marginLeft:5}}>
													第二单元测试
												</div>
												<a
													onClick={()=>{alert('请先下载资料')}}
													style={{textDecoration:"underline",marginLeft:5}}>
													去测试
												</a>
											</div>
											<div style={{display:'flex',alignItems:'center'}}>
												<div className="dot"></div>
												<div style={{marginLeft:5}}>
													第三单元测试
												</div>
												<a
													onClick={()=>{alert('请先下载资料')}}
													style={{textDecoration:"underline",marginLeft:5}}>
													去测试
												</a>
											</div>
											<div style={{display:'flex',alignItems:'center'}}>
												<div className="dot"></div>
												<div style={{marginLeft:5}}>
													第四单元测试
												</div>
												<a
													onClick={()=>{alert('请先下载资料')}}
													style={{textDecoration:"underline",marginLeft:5}}>
													去测试
												</a>
											</div>
									</div>
								</div>
							</div>
							<div className="timeline" >
								<div className="course-detail-progress"></div>
								<div style={{display:'flex',flexDirection:'column',width:'100%'}}>
									<div style={{display:'flex'}}>
										<div className="course-detail-progress-title">实验报告提交</div>
										<div style={{marginLeft:10,color:'#808080',fontSize:10}}>请按课程要求完成实验报告</div>
									</div>
									<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:190}}>
										<input type="file"/>
										<div className="btn btn-sm" style={{background:'#20b18a',color:'#fff',marginLeft:10}}>上传</div>
									</div>
								</div>
							</div>
							<div className="timeline" >
								<div className="course-detail-progress1"></div>
								<div style={{display:'flex',flexDirection:'column',width:'80%'}}>
									<div style={{display:'flex'}}>
										<div className="course-detail-progress-title">成绩</div>
										<div style={{marginLeft:10,color:'#808080',fontSize:10}}>本课程成绩是</div>
									</div>
									<div style={{display:'flex',justifyContent:'center',width:'100%',fontSize:18}}>
										{courses[this.state.courseId].grade}
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<Footer/>
			</div>
		)
	}

}
