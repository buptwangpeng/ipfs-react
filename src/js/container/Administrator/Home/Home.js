import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import './Home.css'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'

export default class AdHome extends Component{
    constructor(){
        super();
        this.state={
            admin_name:localStorage.name,
        }
    }
    click(){
        alert("尚未开发，敬请期待")
    }

    render() {
        return (
            <div style={{background:'#eeeeee',paddingBottom:40}}>
                    <Header/>
                    <div className="row">
                        <div className="col-xs-3 col-md-2 ">
                            <div >
                                <NavSide/>
                            </div>
                        </div>

                        <div className="col-xs-9 col-md-10  ">
                            <Jumbotron  >
                                {/*Jumbotron默认颜色为eeeeee*/}
                                <h1>欢迎你，{this.state.admin_name}!</h1>
                                <p>管理员资讯</p>
                                <p><Button bsStyle="primary" onClick={()=>this.click()}>了解更多</Button></p>
                            </Jumbotron>
                        </div>
                </div>

                <Footer/>
            </div>
        )
    }
}
