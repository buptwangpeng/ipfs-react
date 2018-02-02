/**
 * Created by henry on 2017/12/28.
 * 选课页面
 */
import React from 'react';
import Header from '../../../components/header/Header.jsx'
import Footer from '../../../components/footer/Footer.jsx'
import ListItem from './listItem/ListItem.jsx'
import Student from '../../../core/student.js'
import './ChooseCourse.css';
import getJsonLength from '../../../core/getJsonLength.js'

//智能合约引入和声明部分
import {default as Web3} from 'web3'
import {default as contract} from 'truffle-contract'
import study_artifacts from '../../../../../build/contracts/studyData.json'

let Study = contract(study_artifacts);
let StudyProvider = new Web3.providers.HttpProvider("http://localhost:8545");
Study.setProvider(StudyProvider);
let web3 = new Web3(StudyProvider);//创建web3对象，需要新创建对象，后面才能调用
//

//status: 1可选，2已选，3已满
let courses_arr=[];

export default class ChooseCourse extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			courses : [],
			courseIndex:1,

            pagesArr: [] , //页码的数组
            pages: 3,
            courseId:'',
            studentId:'',
            address:'',
            unlockpassword:''

        }
	}
	handleSearch = (e)=>{
		if(e&&e.keyCode ==13){
			//检测到回车开始搜索
			alert('未搜索到课程')
		}
	};

    componentWillMount(){
    	this.query(1);
    	let self=this;
        let url1='http://120.79.198.95:8000/user/info/query/';
        let url2='http://120.79.198.95:8000/user/addressunlock_password/query/';
        let student=new Student();
        let param={};
        student.getstudentid(url1,param).then(
            (response)=>{this.setState({studentId:response.data.id})}
        );

        student.getaccount(url2,param).then(
            (response)=>{
                self.setState({
					address:response.data.address,
					unlockpassword:response.data.unlock_password
					},
					()=>{let a =web3.personal.unlockAccount(
						self.state.address,
						self.state.unlockpassword,
						3600*1000);
					console.log(a)})
            }
        )
    }
	//选课
    applyCourse(){
        let self=this;
        let url='http://120.79.198.95:8000/student/course/select/';
        let student=new Student();
        let param={
            courseId:this.state.courseId,
        };
        Study.deployed().then((instance)=>{
            // let  meta = instance;
            return instance.stuChooseCourse(parseInt(self.state.courseId),parseInt(self.state.studentId),{from: self.state.address, gas: 1800000});
        }).then(function(r){
        	console.log("调用合约函数后的返回值："+r);
                    if(r!==null){
                         console.log(self.state.courseId);
                        student.choosecourse(url,param).then(
                            (response)=>{alert("提交成功");
                                console.log(response)}
                        )
                    }else{
                        alert("提交失败")
					}
        }).catch(function (e) {
            console.log(e);
        })

    }
    //从后台获取课程数据
    query(a) {
        let student = new Student();
        let url = 'http://120.79.198.95:8000/student/course/select/list/query/';//接口的地址
        let self = this;
        let param = {
            page: a,//第a页的数据
            number: "6",

        };

        student.queryCourseList(url, param).then((response) => {
            let arr=[];
            console.log(response);
            self.setState({
                courses: response.data.content,
                pages: parseInt(response.data.pages),

            });
            // console.log(this.state.courses);
            let length=getJsonLength(this.state.courses);
            for(let i=0;i<length;i++){
                courses_arr[i]=this.state.courses[i]
            }
            // console.log(courses_arr);
            for(let i=1;i<=self.state.pages;i++){
                arr[i]=i;
            }
            // console.log(arr);
            self.setState({
                pagesArr:arr,

            });
        });
    }

    render(){
		return(
			<div style={{background:'#eee',height:window.innerHeight}}>
				<Header title="选课">
					<div className="flex-center course-search">
						<div className="flex-center search-addon">
							<icon className="iconfont" style={{fontSize:18}}>&#xe66e;</icon>
						</div>
						<input onKeyUp={this.handleSearch} className="search-input" type="text" placeholder="输入课程名"/>
					</div>
				</Header>
				<div style={{padding:'10px 0',width:"90%",margin:'0 auto',background:'#fff',height:window.innerHeight-300}}>
					<ListItem
						courseName="课程名称"
						courseType="课程属性"
						courseId="课程编号"
						teacherName="任课教师"
						time="上课学期"
						credit="学分"
						teacherTel="教师联系方式"
						teacherEmail="教师邮箱"
						abstract="课程简介"
						mark_element="分数组成"
					    // status="状态"
					/>
					{courses_arr.map((course,index)=>{
						return(
							<ListItem
								key={course.course_id}
								handleClick={()=>{
									let tempCourses = courses_arr;
									tempCourses[index].status = 1;
                                    this.setState({
											courses : tempCourses,
											courseId:tempCourses[index].course_id
										},
										()=>{this.applyCourse()})
								}}
								courseName={course.course_name}
								courseType={course.type}
								courseId={course.course_id}
								teacherName={course.teacher_name}
								time={course.time}
								credit={course.credit}
								status={course.status}
								teacherTel={course.teacher_tel}
								teacherEmail={course.teacher_email}
								abstract={course.abstract}
								mark_element={course.mark_element}

							/>
							)
					})}
				</div>
				<nav aria-label="Page navigation" style={{float:'right',marginRight:'17%'}}>
					<ul className="pagination">
						<li onClick={()=>{
							this.setState({
								courseIndex : this.state.courseIndex-1>=1?this.state.courseIndex-1:1
							},()=>{
								this.query(this.state.courseIndex)
							})

						}}>
							<a href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						{
							this.state.pagesArr.map((page,index)=>{
								return (
                                    // 索引index是从0开始的
									<li
										key={index+1}
										className={this.state.courseIndex==index+1?"active":''}
										onClick={()=>{

										this.setState({
											// courses : courses[index],
											courseIndex:index+1
										},()=>{
                                            this.query(index+1)
										})
									}}><a>{page}</a></li>
								)
							})
						}

						<li onClick={()=>{
							this.setState({
                                courseIndex: this.state.courseIndex + 1 <= this.state.pages? this.state.courseIndex + 1 : this.state.pages
							},()=>{
                                this.query(this.state.courseIndex)
								// this.setState({
								// 	courses:courses[this.state.courseIndex]
								// })
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
