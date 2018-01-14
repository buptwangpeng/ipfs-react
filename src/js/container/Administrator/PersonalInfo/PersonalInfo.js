import React, {Component} from 'react'
import './PersonalInfo.css'
import Header from '../AdHeader/Header'
import Footer from '../AdFooter/Footer'

export default class PersonalInfo extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
            <div style={{background: '#ffffff', height: window.innerHeight-170}}>
                <h3>个人信息</h3>
            </div>
                <Footer/>
            </div>
        )
    }
}