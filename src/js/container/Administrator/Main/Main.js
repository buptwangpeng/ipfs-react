import React, {Component} from 'react'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import NavLink from '../../../components/NavLink/NavLink'
import './Main.css'
import Header from '../AdHeader/Header'
import Footer from '../AdFooter/Footer'

export default class AdMain extends Component{
    constructor(){
        super();
        this.state={
            value1:'快速查询',
        }
    }


    render() {
        return (
            <div>
                <Header />
                <div style={{overflow:"auto"}}>
                    <div className="Ad_menu">
                        <h2>学生信息</h2>
                        <ListGroup>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_student_info/ad_student_info_add">添加</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_student_info/ad_student_info_modify">信息查询与更改</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_student_info/ad_student_info_score_export">成绩查询与导出</NavLink></ListGroupItem>
                        </ListGroup>
                        <h2>教师信息</h2>
                        <ListGroup>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_teacher_info/ad_teacher_info_add">添加</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_teacher_info/ad_teacher_info_modify">信息查询与更改</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_teacher_info/ad_teacher_info_course_apply">开课申请</NavLink></ListGroupItem>
                        </ListGroup>
                        <h2>课程信息</h2>
                        <ListGroup>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_course_info/ad_course_info_add">添加</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_course_info/ad_course_info_modify">信息查询与更改</NavLink></ListGroupItem>
                        </ListGroup>
                        <h2>管理员信息</h2>
                        <ListGroup>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_administrator_info/ad_administrator_info_add">添加(需超管权限)</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/administrator/ad_administrator_info/ad_administrator_info_modify">信息查询与更改</NavLink></ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="content">
                        {this.props.children}

                    </div>

                </div>


                <Footer />

            </div>
        )
    }

}
