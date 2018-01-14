import React from 'react';

const ListItem = ({props,handleClick,icon,title,abstract})=>{
	return(
		<div className="flexCenter body-item">
			<div
				onClick={handleClick}
				className="icon-container">
				<icon className="iconfont" style={{fontSize:'60px'}}>{icon}</icon>
			</div>
			<div className="sub-title">
				<p onClick={()=>{handleClick}}>
					{title}
				</p>
				<p>{abstract}</p>
			</div>
		</div>
	)
}

export default ListItem;