import React, {Component} from 'react'
import './TeacherInfoAdd.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'


export default class AdTeacherInfoAdd extends Component{
    constructor(){
        super();
        this.state={
            teacher_id:'',
            teacher_name:'',
            teacher_tel:'',
            teacher_password_log:'',//教师登录本系统的登录密码
            tip:''
        }
    }
    teacher_id_change(event){
        this.setState({
            teacher_id:event.target.value
        });

    }
    teacher_name_change(event){
        this.setState({
            teacher_name:event.target.value
        });

    }
    teacher_tel_change(event){
        this.setState({
            teacher_tel:event.target.value
        });

    }
    teacher_password_log_change(event){
        this.setState({
            teacher_password_log:event.target.value
        });

    }


    //添加
    button1_change(){
        let self=this;
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        let param = {
            teacher: {
                teacher_id:this.state.teacher_id,//教师编号
                teacher_name:this.state.teacher_name,
                teacher_tel:this.state.teacher_tel,
                teacher_password_log:this.state.teacher_password_log,//登录本系统的登录密码
            }
        };
        admin.addTeacher(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            if(response.meta.message=="ok"){
                self.setState({
                    tip:"该教师信息添加成功"
                })
            }else{
                self.setState({
                    tip:"该教师信息添加失败"
                })
            }

        });

    }

    render() {
        return (
            <div style={{background:'#ffffff',height:window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-4 col-md-2 col-lg-2">
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide />
                        </div>
                    </div>
                <div className="col-xs-8 col-md-10 col-lg-10">
                    <h3>添加教师</h3>
                    {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                    <div className="margin-top_20px">
                        <AdInput
                            title="教师编号&#12288;"
                            placeholder="请输入教师编号"
                            value={this.state.teacher_id}
                            onChange={this.teacher_id_change.bind(this)}
                        />
                        <AdInput
                            title="姓&#12288;&#12288;名&#12288;"
                            placeholder="请输入姓名"
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
                            title="登录密码&#12288;"
                            placeholder="请输入登录密码"
                            value={this.state.teacher_password_log}
                            onChange={this.teacher_password_log_change.bind(this)}
                        />

                        <Button  bsStyle="success"  bsSize="large" className="width_50 margin-top_50px" onClick={()=>this.button1_change()} >添加</Button>
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