import React, {Component} from 'react'
import './TeacherInfoModify.css'
import {Button} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'

export default class AdTeacherInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            teacher_id: '',
            teacher_name: '',
            teacher_tel: '',
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

    teacher_tel_change(event) {
        this.setState({
            teacher_tel: event.target.value
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

//查询
    button1_change() {
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        let param = {
            teacher: {
                teacher_id:this.state.teacher_id,
            }
        };

        admin.queryTeacher(url, param).then((response) => {
            console.log(response);
            this.setState({
                teacher_id:response.data.teacher_id,
                teacher_name:response.data.teacher_name,
                teacher_tel:response.data.teacher_tel,
                teacher_address:response.data.teacher_address,
                teacher_password_log:response.data.teacher_password_log,
                teacher_password_unlock:response.data.teacher_password_unlock,
            })


        });
    }

    // 修改提交
    button2_change() {
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        let param = {
            teacher: {
                teacher_id:this.state.teacher_id,
                teacher_name:this.state.teacher_name,
                teacher_tel:this.state.teacher_tel,
                teacher_address:this.state.teacher_address,
                teacher_password_log:this.state.teacher_password_log,
                teacher_password_unlock:this.state.teacher_password_unlock,
            }
        };

        admin.modifyTeacher(url, param).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-4 col-md-2 col-lg-2">
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-8 col-md-10 col-lg-10 ">
                        <h3>教师信息查询与修改</h3>
                        <div className="te_mod_1">
                            <AdInput
                                title="教师编号&#12288;"
                                placeholder="请输入教师编号"
                                value={this.state.teacher_id}
                                onChange={this.teacher_id_change.bind(this)}
                            />

                            <Button bsStyle="success" bsSize="large" className="margin-left_10px"
                                    onClick={() => this.button1_change()}>查询</Button>
                        </div>

                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_50px">
                            <AdInput
                                title="教师编号&#12288;"
                                placeholder="请输入教师编号"
                                value={this.state.teacher_id}
                                onChange={this.teacher_id_change.bind(this)}
                            />
                            <AdInput
                                title="姓&#12288;&#12288;名&#12288;"
                                placeholder="请输入教师姓名"
                                value={this.state.teacher_name}
                                onChange={this.teacher_name_change.bind(this)}
                            />
                            <AdInput
                                title="联系方式&#12288;"
                                placeholder="请输入手机号码"
                                value={this.state.teacher_tel}
                                onChange={this.teacher_tel_change.bind(this)}
                            />
                            <AdInput
                                title="地&#12288;&#12288;址&#12288;"
                                placeholder="请输入地址"
                                value={this.state.teacher_address}
                                onChange={this.teacher_address_change.bind(this)}
                            />
                            <AdInput
                                title="登录密码&#12288;"
                                placeholder="请输入登录密码"
                                value={this.state.teacher_password_log}
                                onChange={this.teacher_password_log_change.bind(this)}
                            />
                            <AdInput
                                title="解锁密码&#12288;"
                                placeholder="请输入解锁密码"
                                value={this.state.teacher_password_unlock}
                                onChange={this.teacher_password_unlock_change.bind(this)}
                            />

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