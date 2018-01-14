import React from 'react';
import './ListItem.css'
const ListItem = ({props,courseName,courseId,time,score,object,type,status,handleClick})=>{
	return(
		<div className="choose-course-list">
			<div className="choose-course-item">
				{courseName}
			</div>
			<div className="choose-course-item">
				{courseId}
			</div>
			<div className="choose-course-item">
				{time}
			</div>
			<div className="choose-course-item">
				{score}
			</div>
			<div className="choose-course-item">
				{object}
			</div>
			<div className="choose-course-item">
				{type}
			</div>
			<div className="choose-course-item"
			     style={{width:"60%"}} >
				{status?
					<button
						disabled={status!=1?'disabled':''}
						onClick={handleClick}
						style={{background:status==1?"#20b18a":'#aeaeae',color:'#fff',width:"60%",border:'none'}}>
						{status==1 ?'选课':(status==2?'已选':'已满')}
					</button>
					:
					""
				}
			</div>
		</div>
	)
}

export default ListItem;