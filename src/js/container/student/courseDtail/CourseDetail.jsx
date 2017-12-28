/**
 * Created by henry on 2017/12/28.
 * 课程详情页
 */
import React from 'react';
import Header from '../../../components/header/Header.jsx'
import Footer from '../../../components/footer/Footer.jsx'
export default class CourseDetail extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div style={{background:'#eee',height:window.innerHeight}}>
				<Header
					title="课程详情"
				>
					{/*<div>右侧</div>*/}
				</Header>

				<Footer/>
			</div>
		)
	}

}
