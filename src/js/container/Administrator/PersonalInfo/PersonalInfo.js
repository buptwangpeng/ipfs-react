import React, {Component} from 'react'
import './PersonalInfo.css'
import '../../../../css/bootstrap.css';
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import getJsonLength from '../../../core/getJsonLength.js'
import {DropdownButton} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {OverlayTrigger} from 'react-bootstrap'


let a = {
    first: "k",
    "1": "wang",
    "2": "li",
    "3": 'bi',
    '4': '4'
};
let d = {'3': '王鹏'};
let c1 = 1
let c2 = c1.toString();
export default class PersonalInfo extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            unlockPassword:'',
            showModal: false
        }
    }

    test1() {
        let MarkNum = parseInt("12"), MarkNumEveryPage;
        if (MarkNum % 5 == 0) {
            MarkNumEveryPage = parseInt(MarkNum / 5)
        } else {
            MarkNumEveryPage = parseInt(MarkNum / 5) + 1
        }
        console.log(MarkNumEveryPage);
        console.log(MarkNum % 5 );

    }

    test2() {
        [1, 2, 3].map((number, index) => {
            console.log([number, index]);

        })
    }

    //字符串分割
    test3() {
        let str = "王一/王二/王三/王四/王五/6"; //这是一字符串
        let strs = []; //定义一数组
        strs = str.split("/"); //字符分割
        console.log(strs);
    }
    test4(){
        console.log(this.state.unlockPassword)
    }

    logUnlockPassword(event) {
        this.setState({
            unlockPassword: event.target.value
        });
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }


    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
                <div style={{background: '#ffffff', height: window.innerHeight - 170}}>
                    <h3>个人信息</h3>
                    <h3>目前尚未开发，敬请期待</h3>
                    {/*<button onClick={() => this.test2()}>点我</button>*/}
                    {/*<select id="test" className="col-md-6 input-lg form-control">*/}
                        {/*<option>陈萍</option>*/}
                        {/*<option>王自健</option>*/}
                        {/*<option>王鹏</option>*/}
                    {/*</select>*/}
                    {/*<div className="col-md-6">*/}
                        {/*<div>*/}
                            {/*<p>点击按钮感受一下弹出的对话框。</p>*/}

                            {/*<Button*/}
                                {/*bsStyle="primary"*/}
                                {/*bsSize="large"*/}
                                {/*onClick={()=>this.open()}*/}
                            {/*>*/}
                                {/*弹出示例对话框*/}
                            {/*</Button>*/}

                            {/*<Modal show={this.state.showModal} onHide={()=>this.close()}>*/}
                                {/*<Modal.Header closeButton>*/}
                                    {/*<Modal.Title>创建区块链账户</Modal.Title>*/}
                                {/*</Modal.Header>*/}
                                {/*<Modal.Body>*/}
                                    {/*<h4>请创建区块链账户</h4>*/}
                                    {/*<div style={{}}*/}
                                         {/*className="input-group input-group-lg">*/}
                                        {/*<input type="password"*/}
                                               {/*className="form-control"*/}
                                               {/*placeholder="解锁密码"*/}
                                               {/*aria-describedby="basic-addon1"*/}
                                               {/*onChange={this.logUnlockPassword.bind(this)}*/}
                                        {/*/>*/}
                                    {/*</div>*/}
                                {/*</Modal.Body>*/}
                                {/*<Modal.Footer>*/}
                                    {/*<Button onClick={()=>this.test4()}>创建区块链账户</Button>*/}
                                    {/*<Button onClick={()=>this.close()}>取消</Button>*/}
                                {/*</Modal.Footer>*/}
                            {/*</Modal>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>

                <Footer/>
            </div>
        )
    }
}