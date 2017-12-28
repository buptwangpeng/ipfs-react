/**
 * Created by henry on 2017/12/28.
 * 选课页面
 */
import React from 'react';
import Header from '../../../components/header/Header.jsx'
import jumpPage from '../../../core/jumpPage.js'
import Footer from '../../../components/footer/Footer.jsx'
import ListItem from './listItem/ListItem.jsx';

let course1 = [
	{courseName:"通原实验",courseType:"必修",courseId:"123451",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123453",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123454",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123455",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123456",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123457",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123458",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123459",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123461",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
	{courseName:"通原实验",courseType:"必修",courseId:"123462",teacher:"陈萍",time:"2016-2017/2", score:"3学分",grade:98},
];
let course2 = [
	{courseName:"通原",courseType:"必修",courseId:"4513451",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513453",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513454",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513455",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513456",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513457",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513458",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513459",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513461",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
	{courseName:"通原",courseType:"必修",courseId:"4513462",teacher:"陈萍",time:"2015-2016/1", score:"4学分",grade:89},
];
let course3 = [
	{courseName:"电磁波",courseType:"选修",courseId:"123451",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123453",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123454",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123455",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123456",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123457",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123458",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123459",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123461",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
	{courseName:"电磁波",courseType:"选修",courseId:"123462",teacher:"陈萍",time:"2017-2018/1", score:"2学分",grade:91},
];
let courses = [course1,course2,course3];
export default class Grade extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			courses : courses[0],
			courseIndex:0
		}
	}
	handleSearch = (e)=>{
		if(e&&e.keyCode ==13){
			//检测到回车开始搜索
			alert('未搜索到课程')
		}
	}
	render(){
		return(
			<div style={{background:'#eee',height:window.innerHeight,paddingBottom:52}}>
				<Header title="成绩查询">
					<div className="flex-center course-search">
						<div className="flex-center search-addon">
							<icon className="iconfont" style={{fontSize:18}}>&#xe66e;</icon>
						</div>
						<input onKeyUp={this.handleSearch} className="search-input" type="text" placeholder="输入课程名"/>
					</div>
					<div onClick={()=>{window.open('http://localhost:8080/doc.docx')}} style={{color:"#20b18a"}}>
						下载成绩单
					</div>
				</Header>
				<div style={{padding:'10px 0',width:"70%",margin:'0 auto',background:'#fff',height:window.innerHeight-300}}>
					<ListItem
						color="#000"
						courseName="课程名称"
						courseType="课程属性"
						courseId="课程编号"
						teacher="任课教师"
						time="上课时间"
						score="学分"
						grade="成绩"
					/>
					{this.state.courses.map((course,index)=>{
						return(
							<ListItem

								key={course.courseId}
								handleClick={()=>{
									jumpPage('student/courseDetail')
								}}
								courseName={course.courseName}
								courseType={course.courseType}
								courseId={course.courseId}
								teacher={course.teacher}
								time={course.time}
								score={course.score}
								status={course.status}
							    grade={course.grade}
							/>
						)
					})}
				</div>
				<nav aria-label="Page navigation" style={{float:'right',marginRight:'17%'}}>
					<ul className="pagination">
						<li onClick={()=>{
							this.setState({
								courseIndex : this.state.courseIndex-1>=0?this.state.courseIndex-1:0
							},()=>{
								this.setState({
									courses:courses[this.state.courseIndex]
								})
							})
						}}>
							<a href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						{
							[1,2,3].map((course,index)=>{
								return (
									<li
										key={index}
										className={this.state.courseIndex==index?'active':''}
										onClick={()=>{
											this.setState({
												courses : courses[index],
												courseIndex:index
											})
										}}><a>{course}</a></li>
								)
							})
						}

						<li onClick={()=>{
							this.setState({
								courseIndex : this.state.courseIndex+1<=2?this.state.courseIndex+1:2
							},()=>{
								this.setState({
									courses:courses[this.state.courseIndex]
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
