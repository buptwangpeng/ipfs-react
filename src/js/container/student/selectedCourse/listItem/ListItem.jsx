/**
 * Created by henry on 2017/12/28.
 */

import React from 'react';
import './ListItem.css';

const ListItem = ({props,handleClick,title,progress,teacher,time})=>{
	return(
		<div className="selected-item">
			<div onClick={handleClick} className="item-logo">
				<icon className="iconfont" style={{fontSize:100,color:'#b3c0d1'}}>&#xe640;</icon>
				<div className="progress" style={{width:'60%',margin:'0 auto',height:18}}>
					<div
						className="progress-bar"
						role="progressbar"
						aria-valuenow={progress*100}
						aria-valuemin="0"
						aria-valuemax="100"
						style={{width:progress*100+"%",background:'#20b18a'}}>
						{progress*100+"%"}
					</div>
				</div>
			</div>
			<div className="item-title">
				{title+'，'+teacher}
			</div>
			<div className="item-time">
				<p>{time.split(',')[0]}</p>
				<p>{time.split(',')[1]}</p>
			</div>
		</div>
	)
};

export default ListItem;