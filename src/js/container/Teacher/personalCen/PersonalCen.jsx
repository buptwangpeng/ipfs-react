import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import {Table,Pagination} from 'react-bootstrap';
import './PersonalCen.css';
export default class PersonalCen extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
    	return(
             <div className="personal">
                <Header title="个人中心"/>
                <Table striped bordered condensed hover id="personalinfor">
                  <tbody>
                     <tr>
                       <td>姓名</td>
                       <td>XX老师</td>
                     </tr>
                     <tr>
                       <td>学工号</td>
                       <td>123456</td>
                     </tr>
                     <tr>
                       <td>联系电话</td>
                       <td>1234567890</td>
                     </tr>
                     <tr>
                       <td>电子邮箱</td>
                       <td>123456@163.com</td>
                     </tr>  
                  </tbody>
                </Table>       
                <Footer/>
             </div>
            
    		)
    }

   } 