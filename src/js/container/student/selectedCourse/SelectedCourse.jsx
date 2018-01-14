/**
 * Created by henry on 2017/12/28.
 * 选课页面
 */
import React from 'react';
import jumpPage from '../../../core/jumpPage.js';
import Header from '../../../components/header/Header.jsx'
import Footer from '../../../components/footer/Footer.jsx'
import ListItem from './listItem/ListItem.jsx';
let data = [
	{id:'1',title:"通原实验课",teacher:"陈萍", time:"星期二 8:00~10:00,星期四 8:00~10:00",progress:'0.355'},
	{id:'2',title:"计算机原理",teacher:"XXX", time:"星期四 10:00~12:00,星期五 8:00~10:00",progress:'0.3'},
	{id:'3',title:"电磁场与电磁波",teacher:"XXX", time:"星期三 13:30~15:30,星期四 10:00~12:00",progress:'0.8'},
	{id:'4',title:"数字电路",teacher:"XXX", time:"星期二 15:30~17:30,星期五 8:00~10:00",progress:'0.6'},
	{id:'5',title:"概率论",teacher:"XXX", time:"星期五 8:00~10:00",progress:'0.4'},
]
export default class SelectedCourse extends React.Component{
	constructor(props){
		super(props);
	}
	handleSearch = (e)=>{
		if(e&&e.keyCode ==13){
			//检测到回车开始搜索
			alert('未搜索到课程')
		}
	}
	render(){
		return(
			<div style={{paddingBottom:60}}>
				<Header title="已选课程">
					<div className="flex-center course-search">
						<div className="flex-center search-addon">
							<icon className="iconfont" style={{fontSize:18}}>&#xe66e;</icon>
						</div>
						<input onKeyUp={this.handleSearch} className="search-input" type="text" placeholder="输入课程名"/>
					</div>
				</Header>

				<div style={{
					width:'100%',
					padding:'0px 15% 0 15%',
					display:'flex',
					justifyContent:'space-between',
					flexWrap:'wrap'
				}}>
					{
						data.map((course,index)=>{
							return(
								<ListItem
									handleClick={()=>jumpPage('student/courseDetail?courseid='+index)}
									key={course.id}
									title={course.title}
									teacher={course.teacher}
									time={course.time}
									progress={course.progress}
								/>
							)
						})
					}
				</div>
				<Footer/>
			</div>
		)
	}

}
