
import {
    Router,
    IndexRoute,
    Route,
    IndexRedirect,
    browserHistory}    from 'react-router';
import ReactDOM             from 'react-dom';
import React                from 'react';
import LogIn  from './container/Login/Login.jsx';
//管理员
import AdMain  from './container/Administrator/AdMain/AdMain.js'
import AdHome  from './container/Administrator/AdHome/AdHome'
import AdStudentInfoAdd from './container/Administrator/AdStudentInfoAdd/AdStudentInfoAdd.js'
import AdStudentInfoModify from './container/Administrator/AdStudentInfoModify/AdStudentInfoModify'
import AdStudentInfoScore from './container/Administrator/AdStudentInfoScore/AdStudentInfoScore'
import AdTeacherInfoAdd from './container/Administrator/AdTeacherInfoAdd/AdTeacherInfoAdd'
import AdTeacherInfoModify from './container/Administrator/AdTeacherInfoModify/AdTeacherInfoModify'
import AdTeacherInfoCourseApply from './container/Administrator/AdTeacherInfoCourseApply/AdTeacherInfoCourseApply'
import AdCourseInfoAdd  from './container/Administrator/AdCourseInfoAdd/AdCourseInfoAdd'
import AdCourseInfoModify from './container/Administrator/AdCourseInfoModify/AdCourseInfoModify'
import AdAdministratorInfoAdd from './container/Administrator/AdAdministratorInfoAdd/AdAdministratorInfoAdd'
import AdAdministratorInfoModify from './container/Administrator/AdAdministratorInfoModify/AdAdministratorInfoModify'


//老师
import './container/Teacher/style/1.css';
import Teacher from './container/Teacher/modules/Teacher.jsx';
import Apply from './container/Teacher/modules/apply.js';
import Newclass from './container/Teacher/modules/newclass.js';
import ClassOne from './container/Teacher/modules/classone.js';
import AchiManage from './container/Teacher/modules/achimanage.js';

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
	        {/*管理员*/}
	        <Route path="/" component={LogIn}/>
	        <Route path="/admin" >
		        <IndexRoute component={AdMain}/>
		        <Route path="student">
			        <IndexRoute component={AdStudentInfoAdd}/>
			        <Route path="add" component={AdStudentInfoAdd}/>
			        <Route path="modify" component={AdStudentInfoModify}/>
			        <Route path="export" component={AdStudentInfoScore}/>
		        </Route>
		        <Route path="teacher">
			        <Route path="add" component={AdTeacherInfoAdd}/>
			        <Route path="modify" component={ AdTeacherInfoModify}/>
			        <Route path="courseapply" component={AdTeacherInfoCourseApply}/>
		        </Route>
		        <Route path="course">
			        <IndexRedirect to="/admin/course/add"/>
			        <Route path="add" component={AdCourseInfoAdd }/>
			        <Route path="modify" component={AdCourseInfoModify}/>
		        </Route>
		        <Route path="administrator">
			        <Route path="add" component={AdAdministratorInfoAdd}/>
			        <Route path="modify" component={AdAdministratorInfoModify}/>
		        </Route>

	        </Route>

	        {/*教师*/}
	        <Route path="/teacher">
		        <IndexRoute component={Teacher}/>
		        <Route path="apply" component={Apply}/>
		        <Route path="newclass"  component={Newclass}/>
		        <Route path="classone">
			        <IndexRoute component={ClassOne}/>
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
