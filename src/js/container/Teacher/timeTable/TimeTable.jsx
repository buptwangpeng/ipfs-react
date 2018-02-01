import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './TimeTable.css';
import ListItem from './ListItem.jsx';
export default class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          timelists:[{name:"通信原理",courseId:"1231",time:"周一 8：00~10：00",location:"201"},
                    {name:"移动通信",courseId:"1232",time:"周三 13：30~15：30",location:"501"},
                    {name:"信息论",courseId:"1233",time:"周四 10：10~12：00",location:"407"},
                    {name:"计算机网络",courseId:"1234",time:"周五 15：50~17：30",location:"403"}
                   ]
        }
    }
    render(){
    	return(
             <div className="timetable">
                <Header title="我的课表"/>
                <ListItem 
                name="课程名称"
                time="上课时间"
                location="上课地点"/>
                {
                 this.state.timelists.map((timelist,index)=>{
                    return(
                      <ListItem
                        key={timelist.courseId}
                        name={timelist.name}
                        time={timelist.time}
                        location={timelist.location} />
                      )  
                 }
                 )
                }
                <Footer/>                 
             </div>
            
    		)
    }

   } 