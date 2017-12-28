import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import './AdHome.css'

export default class AdHome extends Component{

    render() {
        return (
            <div >
                <Jumbotron>
                    <h1>欢迎你，管理员!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle="primary">了解更多</Button></p>
                </Jumbotron>
            </div>
        )
    }
}
