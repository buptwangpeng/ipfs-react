/**
 * Created by henry on 17/12/27.
 */
import React from 'react';
import Footer from '../../../components/footer/Footer.jsx'
import jumpPage from '../../../core/jumpPage';
import ListItem from './listItem/ListItem.jsx';
import '../../../../css/bootstrap.css';
import '../../../../icon/iconfont.css';
import './Student.css';
class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : localStorage.name
		}
	}
	componentDidMount(){

	};
	componentWillMount(){
	}

	render(){
		return(
			<div>
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
				    <div className="row" style={{
				        height:'110px',
					    background:'#1abc9c',
					    display:"flex",
					    alignItems:'center'
				    }}>
					    <div
						    onClick={()=>{jumpPage('student')}}
						    className="col-xs-6 col-lg-6 nav2">
						    {/*<p style={{marginLeft:60,fontSize:60,color:'#fff'}}>LOGO</p>*/}
					    </div>
				    </div>
					<div className="flexCenter row">
						<div
							style={{height:window.innerHeight-140,padding:40}}
							className="col-xs-12 col-md-8">
							<div style={{fontSize:28,color:'#808080',height:'15%'}}>
								{"欢迎你，"+this.state.name}
							</div>
							<div
								className="flexCenter"
								style={{height:'85%', width:'100%'}}>
								<div className="flexCenter"
								     style={{flexDirection:'column', width:'100%', height:'100%'}}>
									<ListItem
										className=""
										icon="&#xe618;"
										title="选课"
										abstract="点击查看可选课程"
										handleClick = {()=>{jumpPage('student/chooseCourse')}}
									/>
									<ListItem
										icon="&#xe61c;"
										title="成绩查询"
										abstract="查看本人全部课程成绩"
										handleClick = {()=>{jumpPage('student/grade')}}
									/>
								</div>
								<div style={{width:'100%',height:'100%'}}>
									<ListItem
										icon="&#xe656;"
										title="已选课程"
										abstract="本学期已选择6门课程"
										handleClick = {()=>{jumpPage('student/selectedCourse')}}
									/>
									<ListItem
										icon="&#xe600;"
										title="个人中心"
										abstract="查看修改个人信息"
										handleClick = {()=>{jumpPage('student/me')}}
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
};

export default Index;



