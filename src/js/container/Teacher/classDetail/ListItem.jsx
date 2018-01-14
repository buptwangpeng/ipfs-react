import React from 'react';
import './ListItem.css'
const ListItem = ({props,name,studentId,schedule,homework,score})=>{
	return(
		<div className="choose-course-list">
			<div className="choose-course-item">
				{name}
			</div>
			<div className="choose-course-item">
				{studentId}
			</div>
			<div className="choose-course-item">
				{schedule}
			</div>
			<div className="choose-course-item">
				{homework}
			</div>
			<div className="choose-course-item">
				{score}
			</div>
		</div>
	)
}

export default ListItem;