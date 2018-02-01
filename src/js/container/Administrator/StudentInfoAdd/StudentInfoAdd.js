import React, {Component} from 'react'
import './StudentInfoAdd.css'
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
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


export default class AdStudentInfoAdd extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            student_name: '',
            student_gender: '',//male/female
            student_class: '',
            student_grade: '',
            student_major: '',//专业
            student_school: '',
            student_password_log: '',//学生登录本系统的登录密码
            yourAccount:'',
            tip: '',//是否添加成功
            //弹出框
            showModal: false,
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    student_id_change(event) {
        this.setState({
            student_id: event.target.value
        });

    }

    student_name_change(event) {
        this.setState({
            student_name: event.target.value
        });

    }

    student_gender_change(event) {
        this.setState({
            student_gender: event.target.value
        });

    }

    student_class_change(event) {
        this.setState({
            student_class: event.target.value
        });

    }

    student_grade_change(event) {
        this.setState({
            student_grade: event.target.value
        });

    }

    student_school_change(event) {
        this.setState({
            student_school: event.target.value
        });

    }

    student_password_log_change(event) {
        this.setState({
            student_password_log: event.target.value
        });

    }

    student_major_change(event) {
        this.setState({
            student_major: event.target.value
        });

    }
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
                console.log([address0, unlockPassword]);
                //解锁账户  调用web3接口
                let unLockRes = web3.personal.unlockAccount(address0, unlockPassword, 1000 * 60 * 60);
                console.log(unLockRes);

            })
        });

    }


    //单个添加按钮
    button1_change() {
        //解锁区块链账户
        this.unlock();
        let self = this;
        //向后台发送数据
        let admin = new Admin();
        let url = 'http://120.79.198.95:8082/admin/student/info/add/';//接口的地址
        let param = {
            student: {
                student_id: this.state.student_id,//学号
                student_name: this.state.student_name,
                student_gender: this.state.student_gender,//male/female
                student_class: this.state.student_class,
                student_grade: this.state.student_grade,
                student_major: this.state.student_major,//专业
                student_school: this.state.student_school,
                student_password_log: this.state.student_password_log,//登录本系统的登录密码
            }
        };

        // admin.addStudent(url, param).then((response) => {
        //     console.log(response);
        //     //必须试试response中的this的域还是不是本组件
        //     if (response.meta.message == "ok") {
        //         self.setState({
        //             tip: "该学生信息添加成功"
        //         })
        //     } else {
        //         self.setState({
        //             tip: "该学生信息添加失败"
        //         })
        //     }
        // });

        //向合约发送数据，修改区块链上信息
        Study.deployed().then(function (instance) {
            // let meta=instance;
            console.log(instance);
            //加了.call的合约函数不会对链上的信息进行修改，不消耗gas
            //合约添加学生函数（消耗gas，需要挖矿），可以先加上.call试试程序是否跑通，最后再把.call去掉
            return instance.addStuInfo(
                self.state.student_id,
                self.state.student_name,
                self.state.student_class,
                {from: self.state.yourAccount, gas: 1800000});
        }).then(function (response) {
            console.log(response);
            if(response!==null){
                admin.addStudent(url, param).then((response) => {
                    console.log(response);
                    //必须试试response中的this的域还是不是本组件
                    if (response.meta.message == "ok") {
                        self.setState({
                            tip: "该学生信息添加成功"
                        })
                    } else {
                        self.setState({
                            tip: "该学生信息添加失败"
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
            <div style={{background: '#ffffff',/*height: window.innerHeight*/paddingBottom:40}}>
                {/*如果不加上面这个样式，最下边的版权栏会出现问题，待解惑*/}
                <Header/>
                <div className="row ">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div>
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="ad_flexCenter">
                        <div className="col-xs-8 col-md-5 col-lg-5  ">
                            <div className="row ">
                                <div className="col-md-4 col-lg-4 ">
                                    <h3>添加学生</h3>
                                </div>
                                <div className="col-md-2 col-lg-2  margin-top_20px">
                                    <Button bsStyle="success" onClick={() => this.open()}>批量添加</Button>
                                </div>

                            </div>
                            <Modal show={this.state.showModal} onHide={() => this.close()}>
                                <Modal.Header closeButton>
                                    <Modal.Title>批量添加界面</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>目前尚未开发，敬请期待</h4>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => this.close()}>关闭</Button>
                                </Modal.Footer>
                            </Modal>
                            {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                            <div className=" margin-top_20px ">
                                <AdInput
                                    title="学&#12288;&#12288;号&#12288;"
                                    placeholder="请输入学号"
                                    value={this.state.student_id}
                                    onChange={this.student_id_change.bind(this)}
                                />
                                <AdInput
                                    title="姓&#12288;&#12288;名&#12288;"
                                    placeholder="请输入姓名"
                                    value={this.state.student_name}
                                    onChange={this.student_name_change.bind(this)}
                                />
                                <AdInput
                                    title="性&#12288;&#12288;别&#12288;"
                                    placeholder="请输入性别"
                                    value={this.state.student_gender}
                                    onChange={this.student_gender_change.bind(this)}
                                />
                                <AdInput
                                    title="班&#12288;&#12288;级&#12288;"
                                    placeholder="请输入班级"
                                    value={this.state.student_class}
                                    onChange={this.student_class_change.bind(this)}
                                />
                                <AdInput
                                    title="年&#12288;&#12288;级&#12288;"
                                    placeholder="请输入年级"
                                    value={this.state.student_grade}
                                    onChange={this.student_grade_change.bind(this)}
                                />
                                <AdInput
                                    title="专&#12288;&#12288;业&#12288;"
                                    placeholder="请输入专业"
                                    value={this.state.student_major}
                                    onChange={this.student_major_change.bind(this)}
                                />
                                <AdInput
                                    title="学&#12288;&#12288;校&#12288;"
                                    placeholder="请输入学校"
                                    value={this.state.student_school}
                                    onChange={this.student_school_change.bind(this)}
                                />
                                <AdInput
                                    title="登录密码&#12288;"
                                    placeholder="请输入登录密码"
                                    value={this.state.student_password_log}
                                    onChange={this.student_password_log_change.bind(this)}
                                />
                                <Button bsStyle="success" bsSize="large" className="width_100 margin-top_50px"
                                        onClick={() => this.button1_change()}>提交</Button>
                                <label><h4>{this.state.tip}</h4></label>
                                {/*位置需要改*/}

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>

            </div>
        )
    }
}