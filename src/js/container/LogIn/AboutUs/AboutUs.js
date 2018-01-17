import React, {Component} from 'react'
import './AboutUs.css'
import UsHeader from './UsHeader'
import Footer from '../../../components/AdFooter/Footer'

export default class AboutUs extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <UsHeader/>
                <div style={{background: '#ffffff', height: window.innerHeight-170}}>
                    <h3>AboutUs</h3>
                </div>
                <Footer/>
            </div>
        )
    }
}