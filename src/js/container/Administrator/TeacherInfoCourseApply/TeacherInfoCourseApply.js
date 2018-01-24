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

//status: 1可选，2已同意，3已拒绝
let course1 = [
    {
        course_name: "通原实验",
        academy: "信通院",
        course_property: "必修",
        course_id: "123451",
        teacher_name: "陈萍",
        time: "星期二 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "3学分",
        status: 1
    },
    {
        course_name: "通原实验",
        academy: "信通院",
        course_property: "必修",
        course_id: "123452",
        teacher_name: "陈萍",
        time: "星期二 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "3学分",
        status: 3
    },
    {
        course_name: "通原实验",
        academy: "信通院",
        course_property: "必修",
        course_id: "123453",
        teacher_name: "陈萍",
        time: "星期二 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "3学分",
        status: 1
    },
    {
        course_name: "通原实验",
        academy: "信通院",
        course_property: "必修",
        course_id: "123457",
        teacher_name: "陈萍",
        time: "星期二 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "3学分",
        status: 1
    },
    {
        course_name: "通原实验",
        academy: "信通院",
        course_property: "必修",
        course_id: "123441",
        teacher_name: "陈萍",
        time: "星期二 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "3学分",
        status: 1
    },
    {
        course_name: "通原实验",
        academy: "信通院",
        course_property: "必修",
        course_id: "123461",
        teacher_name: "陈萍",
        time: "星期二 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "3学分",
        status: 2
    },
];


//审批开课申请的全局变量
let ApproveNewCourse;
let ApproveCourseId;
let ApproveTeacherId;
let ApproveStatus;

export default class AdTeacherInfoCourseApply extends Component {
    constructor() {
        super();
        this.state = {
            courses: [],//赋了初值
            courseIndex: 0,

            pages: 3,
            pagesArr: [] , //页码的数组

            // ApproveNewCourse:'',
            // ApproveCourseId:'',
            // ApproveTeacherId:'',
            // ApproveStatus:'',


        }
    }

    componentWillMount() {
        // this.query(1);
        this.get(0);

    }


// componentDidUpdate(){
    //     this.get(0);
    // }
    //测试用例
    get(a) {
        let loginUrl = 'http://localhost:3005/page';
        let self = this;//一定要加上这个，因为在promise里this的作用域变了
        this.serverRequest = fetch(loginUrl /*+ '?user=' + self.state.user + '&password=' + self.state.password*/, {
            //?和&都要加上
            // "http://localhost:3004/list?user=${self.state.user}&password=${self.state.password}"
            method: "get",
            headers: {
                // 'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            let arr=[];
            console.log(response);
            response.json().then(function (response) {
                console.log(response[a]);
                self.setState({
                    courses: response[a],
                });
                for(let i=0;i<=self.state.pages-1;i++){
                    arr[i]=i+1;
                }
                console.log(arr);
                self.setState({
                    pagesArr:arr,
                });
                console.log(self.state.pagesArr);

            })

        }, function (e) {
            console.log('出错：', e)
        })
    }

    //

    //从后台获取开课申请数据
    query(a) {
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址
        let self = this;
        let param = {
            page: 'a',//第a页的数据
            number: "6",

        };

        admin.queryTeacherApply(url, param).then((response) => {
            let arr=[];
            console.log(response);
            self.setState({
                courses: response.data.content,
                pages: parseInt(response.data.pages)
            });
            for(let i=1;i<=self.state.pages;i++){
                arr[i]=i;
            }
            console.log(arr);
            self.setState({
               pagesArr:arr,
            });
        });
    }

    //审批开课申请
    approve() {
        let admin = new Admin();
        let url = 'http://localhost:3005/approve';//接口的地址

        let param = {
            course_approve: {
                new: ApproveNewCourse, //  0/1  是否为新课
                course_id: ApproveCourseId,//课程编号
                teacher_id: ApproveTeacherId,
                status: ApproveStatus,//status: 2同意，3拒绝

            }
        };

        admin.approveTeacherApply(url, param).then((response) => {
            console.log(response);
            console.log(response.meta.message);


        });
    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-4 col-md-2 col-lg-2">
                        <div>
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-8 col-md-8 col-lg-8  ">
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
                            {this.state.courses.map((course, index) => {
                                return (
                                    <ListItem
                                        key={course.course_id}
                                        // key是react里的，相同key的项目只会在界面上显示一个，一般给key赋值id就行了
                                        handleClick1={() => {
                                            alert('同意申请');
                                            let tempCourses = this.state.courses;
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
                                            // console.log([
                                            //     this.state.ApproveNewCourse,
                                            //     this.state.ApproveCourseId,
                                            //     this.state.ApproveTeacherId,
                                            //     this.state.ApproveStatus
                                            // ]);

                                            this.approve()

                                        }}
                                        handleClick2={() => {
                                            alert('拒绝申请');
                                            let tempCourses = this.state.courses;
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
                                        courseIndex: this.state.courseIndex - 1 >= 0 ? this.state.courseIndex - 1 : 0
                                    }, () => {
                                        // this.query(this.state.courseIndex)
                                        this.get(this.state.courseIndex)
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
                                            // 索引是从0开始的
                                            <li
                                                key={index}
                                                className={this.state.courseIndex == index ? "active" : ''}
                                                onClick={() => {
                                                    this.setState({
                                                        // courses: courses[index],
                                                        courseIndex: index
                                                    }, /*() => {
                                                        this.query(index)
                                                    }*/() => {
                                                        this.get(index)
                                                    })
                                                }}><a>{page}</a></li>
                                        )
                                    })
                                }

                                <li onClick={() => {
                                    this.setState({
                                        courseIndex: this.state.courseIndex + 1 <= this.state.pages-1? this.state.courseIndex + 1 : this.state.pages-1
                                    }, () => {
                                        // this.query(this.state.courseIndex)
                                        this.get(this.state.courseIndex);
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