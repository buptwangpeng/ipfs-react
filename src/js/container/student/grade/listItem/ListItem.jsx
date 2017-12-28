/**
 * Created by henry on 2017/12/28.
 */
import React from 'react';
import './ListItem.css';

const ListItem = ({props,courseName,courseId,courseType,teacher,time,color,score,grade,handleClick})=>{
	return(
		<div className="grade-list">
			<a onClick={handleClick} className="grade-item" style={{color:color||''}}>
				{courseName}
			</a>
			<div className="grade-item">
				{courseId}
			</div>
			<div className="grade-item">
				{courseType}
			</div>
			<div className="grade-item">
				{teacher}
			</div>
			<div className="grade-item">
				{time}
			</div>
			<div className="grade-item">
				{score}
			</div>
			<div className="grade-item">
				{grade}
			</div>
		</div>
	)
}

export default ListItem;