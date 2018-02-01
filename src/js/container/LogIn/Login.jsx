import React, {Component} from 'react'
import NavLink from '../../components/AdNavLink/NavLink'
import LoginHeader from './LoginHeader/LoginHeader'
import User from '../../core/login.js'
import jumpPage from '../../core/jumpPage.js'
import './LogIn.css'
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'

//智能合约引入和声明部分
import {default as Web3} from 'web3'
import {default as contract} from 'truffle-contract'
import study_artifacts from '../../../../build/contracts/studyData.json'

let Study = contract(study_artifacts);
let StudyProvider = new Web3.providers.HttpProvider("http://localhost:8545");
Study.setProvider(StudyProvider);
let web3 = new Web3(StudyProvider);//创建web3对象，需要新创建对象，后面才能调用
//


export default class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            //登录
            account: '',
            password: '',

            identity:0,//0-学生，1-教师，2-管理员
            unlockPassword:'',//区块链账户解锁密码
            address:'',//用户区块链上的账户地址
            showModal: false,
        };
    }

    logAccount(event) {
        this.setState({
            account: event.target.value
        });
    }

    logUnlockPassword(event) {
        this.setState({
            unlockPassword: event.target.value
        });
    }

    logPassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }

    //创建区块链账户
    createAccount(){
        let self=this;
        //调用web3接口
        let a =web3.personal.newAccount(self.state.unlockPassword);//获得地址
        //解锁账户
        // let unLockRes = web3.personal.unlockAccount(a, self.state.unlockPassword, 1000 * 60 * 60);
        // console.log(unLockRes);
        this.setState({
            address:a,
        },()=>{
            // //将账户和解锁密码传回合约
            // Study.deployed().then(function (instance) {
            //     //加了.call的合约函数不会对链上的信息进行修改，不消耗gas
            //     //合约添加学生函数（消耗gas，需要挖矿），可以先加上.call试试程序是否跑通，最后再把.call去掉
            //     return instance.addAccount.call(
            //           self.state.identity,
            //           self.state.account,
            //         self.state.address,
            //         {from: self.state.address, gas: 1800000});
            // }).then(function (response) {
            //     console.log(response);
            //
            // }).catch(function (e) {
            //     console.log(e);
            // });

            //将账户和解锁密码传回后台并进行跳转
            let user = new User();
            let url = 'http://120.79.198.95:8082/user/addressunlock_password/sent/';//接口的地址
            let param = {
                block_chain: {address: self.state.address, password_unlock: self.state.unlockPassword}
            };

            user.login(url, param).then((response) => {
                console.log(response);
                if(response.meta.message=="ok"){
                    if (response.data.type == "student") {
                        jumpPage('/student')
                    } else if (response.data.type == "teacher") {
                        jumpPage('/teacher')
                    } else {
                        jumpPage('/admin')
                    }
                }else{
                    alert("页面跳转失败");
                }
            });

        });

    }

//登录真正用的函数
    logIn1() {
        let self=this;
        let user = new User();
        let url = 'http://120.79.198.95:8082/user/login/';//接口的地址
        let param = {
            user: {account: this.state.account, password: this.state.password}
            };

        user.login(url, param).then((response) => {
            // let uid,token,name;
            console.log(response);
            localStorage.setItem("uid", response.data.uid);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name",response.data.name);
            if(response.data.type=='student'){
                self.setState({
                    identity:0
                })
            }else if(response.data.type=='teacher'){
                self.setState({
                    identity:1
                })
            }else{
                self.setState({
                    identity:2
                })
            }
            console.log(self.state.identity);
            console.log(response.data.address_exist);

            if(response.data.address_exist=="0"){
                   self.open();
            }else{
                if (response.data.type == "student") {
                    jumpPage('/student')
                } else if (response.data.type == "teacher") {
                    jumpPage('/teacher')
                } else {
                    jumpPage('/admin')
                }
            }
        });

    };

    render() {
        let self=this;
        return (
            <div style={{height: window.innerHeight}}
                 className="">
                <LoginHeader/>
                <div
                    style={{height: window.innerHeight - 100, padding: 40}}
                    className="Log0 row login_flexCenter">
                    <div className=" col-xs-6 col-md-6">
                        <div className=" margin-top_200">
                            <div className="col-xs-12 col-md-12">
                                <icon className=" login-icon-container col-xs-2 col-md-2 iconfont"
                                      style={{fontSize: '40px'}}>&#xe628;</icon>
                                <div className="col-xs-8 col-md-8 margin-top_5px">
                                    <div style={{}}
                                         className="input-group input-group-lg">
                                        <input type="text"
                                               className="form-control"
                                               placeholder="账号"
                                               aria-describedby="basic-addon1"
                                               onChange={this.logAccount.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-12 margin-top_20px">

                                <icon className="login-icon-container col-xs-2 col-md-2 iconfont"
                                      style={{fontSize: '40px'}}>&#xe63b;</icon>
                                <div className="col-xs-8 col-md-8 margin-top_5px">
                                    <div
                                        style={{}}
                                        className="input-group input-group-lg">
                                        <input type="password"
                                               className="form-control"
                                               placeholder="密码"
                                               aria-describedby="basic-addon1"
                                               onChange={this.logPassword.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                // style={{width: '100%'}}
                                className="col-xs-3 col-md-3 col-md-offset-3 margin-top_20px ">
                                <button style={{backgroundColor: '#20b18a'}} type="button" className="btn  btn-lg"
                                        onClick={() => this.logIn1()}>登录
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>对话框标题</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>请创建区块链账户</h4>
                        <div style={{}}
                             className="input-group input-group-lg">
                            <input type="password"
                                   className="form-control"
                                   placeholder="解锁密码"
                                   aria-describedby="basic-addon1"
                                   onChange={this.logUnlockPassword.bind(this)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.createAccount()}>创建区块链账户</Button>
                        <Button onClick={()=>this.close()}>取消</Button>
                    </Modal.Footer>
                </Modal>
                <div className="Log3">
                    <ul>
                        <li className="a"><NavLink to="/admin">管理员</NavLink></li>
                        <li className="a"><NavLink to="/teacher">教师</NavLink></li>
                        <li className="a"><NavLink to="/student">学生</NavLink></li>
                    </ul>
                </div>

            </div>
        )
    }
}
//checked属性是一个布尔属性。checked 属性规定在页面加载时应该被预先选定的元素。
// checked 属性适用于 <input type="checkbox"> 和 <input type="radio">。