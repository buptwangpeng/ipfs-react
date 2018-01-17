import React, {Component} from 'react'
import NavLink from '../../components/AdNavLink/NavLink'
import User from '../../core/user.js'
import jumpPage from '../../core/jumpPage.js'
import './LogIn.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Checkbox} from 'react-bootstrap'
import {Link} from 'react-router'
import {ListGroup} from 'react-bootstrap'
import {ListGroupItem} from 'react-bootstrap'

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
            // });

        })
    };

    render() {
        return (
            <div className="Log0">
                <h1 className="Log1">登录界面</h1>
                <div className="Log2">
                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                账号
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="账号" value={this.state.user}
                                             onChange={this.logAccount.bind(this)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                密码
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" placeholder="密码" value={this.state.password}
                                             onChange={this.logPassword.bind(this)}/>
                            </Col>
                        </FormGroup>

                        {/*<FormGroup>*/}
                        {/*<Col smOffset={2} sm={10}>*/}
                        {/*<input type="radio" name="sex" value="Ad"/> 管理员*/}
                        {/*<input type="radio" name="sex" value="Te"/> 教师*/}
                        {/*<input type="radio" name="sex" value="St"/> 学生*/}
                        {/*</Col>*/}
                        {/*</FormGroup>*/}

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button onClick={() => this.logIn2()}>
                                    登录
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
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
//checked属性是一个布尔属性。checked 属性规定在页面加载时应该被预先选定的 <input> 元素。
// checked 属性适用于 <input type="checkbox"> 和 <input type="radio">。