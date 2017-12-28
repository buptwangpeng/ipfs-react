import React, {Component} from 'react'
import './AdTeacherInfoCourseApply.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'


export default class AdTeacherInfoCourseApply extends Component{
    constructor(){
        super();
        this.state={
            teacher_name:'',//申请教师
            course_id:'',//课程号
            course_name:'',//课程名称
            academy:'',//面向院系
            grade:'',//面向年级
            course_time:'',//开课时间
            credit:'',//学分
            mark_element:'',//成绩组成
            course_property:'',//课程属性

        }
    }

    button1_change(){

    }

    button2_change(){

    }
    render() {
        return (
            <div>
                <div >
                    <h3>教师开课申请</h3>
                    {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                    <div className="t_i_c">
                        {/*<Button  bsStyle="success"  bsSize="large" className="t_i_a_button2" onClick={()=>this.button2_change()} block>修改</Button>*/}
                        <Form inline>
                            <FormGroup bsSize="large" className="t_i_c_1">
                                <ControlLabel ><h4>申请教师:&#12288;{this.state.teacher_name}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>课程号:&#12288;&#12288;{this.state.course_id}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>课程名称:&#12288;{this.state.course_name}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>面向院系:&#12288;{this.state.academy}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>面向年级:&#12288;{this.state.grade}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>开课时间:&#12288;{this.state.course_time}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>学&#12288;&#12288;分:&#12288;{this.state.credit}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>成绩组成:&#12288;{this.state.mark_element}</h4></ControlLabel><br/>
                                <ControlLabel ><h4>课程属性:&#12288;{this.state.course_property}</h4></ControlLabel>

                            </FormGroup>
                        </Form>
                        <ButtonToolbar >
                            <ButtonGroup className="t_i_c_button">
                                <Button  bsStyle="success"  bsSize="large"  onClick={()=>this.button1_change()} >同&#12288;意</Button>
                            </ButtonGroup >
                            <ButtonGroup className="t_i_c_button">
                                <Button  bsStyle="success"  bsSize="large"  onClick={()=>this.button2_change()} >拒&#12288;绝</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        {/*这个按钮长度和块的宽度一样<Button  bsStyle="success"  bsSize="large" className="t_i_c_button1" onClick={()=>this.button1_change()} block>同意</Button>*/}
                    </div>

                </div>
            </div>
        )
    }
}