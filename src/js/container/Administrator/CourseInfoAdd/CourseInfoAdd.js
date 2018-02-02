import React, {Component} from 'react'
import './CourseInfoAdd.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'

export default class AdCourseInfoAdd extends Component {
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
            tip:'',//是否添加成功
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

    //添加
    button1_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/course/info/add/';//接口的地址

        let param = {
            course: {
                course_id:this.state.course_id,//课程号
                course_name:this.state.course_name,//课程名称
                academy:this.state.academy,//面向院系
                grade:this.state.grade,//面向年级
                course_time:this.state.course_time,//开课时间
                credit:this.state.credit,//学分
                mark_element:this.state.mark_element,//成绩组成
                course_property:this.state.course_property,//课程属性
            }
        };

        admin.addCourse(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            if(response.meta.message=="ok"){
                self.setState({
                    tip:"该课程信息添加成功"
                })
            }else{
                self.setState({
                    tip:"该课程信息添加失败"
                })
            }
        });
    }

    render() {
        return (
            <div style={{background: '#ffffff',paddingBottom:40}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-10 col-lg-10">
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
                                <h4>目前尚未开发，敬请期待</h4>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.close()}>关闭</Button>
                            </Modal.Footer>
                        </Modal>
                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_20px">
                            <AdInput
                                title="课程编号&#12288;"
                                placeholder="请输入课程编号"
                                value={this.state.course_id}
                                onChange={this.course_id_change.bind(this)}
                            />
                            <AdInput
                                title="课程名称&#12288;"
                                placeholder="请输入课程名称"
                                value={this.state.course_name}
                                onChange={this.course_name_change.bind(this)}
                            />
                            <AdInput
                                title="面向院系&#12288;"
                                placeholder="请输入面向院系"
                                value={this.state.academy}
                                onChange={this.academy_change.bind(this)}
                            />
                            <AdInput
                                title="面向年级&#12288;"
                                placeholder="请输入面向年级"
                                value={this.state.grade}
                                onChange={this.grade_change.bind(this)}
                            />
                            <AdInput
                                title="开课时间&#12288;"
                                placeholder="请输入开课时间"
                                value={this.state.course_time}
                                onChange={this.course_time_change.bind(this)}
                            />
                            <AdInput
                                title="学&#12288;&#12288;分&#12288;"
                                placeholder="请输入学分"
                                value={this.state.credit}
                                onChange={this.credit_change.bind(this)}
                            />
                            <AdInput
                                title="成绩组成&#12288;"
                                placeholder="请输入成绩组成"
                                value={this.state.mark_element}
                                onChange={this.mark_element_change.bind(this)}
                            />
                            <AdInput
                                title="课程属性&#12288;"
                                placeholder="请输入课程属性"
                                value={this.state.course_property}
                                onChange={this.course_property_change.bind(this)}
                            />

                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_50px"
                                    onClick={() => this.button1_change()} >提交</Button>
                            <Form inline>
                                <FormGroup bsSize="large" className="">
                                    <ControlLabel ><h4>{this.state.tip}</h4></ControlLabel>

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