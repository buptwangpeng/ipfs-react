import React from 'react';
import './ListItem.css';

const ListItem = ({props,handleClick,title})=>{
	return(
		<div className="selected-item">
			<div onClick={handleClick} className="item-logo">
				<icon className="iconfont" style={{fontSize:100,color:'#b3c0d1'}}>&#xe640;</icon>
			</div>
			<div className="item-title">
				{title}
			</div>
		</div>
	)
};

export default ListItem;