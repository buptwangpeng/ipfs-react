import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import './Home.css'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'

export default class AdHome extends Component{

    render() {
        return (
            <div style={{background:'#eeeeee',height:window.innerHeight}}>
                {/*上面这个样式有什么用？获取窗口的高度 有什么意义*/}

                    <Header/>


                    <div className="row">
                        <div className="col-md-4 ">
                            <div style={{background: '#dcdcdc', width: '50%', height: '100%', margin: '0', padding: '0'}}>
                                {/*内联样式style={{}}和className=''不能写在一个div中*/}
                                <NavSide/>
                            </div>
                        </div>

                        <div className="col-md-8  ">
                            <Jumbotron  >
                                {/*Jumbotron默认颜色为eeeeee*/}
                                <h1>欢迎你，王鹏!</h1>
                                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                <p><Button bsStyle="primary">了解更多</Button></p>
                            </Jumbotron>
                        </div>
                </div>

                <Footer/>
            </div>
        )
    }
}
