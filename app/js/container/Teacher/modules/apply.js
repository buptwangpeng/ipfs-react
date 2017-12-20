import React from 'react';
import Header from './header'
import Footer from './footer'
import {Table,Pagination} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Apply extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

        	<div className="apply">
              <Header/>
              <div className="headerun"></div>
              <span className="headeropen">开课申请</span>
              <div id="applylink"></div>
              <span id="applywrite">可申请课程</span>
              <div id="newclasslink"></div>
              <span id="newclasswrite"><Link to="/newclass">申请新课</Link></span>
              <Table striped bordered condensed hover>
                <thead>
                    <tr>
                       <th>课程名称</th>
                       <th>课程编号</th>
                       <th>开课时间</th>
                       <th>学分</th>
                       <th>面向对象</th>
                       <th>课程属性</th>
                       <th>状态</th>
                    </tr>
                 </thead>    
                <tbody>
                    <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                    <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                    <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                    <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                    <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                     <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                     <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                     <tr>
                       <td>通信原理实验</td>
                       <td>12345678</td>
                       <td>2016-2017/2</td>
                       <td>1</td>
                       <td>信通院/大二</td>
                       <td>必修</td>
                       <td>申请</td>
                    </tr>
                </tbody>
              </Table>
              
              <Footer/>
            </div>
                );
    }
}