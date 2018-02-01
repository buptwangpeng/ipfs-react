/**
 * Created by henry on 2017/12/28.
 */
import React from 'react';
import './ListItem.css'
const ListItem = ({props,courseName,courseId,courseType,teacherName,teacherTel,teacherEmail,time,credit, mark_element,abstract,status,handleClick})=>{
	return(
		<div className="choose-course-list">
			<div className="choose-course-item">
				{courseName}
			</div>
			<div className="choose-course-item">
				{courseId}
			</div>
			<div className="choose-course-item">
				{courseType}
			</div>
			<div className="choose-course-item">
                {mark_element}
			</div>
			<div className="choose-course-item">
				{teacherName}
			</div>
			<div className="choose-course-item">
                {teacherTel}
			</div>
			<div className="choose-course-item">
                {teacherEmail}
			</div>
			<div className="choose-course-item">
				{time}
			</div>
			<div className="choose-course-item">
				{credit}
			</div>
			<div className="choose-course-item">
                {abstract}
			</div>
			<div className="choose-course-item"
			     style={{width:"70%"}} >
				{status==0||status==1?
					<button
						disabled={status!=0?'disabled':''}
						onClick={handleClick}
						style={{background:status==0?"#20b18a":'#aeaeae',color:'#fff',width:"60%",border:'none'}}>
						{status==0?'选课':(status==1?'已选':'已满')}
					</button>
					:
					""
				}
			</div>
		</div>
	)
}

export default ListItem;