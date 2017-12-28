import React, {Component} from 'react'
import './AdCourseInfoModify.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

export default class AdCourseInfoModify extends Component{
    constructor(){
        super();
        this.state={
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
    course_id_change(event){
        this.setState({
            course_id:event.target.value
        });

    }
    course_name_change(event){
        this.setState({
            course_name:event.target.value
        });

    }
    academy_change(event){
        this.setState({
            academy:event.target.value
        });

    }
    grade_change(event){
        this.setState({
            grade:event.target.value
        });

    }
    course_time_change(event){
        this.setState({
            course_time:event.target.value
        });

    }
    credit_change(event){
        this.setState({
            credit:event.target.value
        });

    }
    mark_element_change(event){
        this.setState({
            mark_element:event.target.value
        });

    }
    course_property_change(event){
        this.setState({
            course_property:event.target.value
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

                <h3>课程信息查询与修改</h3>
                <div className="c_i_m_1">
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>课程编号&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         placeholder="请输入课程编号"
                                         value={this.state.course_id}
                                         onChange={this.course_id_change.bind(this)}
                            />
                        </FormGroup>
                        &#12288;<Button  bsStyle="success"  bsSize="large"  onClick={()=>this.button1_change()} >查询</Button>
                    </Form>

                </div>

                {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                <div className="c_i_m_2">
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>课程编号&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.course_id}
                                         onChange={this.course_id_change.bind(this)}
                            />

                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>课程名称&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.course_name}
                                         onChange={this.course_name_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>面向院系&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.academy}
                                         onChange={this.academy_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>面向年级&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.grade}
                                         onChange={this.grade_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>开课时间&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.course_time}
                                         onChange={this.course_time_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>学&#12288;&#12288;分&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.credit}
                                         onChange={this.credit_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>成绩组成&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.mark_element}
                                         onChange={this.mark_element_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Form inline>
                        <FormGroup bsSize="large" >
                            <ControlLabel ><h4>课程属性&#12288;</h4></ControlLabel>
                            <FormControl type="text"
                                         value={this.state.course_property}
                                         onChange={this.course_property_change.bind(this)}
                            />
                        </FormGroup>
                    </Form>
                    <Button  bsStyle="success"  bsSize="large" className="c_i_m_button2" onClick={()=>this.button2_change()} block>提交</Button>
                </div>


            </div>
        )
    }
}