import React, {Component} from 'react'
import './CourseInfoModify.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'
import getJsonLength from '../../../core/getJsonLength.js'

let length;
let value=0;

export default class AdCourseInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            course_id: '',//课程号
            course_name: '',//课程名称
            academy: '',//面向院系
            grade: '',//面向年级
            new_teacher_id:'',//新任课教师ID
            former_teacher_names:[{'0':'wangpeng'},{'1':'li'}],//原任课教师姓名  从后台获得的原任课老师（同一课程可能会有多个）
            former_teacher_name:'',//下拉菜单中选定的原任课教师姓名
            former_teacher_ids:{'0':'123','1':'456'},//原任课教师ID  从后台获得的原任课老师（同一课程可能会有多个）
            former_teacher_id:'',//下拉菜单中选定的原任课教师ID
            course_time: '',//开课时间
            credit: '',//学分
            mark_element: '',//成绩组成
            course_property: '',//课程属性

            tip:'',
        }
    }

    course_id_change(event) {
        this.setState({
            course_id: event.target.value
        });

    }

    course_name_change(event) {
        this.setState({
            course_name: event.target.value
        });

    }

    academy_change(event) {
        this.setState({
            academy: event.target.value
        });

    }

    grade_change(event) {
        this.setState({
            grade: event.target.value
        });

    }

    new_teacher_id_change(event) {
        this.setState({
            new_teacher_id: event.target.value
        });

    }

    course_time_change(event) {
        this.setState({
            course_time: event.target.value
        });

    }

    credit_change(event) {
        this.setState({
            credit: event.target.value
        });

    }

    mark_element_change(event) {
        this.setState({
            mark_element: event.target.value
        });

    }

    course_property_change(event) {
        this.setState({
            course_property: event.target.value
        });

    }

    getValidationState() {
        const length = this.state.course_id.length;
        if (length > 3) return 'error';
        else if (length > 2) return 'success';
        else if (length > 0) return 'error';
    }

    //查询
    button1_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        let param = {
            course: {
                course_id:this.state.course_id,//课程号
            }
        };

        admin.queryCourse(url, param).then((response) => {
            console.log(response);
            length=getJsonLength(response.data.teacher_name);
            self.setState({
               former_teacher_names:response.data.teacher_name,//申请教师
               former_teacher_ids:response.data.teacher_id,
               course_id:response.data.course_id,//课程号
               course_name:response.data.course_name,//课程名称
               academy:response.data.academy,//面向院系
               grade:response.data.grade,//面向年级
               course_time:response.data.course_time,//开课时间
               credit:response.data.credit,//学分
               mark_element:response.data.mark_element,//成绩组成
               course_property:response.data.course_property,//课程属性
           })

        });
    }

    //修改提交
    button2_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        //用于提取下拉框中的值
        let myselect=document.getElementById("test");
        let index=myselect.selectedIndex;
        // let c= myselect.options[index].text;
        value=myselect.options[index].value;
        //
this.setState({
    former_teacher_id:this.state.former_teacher_ids[value]
});

        let param = {
            course: {
                teacher_id_change:{
                    former:this.state.former_teacher_id,
                    now:this.state.new_teacher_id
                },
                course_id:this.state.course_id,//课程号
                course_name:this.state.course_name,//课程名称
                academy:this.state.academy,//面向院系
                grade:this.state.grade,//面向年级
                course_time:this.state.course_time,//开课时间
                credit:this.state.credit,//学分
                mark_element:this.state.mark_element,//成绩组成
                course_property:this.state.course_property,//课程属性
            }
        };

        admin.modifyCourse(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            if(response.meta.message=="ok"){
                self.setState({
                    tip:"该课程信息修改成功"
                })
            }else{
                self.setState({
                    tip:"该课程信息修改失败"
                })
            }

        });
    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-md-2 col-lg-2">
                        <div>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10">

                        <h3>课程信息查询与修改</h3>
                        <div className=" c_mod_1">
                            <AdInput
                                title="课程编号&#12288;"
                                placeholder="请输入课程编号"
                                value={this.state.course_id}
                                onChange={this.course_id_change.bind(this)}
                            />

                                <Button  bsStyle="success" bsSize="large"
                                         className="margin-left_10px "
                                         onClick={() => this.button1_change()}>查询</Button>

                        </div>

                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_50px">
                            <AdInput
                                title="课程编号&#12288;"
                                placeholder="请输入课程编号"
                                value={this.state.course_id}
                                onChange={this.course_id_change.bind(this)}
                            />
                            <AdInput
                                title="课程名称&#12288;"
                                placeholder="请输入课程名称"
                                value={this.state.course_name}
                                onChange={this.course_name_change.bind(this)}
                            />
                            <AdInput
                                title="面向院系&#12288;"
                                placeholder="请输入面向院系"
                                value={this.state.academy}
                                onChange={this.academy_change.bind(this)}
                            />
                            <AdInput
                                title="面向年级&#12288;"
                                placeholder="请输入面向年级"
                                value={this.state.grade}
                                onChange={this.grade_change.bind(this)}
                            />

                            <AdInput
                                title="开课时间&#12288;"
                                placeholder="请输入开课时间"
                                value={this.state.course_time}
                                onChange={this.course_time_change.bind(this)}
                            />
                            <AdInput
                                title="学&#12288;&#12288;分&#12288;"
                                placeholder="请输入学分"
                                value={this.state.credit}
                                onChange={this.credit_change.bind(this)}
                            />
                            <AdInput
                                title="成绩组成&#12288;"
                                placeholder="请输入成绩组成"
                                value={this.state.mark_element}
                                onChange={this.mark_element_change.bind(this)}
                            />
                            <AdInput
                                title="课程属性&#12288;"
                                placeholder="请输入课程属性"
                                value={this.state.course_property}
                                onChange={this.course_property_change.bind(this)}
                            />

                            <div className=" c_mod_2">

                                    <AdInput
                                        title="教师编号&#12288;"
                                        placeholder="请输入新任课教师编号"
                                        value={this.state.new_teacher_id}
                                        onChange={this.new_teacher_id_change.bind(this)}

                                    />
                               <div>
                                    <select id="test" className="col-md-6 input-lg form-control">
                                        <option >陈萍</option>
                                        <option>王自健</option>
                                        {this.state.former_teacher_names.map((name)=>{

                                                for(let i=0;i<length;i++){
                                                    return(
                                                     <option value="i">{name[3]}</option>
                                                    )
                                                }


                                        })}
                                    </select>
                                   <span id="helpBlock" className="margin-left_10px help-block">原任课教师</span>
                                </div>

                            </div>




                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_50px"
                                    onClick={() => this.button2_change()} >提交</Button>
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