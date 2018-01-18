import React, {Component} from 'react'
import './AdministratorInfoAdd.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'

export default class AdministratorInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            administrator_id: '',
            administrator_name: '',
            administrator_tel: '',
            administrator_password: '',
            administrator_address: '',
        }
    }

    administrator_id_change(event) {
        this.setState({
            administrator_id: event.target.value
        });

    }

    administrator_name_change(event) {
        this.setState({
            administrator_name: event.target.value
        });

    }

    administrator_tel_change(event) {
        this.setState({
            administrator_tel: event.target.value
        });

    }

    administrator_password_change(event) {
        this.setState({
            administrator_password: event.target.value
        });

    }

    button1_change() {

    }

    /* button2_change(){
        this.setState({
            teacher_address:'12'
        });
    }*/
    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-md-2 col-lg-2">
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10 ">
                        <h3>添加管理员</h3>
                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_20px">
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>管理员编号</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入管理员编号"
                                                 value={this.state.administrator_id}
                                                 onChange={this.administrator_id_change.bind(this)}
                                    />

                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入姓名"
                                                 value={this.state.administrator_name}
                                                 onChange={this.administrator_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>联系方式&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入手机号码"
                                                 value={this.state.administrator_tel}
                                                 onChange={this.administrator_tel_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>登录密码&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入登录密码"
                                                 value={this.state.administrator_password}
                                                 onChange={this.administrator_password_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_50px"
                                    onClick={() => this.button1_change()} >添加</Button>
                            {/*<Button  bsStyle="success"  bsSize="large" className="t_i_a_button2" onClick={()=>this.button2_change()} block>修改</Button>*/}
                            <Form inline>
                                <FormGroup bsSize="large" className="">
                                    <ControlLabel><h4>管理员地址:&#12288;{this.state.administrator_address}</h4>
                                    </ControlLabel>

                                </FormGroup>
                            </Form>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}