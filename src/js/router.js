import {
    Router,
    IndexRoute,
    Route,
    IndexRedirect,
    browserHistory}    from 'react-router';
import ReactDOM             from 'react-dom';
import React                from 'react';
//登录界面
import LogIn  from './container/Login/Login.jsx';
import AboutUs  from './container/LogIn/AboutUs/AboutUs';
//管理员
import Home  from './container/Administrator/Home/Home'
// 必须首字母大写，不然就会有warning，无法渲染出页面
import PersonalInfo from './container/Administrator/PersonalInfo/PersonalInfo'
import StudentInfoAdd from './container/Administrator/StudentInfoAdd/StudentInfoAdd'
import StudentInfoModify from './container/Administrator/StudentInfoModify/StudentInfoModify'
import StudentInfoScore from './container/Administrator/StudentInfoScore/StudentInfoScore'
import TeacherInfoAdd from './container/Administrator/TeacherInfoAdd/TeacherInfoAdd'
import TeacherInfoModify from './container/Administrator/TeacherInfoModify/TeacherInfoModify'
import TeacherInfoCourseApply from './container/Administrator/TeacherInfoCourseApply/TeacherInfoCourseApply'
import CourseInfoAdd  from './container/Administrator/CourseInfoAdd/CourseInfoAdd'
import CourseInfoModify from './container/Administrator/CourseInfoModify/CourseInfoModify'
import AdministratorInfoAdd from './container/Administrator/AdministratorInfoAdd/AdministratorInfoAdd'
import AdministratorInfoModify from './container/Administrator/AdministratorInfoModify/AdministratorInfoModify'


//老师
import TeacherIdex from './container/Teacher/index/Teacher.jsx';
import Apply from './container/Teacher/apply/Apply.jsx';
import Newclass from './container/Teacher/newClass/newclass.jsx';
import ClassDetail from './container/Teacher/classDetail/ClassDetail.jsx';
import AchiManage from './container/Teacher/achiManage/achimanage.jsx';
import TimeTable from './container/Teacher/timeTable/TimeTable.jsx';
import PersonalCen from './container/Teacher/personalCen/PersonalCen.jsx';
import ClassList from './container/Teacher/classlist/ClassList.jsx';

//学生
import Student from './container/student/index/Student.jsx';
import ChooseCourse from './container/student/chooseCourse/ChooseCourse.jsx';
import SelectedCourse from './container/student/selectedCourse/SelectedCourse.jsx';
import Grade from './container/student/grade/Grade.jsx';
import Me from './container/student/me/Me.jsx';
import CourseDetail from './container/student/courseDtail/CourseDetail.jsx';

import '../css/main.css';
import '../css/bootstrap.css'
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" >
            <IndexRoute component={LogIn}/>
            <Route path="us" component={AboutUs}/>
        </Route>
        <Route path="login" component={LogIn}/>
        {/*管理员*/}
        <Route path="/admin">
            <IndexRoute component={Home}/>
            <Route path="student">
                <IndexRoute component={StudentInfoAdd}/>
                <Route path="add" component={StudentInfoAdd}/>
                <Route path="modify" component={StudentInfoModify}/>
                <Route path="export" component={StudentInfoScore}/>
            </Route>
            <Route path="teacher">
                <IndexRoute component={TeacherInfoAdd}/>
                <Route path="add" component={TeacherInfoAdd}/>
                <Route path="modify" component={TeacherInfoModify}/>
                <Route path="apply" component={TeacherInfoCourseApply}/>
            </Route>
            <Route path="course">
                <IndexRedirect to="/admin/course/add"/>
                <Route path="add" component={CourseInfoAdd }/>
                <Route path="modify" component={CourseInfoModify}/>
            </Route>
            <Route path="administrator">
                <IndexRoute component={AdministratorInfoAdd}/>
                <Route path="add" component={AdministratorInfoAdd}/>
                <Route path="modify" component={AdministratorInfoModify}/>
            </Route>
            <Route path="personalInfo">
                <IndexRoute component={PersonalInfo}/>
            </Route>
        </Route>

        {/*教师*/}
        <Route path="/teacher">
            <IndexRoute component={TeacherIdex}/>
            <Route path="apply" component={Apply}/>
            <Route path="newclass"  component={Newclass}/>
            <Route path="timetable" component={TimeTable}/>
            <Route path="personalcen" component={PersonalCen}/>
            <Route path="classlist" component={ClassList}/>
            <Route path="classdetail">
                <IndexRoute component={ClassDetail}/>
                <Route path="manage"  component={AchiManage}/>
            </Route>
        </Route>
        {/*学生路由*/}
        <Route path="/student" >
            <IndexRoute component={Student}/>
            <Route path='chooseCourse' component={ChooseCourse}/>
            <Route path='selectedCourse' component={SelectedCourse}/>
            <Route path='grade' component={Grade}/>
            <Route path='me' component={Me}/>
            <Route path='courseDetail' component={CourseDetail}/>
        </Route>
    </Router>
    , document.getElementById('navigator'));