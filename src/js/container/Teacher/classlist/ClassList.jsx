import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import jumpPage from '../../../core/jumpPage';
import ListItem from './ListItem.jsx';
import Teacher from '../../../core/teacher.js'

export default class ClassList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			courses:[]     /*[{id:'123451',name:"通信原理实验",number:'20',time:'2016-2017/2',object:"信通院/大二"},
                          {id:'123452',name:"移动通信原理",number:'20',time:'2016-2017/2',object:"信通院/大二"},
                          {id:'123453',name:"信号与系统",number:'20',time:'2016-2017/2',object:"信通院/大二"},
                          {id:'123454',name:"信息论基础",number:'20',time:'2016-2017/2',object:"信通院/大二"} 
                           ] */

		}
	}

	handleSearch = (e)=>{
		if(e&&e.keyCode ==13){
			//检测到回车开始搜索
			alert('未搜索到课程')
		}
	}


   componentWillMount(){

   }


	componentDidMount(){
	 let teacher=new Teacher();
     let url='http://120.79.198.95:8082/teacher/course/query/';
     let param={};
     teacher.coursequery(url,param).then(
         (response)=>{ 
          let jsonLength = 0;
          for(let item in response.data){jsonLength++};
          console.log(jsonLength);
          let datarestore=[];
          for(let i=0;i<jsonLength;i++){datarestore.push(response.data[i])}
          console.log(datarestore)	
          this.setState({courses:datarestore})       
         }
    )   

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
					this.state.courses.map((course,index)=>{
							return(
								<ListItem
									handleClick={()=>jumpPage('teacher/classdetail?courseid='+course.courseId)}
									key={course.courseId}
									title={course.name}
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