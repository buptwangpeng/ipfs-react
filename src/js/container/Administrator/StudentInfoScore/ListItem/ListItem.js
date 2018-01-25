import React from 'react';
import './ListItem.css'
const ListItem = ({props,course_credit,course_name,course_semester,course_property,course_mark})=>{
    return(
        <div className="choose-course-list">
            <div className="choose-course-item">
                {course_name}
            </div>
            <div className="choose-course-item">
                {course_semester}
            </div>
            <div className="choose-course-item">
                {course_property}
            </div>
            <div className="choose-course-item">
                {course_credit}
            </div>
            <div className="choose-course-item">
                {course_mark}
            </div>

        </div>
    )
}

export default ListItem;