/*
* create by wp 2018/1/22
* 教师开课申请页面
* 后台每页给前端发6条数据（一条数据就是一条开课申请）
* */

import React, {Component} from 'react'
import './TeacherInfoCourseApply.css'
import ListItem from './ListItem/ListItem.js'
import Header from "../../../components/AdHeader/Header"
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import Admin from '../../../core/admin.js'
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

//status: "1"可选，"2"已同意，"3"已拒绝

//审批开课申请的全局变量
let ApproveNewCourse;
let ApproveCourseId;
let ApproveTeacherId;
let ApproveStatus;
let ApproveCourseName;
let ApproveCourseProperty="";
let ApproveTerm;
let ApproveCredit;
let ApproveMarkElement=[];//成绩组成
let courses_arr=[];

export default class AdTeacherInfoCourseApply extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],//赋了初值
            courseIndex: 1,

            pages: 3,
            pagesArr: [] , //页码的数组
            yourAccount:''

            // ApproveNewCourse:'',
            // ApproveCourseId:'',
            // ApproveTeacherId:'',
            // ApproveStatus:'',


        }
    }

    componentWillMount() {
        this.query(1);
        // this.get(0);

    }

    // //测试用例
    // get(a) {
    //     let loginUrl = 'http://localhost:3005/page';
    //     let self = this;//一定要加上这个，因为在promise里this的作用域变了
    //     this.serverRequest = fetch(loginUrl , {
    //
    //         method: "get",
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     }).then(function (response) {
    //         let arr=[];
    //         console.log(response);
    //         response.json().then(function (response) {
    //             console.log(response[a]);
    //             self.setState({
    //                 courses: response[a],
    //             });
    //             for(let i=0;i<=self.state.pages-1;i++){
    //                 arr[i]=i+1;
    //             }
    //             console.log(arr);
    //             self.setState({
    //                 pagesArr:arr,
    //             });
    //             console.log(self.state.pagesArr);
    //
    //         })
    //
    //     }, function (e) {
    //         console.log('出错：', e)
    //     })
    // }

    //解锁区块链账户
    unlock(){
        let self = this;
        let address0 = "", unlockPassword = "";

        //从后台获取区块链账户和地址
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/user/addressunlock_password/query/';//接口的地址
        let param = {};

        admin.queryAddressPassword(url, param).then((response) => {
            console.log(response);
            address0 = response.data.address;
            unlockPassword = response.data.unlock_password;
            this.setState({
                yourAccount:address0
            },()=>{
                console.log([self.state.yourAccount, unlockPassword]);
                //解锁账户  调用web3接口
                let unLockRes = web3.personal.unlockAccount(address0, unlockPassword, 1000 * 60 * 60);
                console.log(unLockRes);
            })
        });



    }

    //从后台获取开课申请数据
    query(a) {
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/teacher/course/apply/query/';//接口的地址
        let self = this;
        let param = {
            page: a,//第a页的数据
            number: "6",

        };

        admin.queryTeacherApply(url, param).then((response) => {
            let arr=[];

            console.log(response);
            self.setState({
                courses: response.data.content,
                pages: parseInt(response.data.pages)
            });
            console.log(this.state.courses);
            let length=getJsonLength(this.state.courses);
            for(let i=0;i<length;i++){
                courses_arr[i]=this.state.courses[i]
            }
            console.log(courses_arr);
            for(let i=1;i<=self.state.pages;i++){
                arr[i]=i;
            }
            // console.log(arr);
            self.setState({
               pagesArr:arr,
            });
        });
    }

    //审批开课申请
    approve() {
        let self=this;
        this.unlock();
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/teacher/course/apply/approve/';//接口的地址

        let param = {
            course_approve: {
                new: ApproveNewCourse, //  0/1  是否为新课
                course_id: ApproveCourseId,//课程编号
                teacher_id: ApproveTeacherId,
                status: ApproveStatus,//status: 2同意，3拒绝

            }
        };
        Study.deployed().then((instance)=>{
            let a,b ;
            if(ApproveCourseProperty=="必修"){
                a=true;
            }else{
                a=false
            }
            if(ApproveMarkElement!==null){
                b=[100];
            }else{
               b=[];
            }
            console.log();
            return instance.addCourseInfo(
                parseInt(ApproveCourseId),
                ApproveCourseName,
                a,
                parseInt(ApproveTerm),
                parseInt(ApproveCredit),
                b,
                {from: self.state.yourAccount, gas: 1800000}
                );
        }).then(function(r){
            console.log("调用合约函数后的返回值："+r);
            if(r!==null){
                console.log(self.state.courseId);
                admin.approveTeacherApply(url, param).then((response) => {
                    console.log("response:"+response);
                    console.log("message:"+response.meta.message);
                    if(response.meta.message=="ok"){
                        alert("后台接收数据成功")
                    }else{
                        alert("后台接收数据失败")
                    }

                });
            }else{
                alert("提交失败")
            }
        }).catch(function (e) {
            console.log(e);
        });
    }

    render() {
        return (
            <div style={{background: '#ffffff', paddingBottom:40}}>
                <Header/>
                <div className="row" >
                    <div className="col-xs-3 col-md-2 col-lg-2" >
                        <div>
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-8 col-lg-8  ">
                        <div style={{
                            padding: '10px 0',
                            width: "100%",
                            margin: '0 auto',
                            background: '#fff',
                            height: window.innerHeight - 300
                        }}>
                            <ListItem
                                teacher_name="申请教师"
                                course_id="课程号"
                                course_name='课程名称'
                                academy='面向院系'
                                grade='面向年级'
                                time='开课时间'
                                credit='学分'
                                mark_element='成绩组成'
                                course_property='课程属性'
                                // status="状态"
                            />
                            {courses_arr.map((course, index) => {
                                return (
                                    <ListItem
                                        key={course.course_id}
                                        // key是react里的，相同key的项目只会在界面上显示一个，一般给key赋值id就行了
                                        handleClick1={() => {
                                            let tempCourses = courses_arr;
                                            tempCourses[index].status = "2";
                                            this.setState({courses: tempCourses,
                                                // ApproveNewCourse: course.new,
                                                // ApproveCourseId: course.course_id,
                                                // ApproveTeacherId:course.teacher_id,
                                                // ApproveStatus:tempCourses[index].status,
                                            });
                                             ApproveNewCourse = course.new;
                                             ApproveCourseId = course.course_id;
                                             ApproveTeacherId =course.teacher_id;
                                             ApproveStatus =tempCourses[index].status;
                                             ApproveCourseName=course.course_name;
                                             ApproveCourseProperty=course.course_property;//是否为必修 true/false
                                             ApproveTerm=course.time;
                                             ApproveCredit=course.credit;
                                             ApproveMarkElement=[course.mark_element];//成绩组成
                                            // console.log([
                                            //     this.state.ApproveNewCourse,
                                            //     this.state.ApproveCourseId,
                                            //     this.state.ApproveTeacherId,
                                            //     this.state.ApproveStatus
                                            // ]);

                                            this.approve()

                                        }}
                                        handleClick2={() => {
                                            let tempCourses = courses_arr;
                                            tempCourses[index].status = " 3";
                                            this.setState({
                                                courses: tempCourses,
                                                // ApproveNewCourse : course.new,
                                                // ApproveCourseId : course.course_id,
                                                // ApproveTeacherId :course.teacher_id,
                                                // ApproveStatus : tempCourses[index].status,
                                            });
                                            ApproveNewCourse = course.new;
                                            ApproveCourseId = course.course_id;
                                            ApproveTeacherId =course.teacher_id;
                                            ApproveStatus =tempCourses[index].status;
                                            ApproveCourseName=course.course_name;
                                            ApproveCourseProperty=course.course_property;//是否为必修 true/false
                                            ApproveTerm=course.time;
                                            ApproveCredit=course.credit;
                                            ApproveMarkElement=[course.mark_element];//成绩组成
                                            this.approve()
                                        }}
                                        course_name={course.course_name}
                                        grade={course.grade}
                                        course_property={course.course_property}
                                        course_id={course.course_id}
                                        teacher_name={course.teacher_name}
                                        academy={course.academy}
                                        mark_element={course.mark_element}
                                        time={course.time}
                                        credit={course.credit}
                                        status={course.status}
                                    />
                                )
                            })}
                        </div>
                        <nav aria-label="Page navigation" style={{float: 'right', marginRight: '17%'}}>
                            <ul className="pagination">
                                <li onClick={() => {
                                    this.setState({
                                        courseIndex: this.state.courseIndex - 1 >= 1 ? this.state.courseIndex - 1 : 1
                                    }, () => {
                                        this.query(this.state.courseIndex)
                                        // this.get(this.state.courseIndex)
                                        // this.setState({
                                        //     courses: courses[this.state.courseIndex]
                                        // })
                                    })

                                }}>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {
                                    this.state.pagesArr.map((page, index) => {
                                        return (
                                            // 索引index是从0开始的
                                            <li
                                                key={index+1}
                                                className={this.state.courseIndex == index+1 ? "active" : ''}
                                                onClick={() => {
                                                    this.setState({
                                                        // courses: courses[index],
                                                        courseIndex: index+1
                                                    }, () => {
                                                        this.query(index+1)
                                                    }/*() => {
                                                        this.get(index)
                                                    }*/)
                                                }}><a>{page}</a></li>
                                        )
                                    })
                                }

                                <li onClick={() => {
                                    this.setState({
                                        courseIndex: this.state.courseIndex + 1 <= this.state.pages? this.state.courseIndex + 1 : this.state.pages
                                    }, () => {
                                        this.query(this.state.courseIndex)
                                        // this.get(this.state.courseIndex);
                                        // this.setState({
                                        //     courses: courses[this.state.courseIndex]
                                        // })
                                    })
                                }}>
                                    <a aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}