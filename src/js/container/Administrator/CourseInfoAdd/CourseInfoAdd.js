import React, {Component} from 'react'
import './CourseInfoAdd.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import Header from '../AdHeader/Header'
import Footer from '../AdFooter/Footer'
import NavSide from '../../../components/NavSide/NavSide'

export default class AdCourseInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            teacher_name: '',//申请教师
            course_id: '',//课程号
            course_name: '',//课程名称
            academy: '',//面向院系
            grade: '',//面向年级
            course_time: '',//开课时间
            credit: '',//学分
            mark_element: '',//成绩组成
            course_property: '',//课程属性
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

    course_id_change(event) {
        this.setState({
            course_id: event.target.value
        });

    }

    course_name_change(event) {
        this.setState({
            course_name: event.target.value
        });

    }

    academy_change(event) {
        this.setState({
            academy: event.target.value
        });

    }

    grade_change(event) {
        this.setState({
            grade: event.target.value
        });

    }

    teacher_name_change(event) {
        this.setState({
            teacher_name: event.target.value
        });

    }

    course_time_change(event) {
        this.setState({
            course_time: event.target.value
        });

    }

    credit_change(event) {
        this.setState({
            credit: event.target.value
        });

    }

    mark_element_change(event) {
        this.setState({
            mark_element: event.target.value
        });

    }

    course_property_change(event) {
        this.setState({
            course_property: event.target.value
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
                <Header/>
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <div style={{background: '#dcdcdc', width: '50%', height: '100%', margin: '0', padding: '0'}}>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-md-2 col-lg-2">
                                <h3>添加课程</h3>
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
                                <h4>批量添加课程</h4>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.close()}>关闭</Button>
                            </Modal.Footer>
                        </Modal>
                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_20px">
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>课程编号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入课程编号"
                                                 value={this.state.course_id}
                                                 onChange={this.course_id_change.bind(this)}
                                    />

                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>课程名称&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入课程名称"
                                                 value={this.state.course_name}
                                                 onChange={this.course_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>面向院系&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入面向院系"
                                                 value={this.state.academy}
                                                 onChange={this.academy_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>面向年级&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入面向年级"
                                                 value={this.state.grade}
                                                 onChange={this.grade_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>任课教师&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入任课教师"
                                                 value={this.state.teacher_name}
                                                 onChange={this.teacher_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>开课时间&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入开课时间"
                                                 value={this.state.course_time}
                                                 onChange={this.course_time_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>学&#12288;&#12288;分&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入学分"
                                                 value={this.state.credit}
                                                 onChange={this.credit_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>成绩组成&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入成绩组成"
                                                 value={this.state.mark_element}
                                                 onChange={this.mark_element_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>课程属性&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入课程属性"
                                                 value={this.state.course_property}
                                                 onChange={this.course_property_change.bind(this)}
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