import React, {Component} from 'react'
import NavLink from '../../components/NavLink/NavLink'
import './LogIn.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Checkbox } from 'react-bootstrap'
import { Link } from 'react-router'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'


export default class LogIn extends Component{
    constructor(){
        super();
        this.state={
            //登录
            value2:'',
            value1:'',

        };
    }
    logAccount(event) {

        this.setState({
            value1: event.target.value
        });
    }
    logPassword(event){
        this.setState({
            value2:event.target.value
        });
    }
    render() {
        return (
            <div className="Log0">
                <h1 className="Log1">登录界面</h1>
                <div  className="Log2">
                    <Form horizontal>
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>
                                账号
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="账号" value={this.state.value1} onChange={this.logAccount.bind()} />
                            </Col>
                        </FormGroup>

                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>
                                密码
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" placeholder="密码" value={this.state.value2} onChange={this.logPassword.bind()} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <input type="radio" name="sex" value="Ad" /> 管理员
                                <input type="radio" name="sex" value="Te" /> 教师
                                <input type="radio" name="sex" value="St"/> 学生
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit">
                                    登录
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    {/*<input type="radio" name="sex" value="Ad" /> 管理员*/}
                    {/*<input type="radio" name="sex" value="Te" /> 教师*/}
                    {/*<input type="radio" name="sex" value="St"/> 学生*/}
                    {/*<input type="submit" value="提交"/>*/}
                </div>

                <div className="Log3">
                    <ul >
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