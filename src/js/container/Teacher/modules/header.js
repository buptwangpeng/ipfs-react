import React from 'react';
import {Button,FormGroup,FormControl,Navbar,NavbarBrand,NavbarHeader} from 'react-bootstrap';
import { Link } from 'react-router';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
    	return(
             <div className="Header">
                <h1><Link to="/">logo</Link></h1>
                <FormControl type="text" placeholder="Search" />
                <Button type="submit"><i className="icon-search"></i>搜索</Button>
                <span className="user"><i className="icon-user icon-large"></i>个人中心</span>
                <span className="quit"><i className="icon-signout icon-large"></i>退出</span>
             </div>
            
    		)
    }

   } 