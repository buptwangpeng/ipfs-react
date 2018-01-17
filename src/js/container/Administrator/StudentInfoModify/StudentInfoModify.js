import React, {Component} from 'react'
import './StudentInfoModify.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {ButtonToolbar} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'


export default class AdStudentInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            student_name: '',
            student_address: '',
            student_password_log: '',
            student_password_unlock: '',
        }
    }

    student_id_change(event) {
        this.setState({
            student_id: event.target.value
        });

    }

    student_name_change(event) {
        this.setState({
            student_name: event.target.value
        });

    }

    student_address_change(event) {
        this.setState({
            student_address: event.target.value
        });

    }

    student_password_log_change(event) {
        this.setState({
            student_password_log: event.target.value
        });

    }

    student_password_unlock_change(event) {
        this.setState({
            student_password_unlock: event.target.value
        });

    }

    getValidationState() {
        const length = this.state.student_id.length;
        if (length > 10) return 'error';
        else if (length > 9) return 'success';
        else if (length > 0) return 'error';
    }

    button1_change() {
        if (this.state.student_id === "2017140013") {
            this.setState({
                student_name: '王鹏',
                student_address: '0xedb34309886a90b3fdd288434195eaa32ca3d401',
                student_password_log: '123456',
                student_password_unlock: '456789',
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
                <div className="row ">
                    <div className="col-md-2 col-lg-2">
                        <div style={{background: '#dcdcdc', width: '100%', height:window.innerHeight-100, margin: '0', padding: '0'}}>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10  ">
                        <div className="row ">
                            <div className="">
                        <div className="">
                            <h3>学生信息查询与修改</h3>
                        </div>


                            <div className="col-md-12 col-lg-12 st_mod_1">
                                <Form inline>
                                    <FormGroup bsSize="large" controlId="formBasicText"
                                               validationState={this.getValidationState()}>
                                        <ControlLabel><h4>学生学号&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="请输入学号"
                                                     value={this.state.student_id}
                                                     onChange={this.student_id_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                                <div className="margin-left_10px">
                                    <Button bsStyle="success" bsSize="large"
                                            onClick={() => this.button1_change()}>查询</Button>
                                </div>
                            </div>


                            {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                            <div className="col-md-12 col-lg-12 margin-top_50px">
                                <Form inline>
                                    <FormGroup bsSize="large">
                                        <ControlLabel><h4>学&#12288;&#12288;号&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     value={this.state.student_id}
                                                     onChange={this.student_id_change.bind(this)}
                                        />

                                    </FormGroup>
                                </Form>
                                <Form inline>
                                    <FormGroup bsSize="large">
                                        <ControlLabel><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     value={this.state.student_name}
                                                     onChange={this.student_name_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                                <Form inline>
                                    <FormGroup bsSize="large">
                                        <ControlLabel><h4>地&#12288;&#12288;址&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     value={this.state.student_address}
                                                     onChange={this.student_address_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                                <Form inline>
                                    <FormGroup bsSize="large">
                                        <ControlLabel><h4>登录密码&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     value={this.state.student_password_log}
                                                     onChange={this.student_password_log_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                                <Form inline>
                                    <FormGroup bsSize="large">
                                        <ControlLabel><h4>解锁密码&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     value={this.state.student_password_unlock}
                                                     onChange={this.student_password_unlock_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                                <Button bsStyle="success" bsSize="large" className=" width_50 margin-top_50px"
                                        onClick={() => this.button2_change()} >提交</Button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}