import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'
import {ListGroupItem} from 'react-bootstrap'
import NavLink from '../AdNavLink/NavLink'
import './NavSide.css'
import jumpPage from '../../core/jumpPage.js'

export default class NavSide extends Component {

    render() {
        return (
            <div>
                <div style={{background: '#dcdcdc', width: '100%', height: window.innerHeight-100, margin: '0', padding: '0'}}>

                    <h2 style={{margin:'0',}} className="NavSide_h2">学生信息</h2>
                    <div
                        onClick={() => {
                            jumpPage('admin/student/add')
                        }}
                        className="NavSide-nav ">
                        添加
                    </div>
                    <div
                        onClick={() => {
                            jumpPage('admin/student/modify')
                        }}
                        className="NavSide-nav ">
                        信息查询与更改
                    </div>
                    <div
                        onClick={() => {
                            jumpPage('admin/student/export')
                        }}
                        className="NavSide-nav ">
                        成绩查询与导出
                    </div>


                    <h2 className="NavSide_h2">教师信息</h2>
                    <div
                        onClick={() => {
                            jumpPage('admin/teacher/add')
                        }}
                        className="NavSide-nav ">
                        添加
                    </div>
                    <div
                        onClick={() => {
                            jumpPage('admin/teacher/modify')
                        }}
                        className="NavSide-nav ">
                        信息查询与更改
                    </div>
                    <div
                        onClick={() => {
                            jumpPage('admin/teacher/apply')
                        }}
                        className="NavSide-nav ">
                        开课申请
                    </div>


                    <h2 className="NavSide_h2">课程信息</h2>
                    <div
                        onClick={() => {
                            jumpPage('admin/course/add')
                        }}
                        className="NavSide-nav ">
                        添加
                    </div>
                    <div
                        onClick={() => {
                            jumpPage('admin/course/modify')
                        }}
                        className="NavSide-nav ">
                        信息查询与更改
                    </div>


                    <h2 className="NavSide_h2">管理员信息</h2>
                    <div
                        onClick={() => {
                            jumpPage('admin/administrator/add')
                        }}
                        className="NavSide-nav ">
                        添加
                    </div>
                    <div
                        onClick={() => {
                            jumpPage('admin/administrator/modify')
                        }}
                        className="NavSide-nav ">
                        信息查询与更改
                    </div>
                </div>

            </div>




        )
    }

}
