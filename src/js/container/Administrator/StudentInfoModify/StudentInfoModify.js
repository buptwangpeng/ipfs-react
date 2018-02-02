import React, {Component} from 'react'
import './StudentInfoModify.css'
import {Button} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'


export default class AdStudentInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            student_name: '',
            student_gender:'',//male/female
            student_class: '',
            student_grade: '',
            student_major:'',//专业
            student_school:'',
            student_address: '',//学生在区块链上的账户地址
            student_password_log: '',//学生登录本系统的登录密码
            student_password_unlock: '',//学生的区块链账户地址的解锁密码
            tip:'',
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

    student_major_change(event) {
        this.setState({
            student_major: event.target.value
        });

    }

    student_school_change(event) {
        this.setState({
            student_school: event.target.value
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

//查询
    button1_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/student/info/query/';//接口的地址

        let param = {
            student: {
                student_id:this.state.student_id,//学号
            }
        };
        admin.queryStudent(url, param).then((response) => {
            console.log(response);
            self.setState({
                student_name:response.data.student_name,
                student_gender:response.data.student_gender,
                student_class:response.data.student_class,
                student_grade:response.data.student_grade,
                student_major:response.data.student_major,
                student_school:response.data.student_school,
                student_address:response.data.student_address,
                student_password_log:response.data.student_password_log,
                student_password_unlock:response.data.student_password_unlock,
            })


        });
    }

    //修改提交
    button2_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/student/info/modify/';//接口的地址

        let param = {
            student: {
                student_id:this.state.student_id,
                student_name:this.state.student_name,
                student_gender:this.state.student_gender,
                student_class:this.state.student_class,
                student_grade:this.state.student_grade,
                student_major:this.state.student_major,
                student_school:this.state.student_school,
                student_address:this.state.student_address,
                student_password_log:this.state.student_password_log,
                student_password_unlock:this.state.student_password_unlock,
            }
        };
        admin.modifyStudent(url, param).then((response) => {
            console.log(response);
            if(response.meta.message=="ok"){
                self.setState({
                    tip:"该学生信息修改成功"
                })
            }else{
                self.setState({
                    tip:"该学生信息修改失败"
                })
            }

        });
    }

    render() {
        return (
            <div style={{background: '#ffffff', /*height: window.innerHeight*/paddingBottom:40}}>
                <Header/>
                <div className="row ">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-10 col-lg-10  ">
                        <div className="row ">
                            <div className="">
                        <div className="">
                            <h3>学生信息查询与修改</h3>
                        </div>


                            <div className="col-md-12 col-lg-12 st_mod_1">
                                <AdInput
                                    title="学&#12288;&#12288;号&#12288;"
                                    placeholder="请输入学号"
                                    value={this.state.student_id}
                                    onChange={this.student_id_change.bind(this)}
                                />
                                <div className="margin-left_10px">
                                    <Button bsStyle="success" bsSize="large"
                                            onClick={() => this.button1_change()}>查询</Button>
                                </div>
                            </div>


                            {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                            <div className="col-md-12 col-lg-12 margin-top_30px">
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
                                    title="地&#12288;&#12288;址&#12288;"
                                    placeholder="请输入地址"
                                    value={this.state.student_address}
                                    onChange={this.student_address_change.bind(this)}
                                />
                                <AdInput
                                    title="登录密码&#12288;"
                                    placeholder="请输入登录密码"
                                    value={this.state.student_password_log}
                                    onChange={this.student_password_log_change.bind(this)}
                                />
                                <AdInput
                                    title="解锁密码&#12288;"
                                    placeholder="请输入解锁密码"
                                    value={this.state.student_password_unlock}
                                    onChange={this.student_password_unlock_change.bind(this)}
                                />

                                <Button bsStyle="success" bsSize="large" className=" width_50 margin-top_30px"
                                        onClick={() => this.button2_change()} >提交</Button>
                                <label><h4>{this.state.tip}</h4></label>
                                {/*位置需要改*/}
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