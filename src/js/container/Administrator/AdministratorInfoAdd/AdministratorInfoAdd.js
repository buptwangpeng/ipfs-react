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

//智能合约引入和声明部分
import {default as Web3} from 'web3'
import {default as contract} from 'truffle-contract'
import study_artifacts from '../../../../../build/contracts/studyData.json'

let Study = contract(study_artifacts);
let StudyProvider = new Web3.providers.HttpProvider("http://localhost:8545");
Study.setProvider(StudyProvider);
let web3 = new Web3(StudyProvider);//创建web3对象，需要新创建对象，后面才能调用
//

export default class AdministratorInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            administrator_id: '',
            administrator_name: '',
            administrator_tel: '',
            administrator_password_log: '',//管理员登录本系统的登录密码
            yourAccount:'',
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

    //解锁区块链账户
    unlock(){
        let self = this;
        let address0 = "", unlockPassword = "";

        //从后台获取区块链账户和地址
        let admin = new Admin();
        let url = 'http://120.79.198.95:8082/user/addressunlock_password/query/';//接口的地址
        let param = {};

        admin.queryAddressPassword(url, param).then((response) => {
            console.log(response);
            address0 = response.data.address;
            unlockPassword = response.data.unlock_password;
            this.setState({
                yourAccount:address0
            },()=>{
                console.log(address0, unlockPassword);
                //解锁账户  调用web3接口
                let unLockRes = web3.personal.unlockAccount(address0, unlockPassword, 1000 * 60 * 60);
                console.log(unLockRes);
            })
        });


    }
//添加
    button1_change() {
        //解锁区块链账户
        this.unlock();

        let self=this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8082/admin/administrator/info/add/';//接口的地址

        let param = {
            administrator: {
                administrator_id:this.state.administrator_id,
                administrator_name:this.state.administrator_name,
                administrator_tel:this.state.administrator_tel,
                administrator_password_log:this.state.administrator_password_log,//管理员登录本系统的登录密码

            }
        };

        //向合约发送数据，修改区块链上信息
        Study.deployed().then(function (instance) {
            //加了.call的合约函数不会对链上的信息进行修改，不消耗gas
            //合约添加学生函数（消耗gas，需要挖矿），可以先加上.call试试程序是否跑通，最后再把.call去掉
            return instance.addManagerInfo(
                parseInt(self.state.administrator_id),
                {from: self.state.yourAccount, gas: 1800000});
        }).then(function (response) {
            console.log(response);
            if(response!==null){
                //向后台发数据
                admin.addAdministrator(url, param).then((response) => {
                    console.log(response);
                    //必须试试response中的this的域还是不是本组件
                    if(response.meta.message=="ok"){
                        self.setState({
                            tip:"该管理员信息添加成功"
                        })
                    }else{
                        self.setState({
                            tip:"该管理员信息添加失败"
                        })
                    }
                });
            }
        }).catch(function (e) {
            console.log(e);
        })
    }


    render() {
        return (
            <div style={{background: '#ffffff', paddingBottom:40}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div >
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-10 col-lg-10 ">
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