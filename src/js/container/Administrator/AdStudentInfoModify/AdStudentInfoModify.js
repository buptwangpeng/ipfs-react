import React, {Component} from 'react'
import './AdStudentInfoModify.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'


export default class AdStudentInfoModify extends Component{
    constructor(){
        super();
        this.state={
            student_id:'',
            student_name:'',
            student_address:'',
            student_password_log:'',
            student_password_unlock:'',
        }
    }
    student_id_change(event){
        this.setState({
            student_id:event.target.value
        });

    }
    student_name_change(event){
        this.setState({
            student_name:event.target.value
        });

    }
    student_address_change(event){
        this.setState({
            student_address:event.target.value
        });

    }
    student_password_log_change(event){
        this.setState({
            student_password_log:event.target.value
        });

    }
    student_password_unlock_change(event){
        this.setState({
            student_password_unlock:event.target.value
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

                    <h3>学生信息查询与修改</h3>
                <div className="s_i_m_1">
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>学生学号&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入学号"
                                         value={this.state.student_id}
                                         onChange={this.student_id_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Button  bsStyle="success"  bsSize="large" className="s_i_m_button1" onClick={()=>this.button1_change()} >查询</Button>
                </div>

                    {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                    <div className="s_i_m_2">
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>学&#12288;&#12288;号&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             value={this.state.student_id}
                                             onChange={this.student_id_change.bind(this)}
                                />

                            </FormGroup>
                        </Form>
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             value={this.state.student_name}
                                             onChange={this.student_name_change.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>地&#12288;&#12288;址&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             value={this.state.student_address}
                                             onChange={this.student_address_change.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>登录密码&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             value={this.state.student_password_log}
                                             onChange={this.student_password_log_change.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>解锁密码&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             value={this.state.student_password_unlock}
                                             onChange={this.student_password_unlock_change.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <Button  bsStyle="success"  bsSize="large" className="s_i_m_button2" onClick={()=>this.button2_change()} block>提交</Button>
                    </div>


            </div>
        )
    }
}