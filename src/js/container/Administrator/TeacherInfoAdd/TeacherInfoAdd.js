import React, {Component} from 'react'
import './TeacherInfoAdd.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'


export default class AdTeacherInfoAdd extends Component{
    constructor(){
        super();
        this.state={
            teacher_id:'',
            teacher_name:'',
            teacher_tel:'',
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
    teacher_tel_change(event){
        this.setState({
            teacher_tel:event.target.value
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
            <div style={{background:'#ffffff',height:window.innerHeight}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-4 col-md-2 col-lg-2">
                        <div  style={{background:'#dcdcdc',width:'100%',height: window.innerHeight-100,margin:'0',padding:'0'}}>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide />
                        </div>
                    </div>
                <div className="col-xs-8 col-md-10 col-lg-10">
                    <h3>添加教师</h3>
                    {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                    <div className="margin-top_20px">
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
                                <ControlLabel ><h4>联系方式&#12288;</h4></ControlLabel>
                                <FormControl type="text"
                                             placeholder="请输入手机号码"
                                             value={this.state.teacher_tel}
                                             onChange={this.teacher_tel_change.bind(this)}
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
                        <Button  bsStyle="success"  bsSize="large" className="width_50 margin-top_50px" onClick={()=>this.button1_change()} >添加</Button>
                        {/*<Button  bsStyle="success"  bsSize="large" className="t_i_a_button2" onClick={()=>this.button2_change()} block>修改</Button>*/}
                        <Form inline>
                            <FormGroup bsSize="large" className="">
                                <ControlLabel ><h4>教师地址:&#12288;{this.state.teacher_address}</h4></ControlLabel>

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