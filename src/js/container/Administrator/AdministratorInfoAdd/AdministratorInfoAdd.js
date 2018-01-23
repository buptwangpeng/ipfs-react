import React, {Component} from 'react'
import './AdministratorInfoAdd.css'
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

export default class AdministratorInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            administrator_id: '',
            administrator_name: '',
            administrator_tel: '',
            administrator_password_log: '',//管理员登录本系统的登录密码
            tip:''
        }
    }

    administrator_id_change(event) {
        this.setState({
            administrator_id: event.target.value
        });

    }

    administrator_name_change(event) {
        this.setState({
            administrator_name: event.target.value
        });

    }

    administrator_tel_change(event) {
        this.setState({
            administrator_tel: event.target.value
        });

    }

    administrator_password_log_change(event) {
        this.setState({
            administrator_password_log: event.target.value
        });

    }
//添加
    button1_change() {
        let admin = new Admin();
        let url = 'http://localhost:3004/list';//接口的地址

        let param = {
            administrator: {
                administrator_id:this.state.administrator_id,
                administrator_name:this.state.administrator_name,
                administrator_tel:this.state.administrator_tel,
                administrator_password_log:this.state.administrator_password_log,//管理员登录本系统的登录密码

            }
        };

        admin.addAdministrator(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            if(response.meta.message=="ok"){
                this.setState({
                    tip:"该管理员信息添加成功"
                })
            }else{
                this.setState({
                    tip:"该管理员信息添加失败"
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
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10 ">
                        <h3>添加管理员</h3>
                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_20px">
                            <AdInput
                                title="管理员编号"
                                placeholder="请输入管理员编号"
                                value={this.state.administrator_id}
                                onChange={this.administrator_id_change.bind(this)}
                            />
                            <AdInput
                                title="姓&#12288;&#12288;名&#12288;"
                                placeholder="请输入姓名"
                                value={this.state.administrator_name}
                                onChange={this.administrator_name_change.bind(this)}
                            />
                            <AdInput
                                title="联系方式&#12288;"
                                placeholder="请输入手机号码"
                                value={this.state.administrator_tel}
                                onChange={this.administrator_tel_change.bind(this)}
                            />
                            <AdInput
                                title="登录密码&#12288;"
                                placeholder="请输入登录密码"
                                value={this.state.administrator_password_log}
                                onChange={this.administrator_password_log_change.bind(this)}
                            />

                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_50px"
                                    onClick={() => this.button1_change()} >添加</Button>
                            {/*<Button  bsStyle="success"  bsSize="large" className="t_i_a_button2" onClick={()=>this.button2_change()} block>修改</Button>*/}
                            <Form inline>
                                <FormGroup bsSize="large" className="">
                                    <ControlLabel><h4>{this.state.tip}</h4>
                                    </ControlLabel>

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