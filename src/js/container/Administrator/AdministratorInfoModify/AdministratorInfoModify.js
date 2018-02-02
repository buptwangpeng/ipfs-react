import React, {Component} from 'react'
import './AdministratorInfoModify.css'
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

export default class AdAdministratorInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            administrator_id: '',
            administrator_name: '',
            administrator_tel: '',
            administrator_address: '',
            administrator_password_log: '',
            administrator_password_unlock: '',
            tip:'',
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

    administrator_address_change(event) {
        this.setState({
            administrator_address: event.target.value
        });

    }

    administrator_password_log_change(event) {
        this.setState({
            administrator_password_log: event.target.value
        });

    }

    administrator_password_unlock_change(event) {
        this.setState({
            administrator_password_unlock: event.target.value
        });

    }

    getValidationState() {
        const length = this.state.administrator_id.length;
        if (length > 10) return 'error';
        else if (length > 9) return 'success';
        else if (length > 0) return 'error';
    }

//查询
    button1_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/administrator/info/query/';//接口的地址

        let param = {
            administrator: {
                administrator_id:this.state.administrator_id,//课程号
            }
        };

        admin.queryAdministrator(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            self.setState({
                administrator_id:response.data.administrator_id,
                administrator_name:response.data.administrator_name,
                administrator_tel:response.data.administrator_tel,
                administrator_address:response.data.administrator_address,
                administrator_password_log:response.data.administrator_password_log,
                administrator_password_unlock:response.data.administrator_password_unlock,
            })

        });
    }

    //修改
    button2_change() {
        let self=this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8000/admin/administrator/info/modify/';//接口的地址

        let param = {
            administrator: {
                administrator_id:this.state.administrator_id,
                administrator_name:this.state.administrator_name,
                administrator_tel:this.state.administrator_tel,
                administrator_password_log:this.state.administrator_password_log,//管理员登录本系统的登录密码
                administrator_address:this.state.administrator_address,
                administrator_password_unlock:this.state.administrator_password_unlock,

            }
        };

        admin.modifyAdministrator(url, param).then((response) => {
            console.log(response);
            //必须试试response中的this的域还是不是本组件
            if(response.meta.message=="ok"){
                self.setState({
                    tip:"该管理员信息修改成功"
                })
            }else{
                self.setState({
                    tip:"该管理员信息修改失败"
                })
            }

        });
    }

    render() {
        return (
            <div style={{background: '#ffffff',paddingBottom:40}}>
                {/*innerheight	返回窗口的文档显示区的高度*/}
                <Header/>
                <div className="row">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div >
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-10 col-lg-10 ">

                        <h3>管理员信息查询与修改</h3>
                        <div className="ad_mod_1">
                            <AdInput
                                title="管理员编号"
                                placeholder="请输入管理员编号"
                                value={this.state.administrator_id}
                                onChange={this.administrator_id_change.bind(this)}
                            />

                            <Button bsStyle="success" bsSize="large" className="margin-left_10px"
                                    onClick={() => this.button1_change()}>查询</Button>
                        </div>

                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_50px">
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
                                placeholder="请输入联系方式"
                                value={this.state.administrator_tel}
                                onChange={this.administrator_tel_change.bind(this)}
                            />
                            <AdInput
                                title="地&#12288;&#12288;址&#12288;"
                                placeholder="请输入地址"
                                value={this.state.administrator_address}
                                onChange={this.administrator_address_change.bind(this)}
                            />
                            <AdInput
                                title="登录密码&#12288;"
                                placeholder="请输入登录密码"
                                value={this.state.administrator_password_log}
                                onChange={this.administrator_password_log_change.bind(this)}
                            />
                            <AdInput
                                title="解锁密码&#12288;"
                                placeholder="请输入解锁密码"
                                value={this.state.administrator_password_unlock}
                                onChange={this.administrator_password_unlock_change.bind(this)}
                            />

                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_50px"
                                    onClick={() => this.button2_change()} >提交</Button>
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