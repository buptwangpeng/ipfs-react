import React, {Component} from 'react'
import './TeacherInfoModify.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Header from '../AdHeader/Header'
import Footer from '../AdFooter/Footer'
import NavSide from '../../../components/NavSide/NavSide'

export default class AdTeacherInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            teacher_id: '',
            teacher_name: '',
            teacher_address: '',
            teacher_password_log: '',
            teacher_password_unlock: '',
        }
    }

    teacher_id_change(event) {
        this.setState({
            teacher_id: event.target.value
        });

    }

    teacher_name_change(event) {
        this.setState({
            teacher_name: event.target.value
        });

    }

    teacher_address_change(event) {
        this.setState({
            teacher_address: event.target.value
        });

    }

    teacher_password_log_change(event) {
        this.setState({
            teacher_password_log: event.target.value
        });

    }

    teacher_password_unlock_change(event) {
        this.setState({
            teacher_password_unlock: event.target.value
        });

    }

    getValidationState() {
        const length = this.state.teacher_id.length;
        if (length > 10) return 'error';
        else if (length > 9) return 'success';
        else if (length > 0) return 'error';
    }

    button1_change() {
        if (this.state.teacher_id === '2013110121') {
            this.setState({
                teacher_name: '王五',
                teacher_address: '0x9ff58d30bd2c4b51c46e37217c5344e4bf81562e',
                teacher_password_log: '123456',
                teacher_password_unlock: '456789',
            });
        }
    }

    //单个添加按钮
    button2_change() {

    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <div style={{background: '#dcdcdc', width: '50%', height: '100%', margin: '0', padding: '0'}}>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 ">
                        <h3>教师信息查询与修改</h3>
                        <div className="te_mod_1">
                            <Form inline>
                                <FormGroup bsSize="large" controlId="formBasicText"
                                           validationState={this.getValidationState()}>
                                    <ControlLabel><h4>教师编号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入学号"
                                                 value={this.state.teacher_id}
                                                 onChange={this.teacher_id_change.bind(this)}
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
                                    <ControlLabel><h4>教师编号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.teacher_id}
                                                 onChange={this.teacher_id_change.bind(this)}
                                    />

                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.teacher_name}
                                                 onChange={this.teacher_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>地&#12288;&#12288;址&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.teacher_address}
                                                 onChange={this.teacher_address_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>登录密码&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.teacher_password_log}
                                                 onChange={this.teacher_password_log_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>解锁密码&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.teacher_password_unlock}
                                                 onChange={this.teacher_password_unlock_change.bind(this)}
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