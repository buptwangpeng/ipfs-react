import React, {Component} from 'react'
import './AdTeacherInfoModify.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


export default class AdTeacherInfoModify extends Component{
    constructor(){
        super();
        this.state={
            teacher_id:'',
            teacher_name:'',
            teacher_address:'',
            teacher_password_log:'',
            teacher_password_unlock:'',
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
    teacher_address_change(event){
        this.setState({
            teacher_address:event.target.value
        });

    }
    teacher_password_log_change(event){
        this.setState({
            teacher_password_log:event.target.value
        });

    }
    teacher_password_unlock_change(event){
        this.setState({
            teacher_password_unlock:event.target.value
        });

    }
    //批量添加按钮
    button1_change(){

    }

    //单个添加按钮
    button2_change(){

    }
    render() {
        return (
            <div>

                <h3>教师信息查询与修改</h3>
                <div className="s_i_m_1">
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>教师编号&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入学号"
                                         value={this.state.teacher_id}
                                         onChange={this.teacher_id_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Button  bsStyle="success"  bsSize="large" className="s_i_m_button1" onClick={()=>this.button1_change()} >查询</Button>
                </div>

                {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                <div className="s_i_m_2">
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>教师编号&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.teacher_id}
                                         onChange={this.teacher_id_change.bind(this)}
                            />

                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.teacher_name}
                                         onChange={this.teacher_name_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>地&#12288;&#12288;址&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.teacher_address}
                                         onChange={this.teacher_address_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>登录密码&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.teacher_password_log}
                                         onChange={this.teacher_password_log_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>解锁密码&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.teacher_password_unlock}
                                         onChange={this.teacher_password_unlock_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Button  bsStyle="success"  bsSize="large" className="s_i_m_button2" onClick={()=>this.button2_change()} block>提交</Button>
                </div>


            </div>
        )
    }
}