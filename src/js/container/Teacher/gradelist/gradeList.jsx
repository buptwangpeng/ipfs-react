import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import jumpPage from '../../../core/jumpPage';
import ListItem from './ListItem.jsx';

let data=[{id:'1',title:"通信原理"},{id:'2',title:"信号与系统"},
          {id:'3',title:"移动通信原理"},{id:'4',title:"信息论基础"}]
export default class GradeList extends React.Component{
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
				<Header title="课程详情">
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
						data.map((data)=>{
							return(
								<ListItem
									handleClick={()=>jumpPage('teacher/classdetail/manage')}
									key={data.id}
									title={data.title}
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