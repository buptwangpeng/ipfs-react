import React, {Component} from 'react'
import './CourseInfoModify.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'

export default class AdCourseInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            course_id: '',//课程号
            course_name: '',//课程名称
            academy: '',//面向院系
            grade: '',//面向年级
            course_time: '',//开课时间
            credit: '',//学分
            mark_element: '',//成绩组成
            course_property: '',//课程属性
        }
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

    getValidationState() {
        const length = this.state.course_id.length;
        if (length > 3) return 'error';
        else if (length > 2) return 'success';
        else if (length > 0) return 'error';
    }

    button1_change() {
        if (this.state.course_id === '001') {
            this.setState({
                course_name: '通信原理',//课程名称
                academy: '信通院',//面向院系
                grade: '大三',//面向年级
                course_time: '第一学期',//开课时间
                credit: '5',//学分
                mark_element: '100%期末',//成绩组成
                course_property: '必修',//课程属性
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
                    <div className="col-md-2 col-lg-2">
                        <div style={{background: '#dcdcdc', width: '100%', height:window.innerHeight-100, margin: '0', padding: '0'}}>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10">

                        <h3>课程信息查询与修改</h3>
                        <div className="margin-top_20px">
                            <Form inline>
                                <FormGroup bsSize="large" controlId="formBasicText"
                                           validationState={this.getValidationState()}>
                                    <ControlLabel><h4>课程编号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入课程编号"
                                                 value={this.state.course_id}
                                                 onChange={this.course_id_change.bind(this)}
                                    />
                                </FormGroup>
                                &#12288;<Button bsStyle="success" bsSize="large" onClick={() => this.button1_change()}>查询</Button>
                            </Form>
                        </div>

                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_50px">
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>课程编号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.course_id}
                                                 onChange={this.course_id_change.bind(this)}
                                    />

                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>课程名称&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.course_name}
                                                 onChange={this.course_name_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>面向院系&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.academy}
                                                 onChange={this.academy_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>面向年级&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.grade}
                                                 onChange={this.grade_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>开课时间&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.course_time}
                                                 onChange={this.course_time_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>学&#12288;&#12288;分&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.credit}
                                                 onChange={this.credit_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>成绩组成&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 value={this.state.mark_element}
                                                 onChange={this.mark_element_change.bind(this)}
                                    />
                                </FormGroup>
                            </Form>
                            <Form inline>
                                <FormGroup bsSize="large">
                                    <ControlLabel><h4>课程属性&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
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