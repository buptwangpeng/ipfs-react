import React from 'react';
import './ListItem.css'
const ListItem = ({props,teacher_name,course_id,course_name,academy,grade,time,credit,mark_element,course_property,status,handleClick1,handleClick2})=>{
    return(
        <div className="choose-course-list">
            <div className="choose-course-item">
                {teacher_name}
            </div>
            <div className="choose-course-item">
                {course_id}
            </div>
            <div className="choose-course-item">
                {course_name}
            </div>
            <div className="choose-course-item">
                {academy}
            </div>
            <div className="choose-course-item">
                {grade}
            </div>
            <div className="choose-course-item">
                {time}
            </div>
            <div className="choose-course-item">
                {credit}
            </div>
            <div className="choose-course-item">
                {mark_element}
            </div>
            <div className="choose-course-item">
                {course_property}
            </div>
            <div className="choose-course-item"
                 style={{width:"80%"}} >
                {status?
                    <button
                        disabled={status!=1?'disabled':''}
                        onClick={handleClick1}
                        style={{background:status==1?"#20b18a":'#aeaeae',color:'#fff',width:"80%",border:'none'}}>
                        {status==1 ?'同意':(status==2?'已同意':'已拒绝')}
                    </button>
                    :
                    ""


                }
            </div>
            <div className="choose-course-item"
                 style={{width:"80%"}} >
                {status?
                    <button
                        disabled={status!=1?'disabled':''}
                        onClick={handleClick2}
                        style={{background:status==1?"#20b18a":'#aeaeae',color:'#fff',width:"80%",border:'none'}}>
                        {status==1 ?'拒绝':(status==2?'已同意':'已拒绝')}
                    </button>
                    :
                    ""


                }
            </div>
        </div>
    )
}

export default ListItem;