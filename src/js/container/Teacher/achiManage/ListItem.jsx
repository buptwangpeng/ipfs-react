import React from 'react';




const ListItem = ({props,name,studentId,usualGrade,homework,total,handleClick,handleusual,handlehomework,handletotal,display})=>{
	return(
		<div className="choose-course-list">
			<div className="choose-course-item" >
				{name}
			</div>
			<div className="choose-course-item">
				{studentId}
			</div>
			<div className="choose-course-item">				
			 {  
				usualGrade==''? <input id={studentId+'usualGrade'} style={{width:'60px'}}
                 onChange={handleusual}
				/>:usualGrade
			 }
			</div>
			<div className="choose-course-item">
			   {
					homework==''?<input id={studentId+'homework'} style={{width:'60px'}}
                 onChange={handlehomework}
				/>:homework
			   }				
			</div>
			<div className="choose-course-item">
			   {
					total==''?<input id={studentId} style={{width:'60px'}}
                 onChange={handletotal}
				/>:total
			   }
			</div>
			<div className="choose-course-item" style={{width:"60%"}} >
			   {display?<button style={{background:"#20b18a",color:'#fff',width:"60%",border:'none'}}
			                    onClick={handleClick}>保存
			         </button>:''}
			</div>
		</div>
	)
}

export default ListItem;