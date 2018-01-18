import React, {Component} from 'react'
import './AdministratorInfoModify.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'

export default class AdAdministratorInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            administrator_id: '',
            administrator_name: '',
            administrator_tel: '',
            administrator_address: '',
            administrator_password_log: '',
            administrator_password_unlock: '',
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

    administrator_address_change(event) {
        this.setState({
            administrator_address: event.target.value
        });

    }

    administrator_password_log_change(event) {
        this.setState({
            administrator_password_log: event.target.value
        });

    }

    administrator_password_unlock_change(event) {
        this.setState({
            administrator_password_unlock: event.target.value
        });

    }

    getValidationState() {
        const length = this.state.administrator_id.length;
        if (length > 10) return 'error';
        else if (length > 9) return 'success';
        else if (length > 0) return 'error';
    }

    button1_change() {
        if (this.state.administrator_id === '2017140013') {
            this.setState({
                administrator_name: '王五',
                administrator_address: '0x9ff58d30bd2c4b51c46e37217c5344e4bf81562e',
                administrator_password_log: '123456',
                administrator_password_unlock: '456789',
            });
        }
    }

    //单个添加按钮
    button2_change() {

    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                {/*innerheight	返回窗口的文档显示区的高度*/}
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

                        <h3>管理员信息查询与修改</h3>
                        <div className="ad_mod_1">
                            <Form inline>
                                <FormGroup bsSize="large" controlId="formBasicText"
                                           validationState={this.getValidationState()}>
                                    <ControlLabel><h4>管理员编号</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入学号"
                                                 value={this.state.administrator_id}
                                                 onChange={this.administrator_id_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Button bsStyle="success" bsSize="large" className="margin-left_10px"
                                    onClick={() => this.button1_change()}>查询</Button>
                        </div>

                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_50px">
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>管理员编号</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.administrator_id}
                                                 onChange={this.administrator_id_change.bind(this)}
                                    />

                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.administrator_name}
                                                 onChange={this.administrator_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>联系方式&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.administrator_tel}
                                                 onChange={this.administrator_tel_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>地&#12288;&#12288;址&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.administrator_address}
                                                 onChange={this.administrator_address_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>登录密码&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.administrator_password_log}
                                                 onChange={this.administrator_password_log_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>解锁密码&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.administrator_password_unlock}
                                                 onChange={this.administrator_password_unlock_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_50px"
                                    onClick={() => this.button2_change()} >提交</Button>
                        </div>


                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}