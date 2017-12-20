import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Check from './test0';
import LogIn  from './container/LogIn/LogIn'
import StMain  from './container/Student/StMain/StMain'
import TeMain  from './container/Teacher/TeMain/TeMain'
import AdMain  from './container/Administrator/AdMain/AdMain'
import AdHome  from './container/Administrator/AdHome/AdHome'
import AdStudentInfoAdd from './container/Administrator/AdStudentInfoAdd/AdStudentInfoAdd'
import AdStudentInfoModify from './container/Administrator/AdStudentInfoModify/AdStudentInfoModify'
import AdStudentInfoScore from './container/Administrator/AdStudentInfoScore/AdStudentInfoScore'
import AdTeacherInfoAdd from './container/Administrator/AdTeacherInfoAdd/AdTeacherInfoAdd'
import AdTeacherInfoModify from './container/Administrator/AdTeacherInfoModify/AdTeacherInfoModify'
import AdTeacherInfoCourseApply from './container/Administrator/AdTeacherInfoCourseApply/AdTeacherInfoCourseApply'
import AdCourseInfoAdd  from './container/Administrator/AdCourseInfoAdd/AdCourseInfoAdd'
import AdCourseInfoModify from './container/Administrator/AdCourseInfoModify/AdCourseInfoModify'
import AdAdministratorInfoAdd from './container/Administrator/AdAdministratorInfoAdd/AdAdministratorInfoAdd'
import AdAdministratorInfoModify from './container/Administrator/AdAdministratorInfoModify/AdAdministratorInfoModify'

//teacher
import './app/js/container/Teacher/style/1.css';
import App from './app/js/container/Teacher/modules/App';
import Apply from './app/js/container/Teacher/modules/Apply';
import Newclass from './app/js/container/Teacher/modules/newclass';
import ClassOne from './app/js/container/Teacher/modules/classone';
import AchiManage from './app/js/container/Teacher/modules/achimanage';
//render(<Check source="http://localhost:3000/list"/>, document.getElementById('root'));
render((
    <Router history={hashHistory}>
        <Route path="/" component={LogIn}/>
        <Route path="/administrator" component={AdMain}>
            <IndexRoute component={AdHome}/>
            <Route path="/administrator/ad_student_info/ad_student_info_add" component={AdStudentInfoAdd}/>
            <Route path="/administrator/ad_student_info/ad_student_info_modify" component={AdStudentInfoModify}/>
            <Route path="/administrator/ad_student_info/ad_student_info_score_export" component={AdStudentInfoScore}/>
            <Route path="/administrator/ad_teacher_info/ad_teacher_info_add" component={AdTeacherInfoAdd}/>
            <Route path="/administrator/ad_teacher_info/ad_teacher_info_modify" component={ AdTeacherInfoModify}/>
            <Route path="/administrator/ad_teacher_info/ad_teacher_info_course_apply" component={AdTeacherInfoCourseApply}/>
            <Route path="/administrator/ad_course_info/ad_course_info_add" component={AdCourseInfoAdd }/>
            <Route path="/administrator/ad_course_info/ad_course_info_modify" component={AdCourseInfoModify}/>
            <Route path="/administrator/ad_administrator_info/ad_administrator_info_add" component={AdAdministratorInfoAdd}/>
            <Route path="/administrator/ad_administrator_info/ad_administrator_info_modify" component={AdAdministratorInfoModify}/>
        </Route>
        <Route path="/teacher" component={AdMain}>
            <IndexRoute component={App}/>
            <Route path="/apply" component={Apply}/>
            <Route path="/newclass"  component={Newclass}/>
            <Route path="/classone"  component={ClassOne}/>
            <Route path="/classone/manage"  component={AchiManage}/>
        </Route>

    </Router>
), document.getElementById('root'));