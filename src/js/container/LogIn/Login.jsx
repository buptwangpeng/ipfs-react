import React, {Component} from 'react'
import NavLink from '../../components/AdNavLink/NavLink'
import LoginHeader from './LoginHeader/LoginHeader'
import User from '../../core/user.js'
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

//jsonServer上测试的函数
    logIn1() {
        let loginUrl = 'http://localhost:3004/list';
        let self = this;
        this.serverRequest = fetch(loginUrl /*+ '?user=' + self.state.user + '&password=' + self.state.password*/, {
            //?和&都要加上
            // "http://localhost:3004/list?user=${self.state.user}&password=${self.state.password}"
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
            console.log(response);
            response.json().then(function (jsonData) {
                console.log(jsonData);
                let a = jsonData[0];
                if (a.name == "student") {
                    jumpPage('/student')
                }
                if (a.name == "teacher") {
                    jumpPage('/teacher')
                } else {
                    jumpPage('/administrator')
                }

            })

        }, function (e) {
            console.log('出错：', e)
        })

    };

//登录真正用的函数
    logIn2() {
        let self = this;
        let user = new User();
        let url = 'http://localhost:3004/list';

        let param = {account: self.state.user, password: self.state.password};
        user.login(url, param).then((data) => {
            console.log(data);
            user.login(url, param).then((data) => {
                console.log(data);
                if (data.type == "student") {
                    jumpPage('/student')
                } else {
                    if (data.type == "teacher") {
                        jumpPage('/teacher')
                    } else {
                        jumpPage('/admin')
                    }
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

        })
    };

    render() {
        return (
            <div style={{height: window.innerHeight}}
                 className="Log0">
                <LoginHeader/>
                <div className="row login_flexCenter">
                    <div
                        style={{height: window.innerHeight - 100, padding: 40}}
                        className=" col-xs-6 col-md-6">


                        <div className="margin-top_200">
                            <div className="col-xs-12 col-md-12">
                                <icon className=" login-icon-container col-xs-2 col-md-2 iconfont"
                                      style={{fontSize: '40px'}}>&#xe628;</icon>
                                <div className="col-xs-8 col-md-8 margin-top_5px">
                                    <div
                                        style={{}}
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
                                <button style={{backgroundColor: '#20b18a'}} type="button" className="btn  btn-lg" onClick={() => this.logIn2()}>登录</button>
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