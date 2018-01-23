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
let course2 = [
    {
        course_name: "通原",
        academy: "信通院",
        course_property: "必修",
        course_id: "123451",
        teacher_name: "陈萍",
        time: "星期三 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "5学分",
        status: 1
    },
    {
        course_name: "通原",
        academy: "信通院",
        course_property: "必修",
        course_id: "125451",
        teacher_name: "陈萍",
        time: "星期三 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "5学分",
        status: 3
    },
    {
        course_name: "通原",
        academy: "信通院",
        course_property: "必修",
        course_id: "120451",
        teacher_name: "陈萍",
        time: "星期三 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "5学分",
        status: 2
    },
    {
        course_name: "通原",
        academy: "信通院",
        course_property: "必修",
        course_id: "129451",
        teacher_name: "陈萍",
        time: "星期三 8:00~10:00",
        grade: "大三",
        mark_element: "100%期末",
        credit: "5学分",
        status: 1
    },
];
let courses = [course1, course2];

export default class AdTeacherInfoCourseApply extends Component {
    constructor() {
        super();
        this.state = {
            courses: courses[0],//赋了初值
            courseIndex: 0

        }
    }
    componentWillMount (){
        this.query(1);
        // let admin = new Admin();
        // let url = 'http://localhost:3004/list';//接口的地址
        //
        // let param = {
        //        page:'1',
        //
        // };
        //
        // admin.queryTeacherApply(url, param).then((response) => {
        //     console.log(response);
        //     this.setState({
        //        courses:response.data,
        //     })
        //
        // });
    }
query(a){
    let admin = new Admin();
    let url = 'http://localhost:3004/list';//接口的地址

    let param = {
        page:'a',

    };

    admin.queryTeacherApply(url, param).then((response) => {
        console.log(response);
        this.setState({
            courses:response.data,
        })

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
                                        // 不清楚key有什么用，ListItem的props里也没有key
                                        handleClick1={() => {
                                            alert('同意申请');
                                            let tempCourses = this.state.courses;
                                            tempCourses[index].status = 2;
                                            this.setState({courses: tempCourses})
                                        }}
                                        handleClick2={() => {
                                            alert('拒绝申请');
                                            let tempCourses = this.state.courses;
                                            tempCourses[index].status = 3;
                                            this.setState({courses: tempCourses})
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
                                    }, () => {this.query(this.state.courseIndex)
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
                                    [1, 2].map((course, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={this.state.courseIndex == index ? "active" : ''}
                                                onClick={() => {
                                                    this.setState({
                                                        // courses: courses[index],
                                                        courseIndex: index
                                                    },()=>{this.query(index)})
                                                }}><a>{course}</a></li>
                                        )
                                    })
                                }

                                <li onClick={() => {
                                    this.setState({
                                        courseIndex: this.state.courseIndex + 1 <= 2 ? this.state.courseIndex + 1 : 2
                                    }, () => {
                                        this.query(this.state.courseIndex)
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