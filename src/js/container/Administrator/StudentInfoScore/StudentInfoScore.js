import React, {Component} from 'react'
import './StudentInfoScore.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {ButtonToolbar} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import ListItem from './ListItem/ListItem.js'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'

//智能合约引入和声明部分
import {default as Web3} from 'web3'
import {default as contract} from 'truffle-contract'
import study_artifacts from '../../../../../build/contracts/studyData.json'

let Study = contract(study_artifacts);
let StudyProvider = new Web3.providers.HttpProvider("http://localhost:8545");
Study.setProvider(StudyProvider);
let web3 = new Web3(StudyProvider);//创建web3对象，需要新创建对象，后面才能调用
//

export default class AdStudentInfoScore extends Component {
    constructor() {
        super();
        this.state = {
            studentId: '',
            courses: [],
            courseIndex: 0,

            showModal: false,//弹出框
            // semester:[],//显示在下拉框中的学期
            pages: 2,
            pagesArr: [],

            //智能合约相关state
            courseNames: [],//所有课程名
            terms: [],//所有的开课学期
            compulsorys: [],//必修/选修
            credits: [],//所有的学分
            marks: [],//所有的成绩
        }
    }

    studentId_change(event) {
        this.setState({
            studentId: event.target.value
        });
    }

    getValidationState() {
        const length = this.state.studentId.length;
        if (length > 10) return 'error';
        else if (length > 9) return 'success';
        else if (length > 0) return 'error';
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }


    // //测试用例
    // get(a) {
    //     let loginUrl = 'http://localhost:3005/mark';
    //     let self = this;//一定要加上这个，因为在promise里this的作用域变了
    //     this.serverRequest = fetch(loginUrl, {
    //
    //         method: "get",
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     }).then(function (response) {
    //         console.log(response);
    //         response.json().then(function (response) {
    //             console.log(response[a]);
    //             self.setState({
    //                 courses: response[a],
    //             });
    //             let arr = [];
    //             for (let i = 0; i <= self.state.pages - 1; i++) {
    //                 arr[i] = i + 1;
    //             }
    //             console.log(arr);
    //             self.setState({
    //                 pagesArr: arr,
    //             });
    //             console.log(self.state.pagesArr);
    //
    //         })
    //
    //     }, function (e) {
    //         console.log('出错：', e)
    //     })
    // }

//特定学期成绩查询(目前合约实现起来有困难，计划推后实现)
    OneSemesterMarkQuery() {
        //用于提取下拉框中的值
        let myselect = document.getElementById("test");
        let index = myselect.selectedIndex;
        // let c= myselect.options[index].text;
        let value = myselect.options[index].value;
        this.get(1);
    }

    //全部成绩查询按钮
    AllMarkQuery() {

        Study.deployed().then( function (instance) {
            return instance.getStuMarkNum .call(self.state.studentId);//获取学生成绩数据总条数 （不消耗gas,不需要挖矿）
        }).then ( function (response) {
            console.log(response);
            //临时的变量，假设这些是合约返回的数据，接收到合约的数据后，删除

            let MarkNum=parseInt("9"),MarkNumEveryPage;
            if(MarkNum%5==0){
                MarkNumEveryPage=parseInt(MarkNum/5)
            }else{
                MarkNumEveryPage=parseInt(MarkNum/5)+1
            }

            let arr = [];
            for (let i = 0; i <= MarkNumEveryPage - 1; i++) {
                arr[i] = i + 1;
            }
            console.log(arr);
            self.setState({
                pagesArr: arr,
            });
        }).catch ( function (e) {
            console.log(e);
        });
        this.MarkQuery(1);
    }
//全部成绩查询按钮
    MarkQuery(a) {
        let self = this;

        Study.deployed().then(function (instance) {
            let termNumber=parseInt("0"),infoNumber=parseInt("5");
            //调用合约里的查询成绩函数，返回某一页的数据 （不消耗gas,不需要挖矿）
            return instance.getStuMark.call(self.state.studentId,termNumber,a,infoNumber);
        }).then(function (response) {
            console.log(response);
            //临时的变量，假设这些是合约返回的数据，接收到合约的数据后，删除
            let courseNames = "", //拼接string
                terms = [],
                compulsorys = [],
                credits = [],  //按比例乘1000
                marks = []; //按比例乘1000

            //bool数据数组转换成字符串数组
            let compulsoryChars = [];//将true/false转换成"必修"/"选修"
            for (let i = 0; i < compulsorys.length; i++) {
                if (compulsorys[i] == true) {
                    compulsoryChars[i] = "必修"
                } else {
                    compulsoryChars[i] = "选修"
                }
            }
            //
            //整型数组转换成字符串数组（credits=[],marks=[],terms=[]）
            let creditStrings = [], markStrings = [],termStrings=[];
            for (let i = 0; i < credits.length; i++) {
                credits[i]=credits[i]/1000;
                marks[i]=marks[i]/1000;
                creditStrings[i] = credits[i].toString();
                markStrings[i] = marks[i].toString();
                termStrings[i] = terms[i].toString();
            }
            //整型数组转换成字符串数组(terms=[]需要做映射)
            // 学期号格式(uint)(十进制数XYZW)(前两位本科/研究生，第三位年级，第四位上下学期)
            // XY：00-本科，01-研究生
            // Z：数字表示年级(最小是1)
            // W：0-上学期,1-下学期
            // 例如：本科大三上半年即为0030，研究生二年级下半年为0121
            let termChars=[];
            for (let i = 0; i < termStrings.length; i++) {
                if(termStrings[i]=="0010"){
                    termChars[i]="大一上学期"
                }else if(termStrings[i]=="0011"){
                    termChars[i]="大一下学期"
                }else if(termStrings[i]=="0020"){
                    termChars[i]="大二上学期"
                }else if(termStrings[i]=="0021"){
                    termChars[i]="大二下学期"
                }else if(termStrings[i]=="0030"){
                    termChars[i]="大三上学期"
                }else if(termStrings[i]=="0031"){
                    termChars[i]="大三下学期"
                }else if(termStrings[i]=="0040"){
                    termChars[i]="大四上学期"
                }else if(termStrings[i]=="0041"){
                    termChars[i]="大四下学期"
                }
            }

            self.setState({
                courseNames: courseNames.split("/"),
                terms: termChars,
                compulsorys: compulsoryChars,
                credits: creditStrings,
                marks: markStrings,
            }, () => {
                let arr = [];
                for (let i = 0; i < self.state.courseNames.length; i++) {
                    arr[i] = {
                        course_name: self.state.courseNames[i],
                        course_semester: self.state.terms[i],
                        course_property: self.state.compulsorys[i],
                        course_credit: self.state.credits[i],
                        course_mark: self.state.marks[i],
                    }
                }
                self.setState({
                    courses: arr
                })
            });

        }).catch(function (e) {
            console.log(e);
        })
    }

    render() {
        return (
            <div style={{background: '#ffffff', paddingBottom:40}}>

                <Header/>
                <div className="row" >
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>

                    <div className="col-xs-9 col-md-10 col-lg-10">
                        <div>
                            <h3>学生成绩查询与导出</h3>
                            <div className="margin-top_20px">
                                <Form inline>
                                    <FormGroup bsSize="large" controlId="formBasicText"
                                               validationState={this.getValidationState()}>
                                        <ControlLabel><h4>学生学号&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="请输入学号"
                                                     value={this.state.studentId}
                                                     onChange={this.studentId_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="row margin-top_20px">
                                <div className="col-md-3">
                                    <select id="test" className=" input-lg form-control">
                                        <option key={1} value={1}>大一上学期</option>
                                        <option key={2} value={2}>大一下学期</option>
                                        <option key={3} value={3}>大二上学期</option>
                                        <option key={4} value={4}>大二下学期</option>
                                        <option key={5} value={5}>大三上学期</option>
                                        <option key={6} value={6}>大三下学期</option>
                                        <option key={7} value={7}>大四上学期</option>
                                        <option key={8} value={8}>大四下学期</option>
                                        {/*{this.state.semester.map((name) => {*/}
                                        {/*//获取key值（键值）*/}
                                        {/*let keys = [];*/}
                                        {/*for (let p in name) if (name.hasOwnProperty(p)) keys.push(p);*/}
                                        {/*return (*/}
                                        {/*<option key={keys[0]} value={keys[0]}>{name[keys[0]]}</option>*/}
                                        {/*);*/}
                                        {/*//此处有一大坑：如果写成key="key[0]"，则key不会随着key[0]值的改变而改变*/}
                                        {/*//相当于key等于"key[0]"这一串字符，并不是等于key[0]背后代表的值，所以要写成key={keys[0]}*/}
                                        {/*})}*/}
                                    </select>
                                    <span id="helpBlock" className="margin-left_10px help-block">选择学期</span>
                                </div>
                                <div className="col-md-8">
                                    <ButtonToolbar className="">
                                        <ButtonGroup>
                                            <Button bsStyle="success" bsSize="large"
                                                    onClick={() => this.OneSemesterMarkQuery()}>成绩查询</Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button bsStyle="success" bsSize="large"
                                                    onClick={() => this.AllMarkQuery()}>所有科目成绩查询</Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button bsStyle="success" bsSize="large"
                                                    onClick={() => this.open()}>导出</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </div>
                            </div>

                            <Modal show={this.state.showModal} onHide={() => this.close()}>
                                <Modal.Header closeButton>
                                    <Modal.Title>导出界面</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>目前尚未开发，敬请期待</h4>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => this.close()}>关闭</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="col-xs-8 col-md-8 col-lg-8  ">
                            <div style={{
                                padding: '10px 0',
                                width: "100%",
                                margin: '0 auto',
                                background: '#fff',
                                // height: window.innerHeight - 300
                            }}>
                                <ListItem
                                    course_name='课程名称'
                                    course_semester='开课学期'
                                    course_credit='学分'
                                    course_mark='成绩'
                                    course_property='课程属性'
                                />
                                {this.state.courses.map((course, index) => {
                                    return (
                                        <ListItem
                                            key={course.course_id}
                                            // key是react里的，相同key的项目只会在界面上显示一个，一般给key赋值id就行了
                                            course_name={course.course_name}
                                            course_semester={course.course_semester}
                                            course_property={course.course_property}
                                            course_credit={course.course_credit}
                                            course_mark={course.course_mark}
                                        />
                                    )
                                })}
                            </div>
                            <nav aria-label="Page navigation" style={{float: 'right', marginRight: '17%'}}>
                                <ul className="pagination">
                                    <li onClick={() => {
                                        this.setState({
                                            courseIndex: this.state.courseIndex - 1 >= 0 ? this.state.courseIndex - 1 : 0
                                        }, () => {
                                            // this.query(this.state.courseIndex)
                                            this.get(this.state.courseIndex + 1)
                                            // this.setState({
                                            //     courses: courses[this.state.courseIndex]
                                            // })
                                        })

                                    }}>
                                        <a href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    {
                                        this.state.pagesArr.map((page, index) => {
                                            return (
                                                // 索引是从0开始的
                                                <li
                                                    key={index}
                                                    className={this.state.courseIndex == index ? "active" : ''}
                                                    onClick={() => {
                                                        this.setState({
                                                            // courses: courses[index],
                                                            courseIndex: index
                                                        }, /*() => {
                                                        this.query(index)
                                                    }*/() => {
                                                            this.get(index + 1)
                                                        })
                                                    }}><a>{page}</a></li>
                                            )
                                        })
                                    }

                                    <li onClick={() => {
                                        this.setState({
                                            courseIndex: this.state.courseIndex + 1 <= this.state.pages - 1 ? this.state.courseIndex + 1 : this.state.pages - 1
                                        }, () => {
                                            // this.query(this.state.courseIndex)
                                            this.get(this.state.courseIndex + 1);
                                            // this.setState({
                                            //     courses: courses[this.state.courseIndex]
                                            // })
                                        })
                                    }}>
                                        <a aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}