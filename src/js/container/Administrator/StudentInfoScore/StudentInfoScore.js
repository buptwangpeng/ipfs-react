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

export default class AdStudentInfoScore extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            courses:[],
            courseIndex: 0,


            showModal: false,//弹出框
            semester:[],
            pages: 2,
            pagesArr:[],

        }
    }

    student_id_change(event) {
        this.setState({
            student_id: event.target.value
        });
    }

    getValidationState() {
        const length = this.state.student_id.length;
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


    //测试用例
    get(a) {
        let loginUrl = 'http://localhost:3005/mark';
        let self = this;//一定要加上这个，因为在promise里this的作用域变了
        this.serverRequest = fetch(loginUrl , {

            method: "get",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            let arr=[];
            console.log(response);
            response.json().then(function (response) {
                console.log(response[a]);
                self.setState({
                    courses: response[a],
                });
                for(let i=0;i<=self.state.pages-1;i++){
                    arr[i]=i+1;
                }
                console.log(arr);
                self.setState({
                    pagesArr:arr,
                });
                console.log(self.state.pagesArr);

            })

        }, function (e) {
            console.log('出错：', e)
        })
    }
//特定学期成绩查询
    OneSemesterMarkQuery() {
        //用于提取下拉框中的值
        let myselect = document.getElementById("test");
        let index = myselect.selectedIndex;
        // let c= myselect.options[index].text;
        let value = myselect.options[index].value;
        this.get(1);
    }

    button2_change() {

        if (this.state.student_id === '2017140013') {
            this.setState({
                course_id_1: '通信原理',
                course_id_2: '通信原理硬件实验',
                course_id_3: '通信原理软件实验',
                credit_1: '5',
                credit_2: '3',
                credit_3: '3',
                course_id_1_property: '必修',
                course_id_2_property: '必修',
                course_id_3_property: '必修',
                course_id_1_time: '1',
                course_id_2_time: '1',
                course_id_3_time: '2',
                mark_1: '90',
                mark_2: '95',
                mark_3: '93',
            });
        }
    }

    render() {
        return (
            <div style={{background: '#ffffff', height: window.innerHeight}}>

                <Header/>
                <div className="row">
                    <div className="col-xs-4 col-md-2 col-lg-2">
                        <div>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            <NavSide/>
                        </div>
                    </div>

                    <div className="col-xs-8 col-md-10 col-lg-10">
                        <div>
                            <h3>学生成绩查询与导出</h3>
                            <div className="margin-top_20px">
                                <Form inline>
                                    <FormGroup bsSize="large" controlId="formBasicText"
                                               validationState={this.getValidationState()}>
                                        <ControlLabel><h4>学生学号&#12288;</h4></ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="请输入学号"
                                                     value={this.state.student_id}
                                                     onChange={this.student_id_change.bind(this)}
                                        />
                                    </FormGroup>
                                </Form>
                            </div>
                        <div className="row margin-top_20px">
                            <div className="col-md-3">
                            <select id="test" className=" input-lg form-control">
                                <option key={7} value={7}>2018春季学期</option>
                                <option key={8} value={8}>2018秋季学期</option>
                                {this.state.semester.map((name) => {
                                    //获取key值（键值）
                                    let keys = [];
                                    for (let p in name) if (name.hasOwnProperty(p)) keys.push(p);
                                    return (
                                        <option key={keys[0]} value={keys[0]}>{name[keys[0]]}</option>
                                    );
                                    //此处有一大坑：如果写成key="key[0]"，则key不会随着key[0]值的改变而改变
                                    //相当于key等于"key[0]"这一串字符，并不是等于key[0]背后代表的值，所以要写成key={keys[0]}
                                })}
                            </select>
                                <span id="helpBlock" className="margin-left_10px help-block">选择学期</span>
                            </div>
                        <div className="col-md-8">
                            <ButtonToolbar className="">
                                <ButtonGroup >
                                    <Button bsStyle="success" bsSize="large" onClick={() => this.OneSemesterMarkQuery()}>成绩查询</Button>
                                </ButtonGroup>
                                <ButtonGroup >
                                    <Button bsStyle="success" bsSize="large" onClick={() => this.button2_change()}>所有科目成绩查询</Button>
                                </ButtonGroup>
                                <ButtonGroup >
                                    <Button bsStyle="success" bsSize="large" onClick={() => this.open()}>导出</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
                        </div>

                            <Modal show={this.state.showModal} onHide={() => this.close()}>
                                <Modal.Header closeButton>
                                    <Modal.Title>导出界面</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>导出成绩单</h4>
                                    <p>导出所有科目成绩</p>


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
                                            this.get(this.state.courseIndex+1)
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
                                                            this.get(index+1)
                                                        })
                                                    }}><a>{page}</a></li>
                                            )
                                        })
                                    }

                                    <li onClick={() => {
                                        this.setState({
                                            courseIndex: this.state.courseIndex + 1 <= this.state.pages-1? this.state.courseIndex + 1 : this.state.pages-1
                                        }, () => {
                                            // this.query(this.state.courseIndex)
                                            this.get(this.state.courseIndex+1);
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