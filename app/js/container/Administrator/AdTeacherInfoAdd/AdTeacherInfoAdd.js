import React, {Component} from 'react'
import './AdTeacherInfoAdd.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


export default class AdTeacherInfoAdd extends Component{
    constructor(){
        super();
        this.state={
            teacher_id:'',
            teacher_name:'',
            teacher_password:'',
            teacher_address:'',
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
    teacher_password_change(event){
        this.setState({
            teacher_password:event.target.value
        });

    }

    button1_change(){

    }

    /* button2_change(){
        this.setState({
            teacher_address:'12'
        });
    }*/
    render() {
        return (
            <div>
                <div>
                    <h3>添加教师</h3>
                    {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                    <div className="t_i_a_1">
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>教师编号&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             placeholder="请输入教师编号"
                                             value={this.state.teacher_id}
                                             onChange={this.teacher_id_change.bind(this)}
                                />

                            </FormGroup>
                        </Form>
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             placeholder="请输入姓名"
                                             value={this.state.teacher_name}
                                             onChange={this.teacher_name_change.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <Form inline>
                            <FormGroup bsSize="large" >
                                <ControlLabel ><h4>登录密码&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             placeholder="请输入登录密码"
                                             value={this.state.teacher_password}
                                             onChange={this.teacher_password_change.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <Button  bsStyle="success"  bsSize="large" className="t_i_a_button1" onClick={()=>this.button1_change()} block>添加</Button>
                        {/*<Button  bsStyle="success"  bsSize="large" className="t_i_a_button2" onClick={()=>this.button2_change()} block>修改</Button>*/}
                        <Form inline>
                            <FormGroup bsSize="large" className="t_i_a_2">
                                <ControlLabel ><h4>教师地址:&#12288;{this.state.teacher_address}</h4></ControlLabel>

                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
        )
    }
}