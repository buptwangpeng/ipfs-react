import React, {Component} from 'react'
import './AdStudentInfoAdd.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'


export default class AdStudentInfoAdd extends Component{
    constructor(){
        super();
        this.state={
            student_id:'',
            student_name:'',
            student_class:'',
            student_grade:'',
            student_password:'',
            student_tel:'',
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
    student_class_change(event){
        this.setState({
            student_class:event.target.value
        });

    }
    student_grade_change(event){
        this.setState({
            student_grade:event.target.value
        });

    }
    student_password_change(event){
        this.setState({
            student_password:event.target.value
        });

    }
    student_tel_change(event){
        this.setState({
            student_tel:event.target.value
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
            <div>
               <h3>添加学生</h3>
                <div className="s_i_a_button1">
                    <Button  bsStyle="success"  onClick={()=>this.button1_change()}>批量添加</Button><br/>
                </div>
                {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                <div className="s_i_a_1">
                    <Form inline>
                    <FormGroup bsSize="large" >
                        <ControlLabel ><h4>学&#12288;&#12288;号&#12288;</h4></ControlLabel>
                        <FormControl type="text"
                                     placeholder="请输入学号"
                                     value={this.state.student_id}
                                     onChange={this.student_id_change.bind(this)}
                        />

                    </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>姓&#12288;&#12288;名&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入姓名"
                                         value={this.state.student_name}
                                         onChange={this.student_name_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>班&#12288;&#12288;级&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入班级"
                                         value={this.state.student_class}
                                         onChange={this.student_class_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>年&#12288;&#12288;级&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入年级"
                                         value={this.state.student_grade}
                                         onChange={this.student_grade_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>登录密码&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入登录密码"
                                         value={this.state.student_password}
                                         onChange={this.student_password_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>联系方式&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入联系方式"
                                         value={this.state.student_tel}
                                         onChange={this.student_tel_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Button  bsStyle="success"  bsSize="large" className="s_i_a_button2" onClick={()=>this.button2_change()} block>提交</Button>
                </div>

            </div>
       </div>
        )
    }
}