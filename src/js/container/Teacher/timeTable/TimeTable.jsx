import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './TimeTable.css';

export default class TimeTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
    	return(
             <div className="timetable">
                <Header title="我的课表"/>
                <table >
                <tbody>
                <tr >
                   <th >节次</th>
                   <th  >上课时间</th>
                   <th  >周日</th>
                   <th  >周一</th>
                   <th  >周二</th>
                   <th  >周三</th>
                   <th  >周四</th>
                   <th  >周五</th>
                   <th >周六</th>
                </tr>
                <tr  >
                   <td >1</td>
                   <td rowSpan="1">8:00-8:45</td>
                   <td rowSpan="13" ></td>
                   <td rowSpan="5"></td>
                   <td rowSpan="2" id="web">WEB应用技术<br/>@301</td>
                   <td rowSpan="2"></td>
                   <td rowSpan="2" id="database">数据库原理<br/>@407</td>
                   <td rowSpan="2"></td>
                   <td rowSpan="2"></td>
                </tr>  
                <tr  >
                   <td>2</td>
                   <td rowSpan="1">8:55-9:40</td>
                </tr>
                <tr >
                   <td>3</td>
                   <td rowSpan="1">10:00-10:45</td>
                   <td rowSpan="3"></td>
                   <td rowSpan="2" id="computer">计算机网络<br/>@202</td>
                   <td rowSpan="2" ></td>
                   <td rowSpan="2" ></td>
                   <td rowSpan="2" ></td>
                </tr>
                <tr >
                   <td>4</td>
                   <td rowSpan="1">10:55-11:40</td>
                </tr>
                <tr >
                   <td>5</td>
                   <td rowSpan="1">11:50-12:35</td>
                   <td rowSpan="3"></td>
                   <td rowSpan="1"></td>
                   <td rowSpan="3"></td>
                   <td rowSpan="1" ></td>
                </tr>
                <tr >
                   <td>6</td>
                   <td rowSpan="1">14:00-14:45</td>
                   <td rowSpan="2" id="computer">计算机网络<br/>@202</td>
                   <td rowSpan="2" id="database">数据库原理<br/>@407</td>
                   <td rowSpan="2" id="algorithm">算法设计与分析<br/>@208</td>
                   <td rowSpan="2" ></td>
                </tr>
                <tr >
                   <td>7</td>
                   <td rowSpan="1">14:55-15:40</td>
                </tr>
                <tr >
                   <td>8</td>
                   <td rowSpan="1">16:00-16:45</td>
                   <td rowSpan="3"></td>
                   <td rowSpan="3" ></td>
                   <td rowSpan="3" ></td>
                   <td rowSpan="3" ></td>
                   <td rowSpan="3" ></td>
                   <td rowSpan="3" ></td>
                </tr>
                <tr >
                   <td>9</td>
                   <td rowSpan="1">16:55-17:40</td>
                </tr>
                <tr >
                   <td>0</td>
                   <td rowSpan="1">17:50-18:35</td>
                </tr>
                <tr >
                   <td>A</td>
                   <td rowSpan="1">19:20-20:05</td>
                   <td rowSpan="2" id="software">软件案例分析<br/>@304</td>
                   <td rowSpan="3"></td>
                   <td rowSpan="3"></td>
                   <td rowSpan="3" ></td>
                   <td rowSpan="3" ></td>
                   <td rowSpan="3" ></td>
                </tr>
                <tr >
                   <td>B</td>
                   <td rowSpan="1">20:15-21:00</td>
                </tr>
                <tr >
                   <td>C</td>
                   <td rowSpan="1">21:10-21:55</td>
                   <td rowSpan="1" ></td>
                </tr>
             </tbody>
             </table>      
             <Footer/>
             </div>
            
    		)
    }

   } 