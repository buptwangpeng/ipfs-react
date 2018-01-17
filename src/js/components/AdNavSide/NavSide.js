import React, {Component} from 'react'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import NavLink from '../AdNavLink/NavLink'
import './NavSide.css'
export default class NavSide extends Component{

    render() {
        return (
            <div>
                    <div >
                        <h2 style={{margin:'0',}}>学生信息</h2>

                        <ul className="nav nav-pills nav-stacked">
                            <li ><a href="http://localhost:8080/admin/student/add">添加</a></li>
                            <li ><a href="http://localhost:8080/admin/student/modify">信息查询与更改</a></li>
                            <li ><a href="http://localhost:8080/admin/student/export">成绩查询与导出</a></li>
                        </ul>

                        <h2>教师信息</h2>
                        <ul className="nav nav-pills nav-stacked">
                            <li ><a href="http://localhost:8080/admin/teacher/add">添加</a></li>
                            <li ><a href="http://localhost:8080/admin/teacher/modify">信息查询与更改</a></li>
                            <li ><a href="http://localhost:8080/admin/teacher/apply">开课申请</a></li>
                        </ul>
                        <h2>课程信息</h2>
                        <ul className="nav nav-pills nav-stacked">
                            <li ><a href="http://localhost:8080/admin/course/add">添加</a></li>
                            <li ><a href="http://localhost:8080/admin/course/modify">信息查询与更改</a></li>
                        </ul>
                        <h2>管理员信息</h2>
                        <ListGroup>
                            <ListGroupItem className="a" ><NavLink to="/admin/administrator/add">添加(需超管权限)</NavLink></ListGroupItem>
                            <ListGroupItem className="a" ><NavLink to="/admin/administrator/modify">信息查询与更改</NavLink></ListGroupItem>
                        </ListGroup>
                    </div>

            </div>




        )
    }

}
