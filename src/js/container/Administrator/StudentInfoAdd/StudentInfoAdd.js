import React, {Component} from 'react'
import './StudentInfoAdd.css'
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'


export default class AdStudentInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            student_name: '',
            student_gender: '',//male/female
            student_class: '',
            student_grade: '',
            student_major: '',//专业
            student_school: '',
            student_password_log: '',//学生登录本系统的登录密码
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

    student_gender_change(event) {
        this.setState({
            student_gender: event.target.value
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

    student_school_change(event) {
        this.setState({
            student_school: event.target.value
        });

    }

    student_password_log_change(event) {
        this.setState({
            student_password_log: event.target.value
        });

    }

    student_major_change(event) {
        this.setState({
            student_major: event.target.value
        });

    }


    //单个添加按钮
    button1_change() {
        // let self = this;
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        let param = {
            student: {
                student_id:this.state.student_id,//学号
                student_name:this.state.student_name,
                student_gender:this.state.student_gender,//male/female
                student_class:this.state.student_class,
                student_grade:this.state.student_grade,
                student_major:this.state.student_major,//专业
                student_school:this.state.student_school,
                student_password_log:this.state.student_password_log,//登录本系统的登录密码
            }
        };
        admin.addStudent(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            if(response.meta.message=="ok"){
                this.setState({
                     tip:"该学生信息添加成功"
                })
            }else{
                this.setState({
                    tip:"该学生信息添加失败"
                })
            }

        });
    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                {/*如果不加上面这个样式，最下边的版权栏会出现问题，待解惑*/}
                <Header/>
                <div className="row ">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="ad_flexCenter">
                        <div className="col-xs-8 col-md-5 col-lg-5  ">
                            <div className="row ">
                                <div className="col-md-4 col-lg-4 ">
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
                            <div className=" margin-top_20px ">
                                <AdInput
                                    title="学&#12288;&#12288;号&#12288;"
                                    placeholder="请输入学号"
                                    value={this.state.student_id}
                                    onChange={this.student_id_change.bind(this)}
                                />
                                <AdInput
                                    title="姓&#12288;&#12288;名&#12288;"
                                    placeholder="请输入姓名"
                                    value={this.state.student_name}
                                    onChange={this.student_name_change.bind(this)}
                                />
                                <AdInput
                                    title="性&#12288;&#12288;别&#12288;"
                                    placeholder="请输入性别"
                                    value={this.state.student_gender}
                                    onChange={this.student_gender_change.bind(this)}
                                />
                                <AdInput
                                    title="班&#12288;&#12288;级&#12288;"
                                    placeholder="请输入班级"
                                    value={this.state.student_class}
                                    onChange={this.student_class_change.bind(this)}
                                />
                                <AdInput
                                    title="年&#12288;&#12288;级&#12288;"
                                    placeholder="请输入年级"
                                    value={this.state.student_grade}
                                    onChange={this.student_grade_change.bind(this)}
                                />
                                <AdInput
                                    title="专&#12288;&#12288;业&#12288;"
                                    placeholder="请输入专业"
                                    value={this.state.student_major}
                                    onChange={this.student_major_change.bind(this)}
                                />
                                <AdInput
                                    title="学&#12288;&#12288;校&#12288;"
                                    placeholder="请输入学校"
                                    value={this.state.student_school}
                                    onChange={this.student_school_change.bind(this)}
                                />
                                <AdInput
                                    title="登录密码&#12288;"
                                    placeholder="请输入登录密码"
                                    value={this.state.student_password_log}
                                    onChange={this.student_password_log_change.bind(this)}
                                />
                                <Button bsStyle="success" bsSize="large" className="width_100 margin-top_50px"
                                        onClick={() => this.button1_change()}>提交</Button>
                                <label><h4>{this.state.tip}</h4></label>
                                {/*位置需要改*/}

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}