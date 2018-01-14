import React, {Component} from 'react'
import './StudentInfoAdd.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import Header from '../AdHeader/Header'
import Footer from '../AdFooter/Footer'
import NavSide from '../../../components/NavSide/NavSide'

export default class AdStudentInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            student_name: '',
            student_class: '',
            student_grade: '',
            student_password: '',
            student_tel: '',
            //弹出框
            showModal: false,
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
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

    student_class_change(event) {
        this.setState({
            student_class: event.target.value
        });

    }

    student_grade_change(event) {
        this.setState({
            student_grade: event.target.value
        });

    }

    student_password_change(event) {
        this.setState({
            student_password: event.target.value
        });

    }

    student_tel_change(event) {
        this.setState({
            student_tel: event.target.value
        });

    }

    //批量添加按钮
    button1_change() {

    }

    //单个添加按钮
    button2_change() {

    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                {/*如果不加上面这个样式，最下边的版权栏会出现问题，待解惑*/}
                <Header/>
                <div className="row ">
                    <div className="col-md-4 col-lg-4">
                        <div style={{background: '#dcdcdc', width: '50%', height: '100%', margin: '0', padding: '0'}}>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-8  ">
                        <div className="row">
                            <div className="col-md-2 col-lg-2">
                                <h3>添加学生</h3>
                            </div>
                            <div className="col-md-2 col-lg-2  margin-top_20px">
                                <Button bsStyle="success" onClick={() => this.open()}>批量添加</Button>
                            </div>

                        </div>
                        <Modal show={this.state.showModal} onHide={() => this.close()}>
                            <Modal.Header closeButton>
                                <Modal.Title>批量添加界面</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>批量添加学生</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.close()}>关闭</Button>
                            </Modal.Footer>
                        </Modal>
                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className=" margin-top_20px">
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>学&#12288;&#12288;号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入学号"
                                                 value={this.state.student_id}
                                                 onChange={this.student_id_change.bind(this)}
                                    />

                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入姓名"
                                                 value={this.state.student_name}
                                                 onChange={this.student_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>班&#12288;&#12288;级&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入班级"
                                                 value={this.state.student_class}
                                                 onChange={this.student_class_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>年&#12288;&#12288;级&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入年级"
                                                 value={this.state.student_grade}
                                                 onChange={this.student_grade_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>登录密码&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入登录密码"
                                                 value={this.state.student_password}
                                                 onChange={this.student_password_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>联系方式&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入联系方式"
                                                 value={this.state.student_tel}
                                                 onChange={this.student_tel_change.bind(this)}
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