import React from 'react';

const ListItem = ({props,name,time,location})=>{
	return(
		<div className="choose-course-list">
			<div className="choose-course-item">
                {name}
			</div>
			<div className="choose-course-item">
				{time}
			</div>
			<div className="choose-course-item">
				{location}
			</div>
		</div>
	)
}

export default ListItem;