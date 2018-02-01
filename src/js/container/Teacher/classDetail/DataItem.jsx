import React from 'react';
import './ListItem.css'
const DataItem = ({props,name,time,url,size,handleClick})=>{
	return(
		<div className="choose-course-list">
			<div className="choose-course-item">
                
				<a onClick={()=>{window.open(url)}}>{name}</a>
			</div>
			<div className="choose-course-item">
				{time}
			</div>
			<div className="choose-course-item">
				{size}
			</div>
			<div className="choose-course-item">
				<button style={{background:"#20b18a",color:'#fff',border:"none"}} onClick={handleClick}>
				删除
				</button>
			</div>
		</div>
	)
}

export default DataItem;