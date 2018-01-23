import React, {Component} from 'react'
import NavLink from '../../components/AdNavLink/NavLink'
import LoginHeader from './LoginHeader/LoginHeader'
import User from '../../core/login.js'
import jumpPage from '../../core/jumpPage.js'
import './LogIn.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

export default class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            //登录
            user: '',
            password: '',

        };
    }

    logAccount(event) {
        this.setState({
            user: event.target.value
        });
    }

    logPassword(event) {
        this.setState({
            password: event.target.value
        });
    }

//登录真正用的函数
    logIn1() {
        let user = new User();
        let url = 'http://localhost:3004/list';//接口的地址
        let param = {account: this.state.user, password: this.state.password};
        user.login(url, param).then((response) => {
            console.log(response);
            localStorage.setItem(uid, response.data.uid);
            localStorage.setItem(token, response.data.token);
            localStorage.setItem(name,response.data.name);
            if (response.data.type == "student") {
                jumpPage('/student')
            } else if (response.data.type == "teacher") {
                jumpPage('/teacher')
            } else {
                jumpPage('/admin')
            }


            //还可以用switch语句
            // data.map((item)=>{
            //     if(item.type=="student"){
            //         jumpPage('/student')
            //     }
            //     if(item.type=="teacher"){
            //         jumpPage('/teacher')
            //     }else{
            //         jumpPage('/administrator')
            //     }
        });

    };

    render() {
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