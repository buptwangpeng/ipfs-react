/**
 * Created by henry on 2017/12/28.
 * 选课页面
 */
import React from 'react';
import Header from '../../../components/header/Header.jsx'
import Footer from '../../../components/footer/Footer.jsx'
export default class Me extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div style={{background:'#eee',height:window.innerHeight}}>
				<Header
					title="个人中心"
				>
					{""}
				</Header>

				<Footer/>
			</div>
		)
	}

}
