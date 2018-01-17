import React, {Component} from 'react'
import './StudentInfoScore.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {ButtonToolbar} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'


export default class AdStudentInfoScore extends Component {
    constructor() {
        super();
        this.state = {
            student_id: '',
            course_id_1: '',
            course_id_2: '',
            course_id_3: '',
            credit_1: '',
            credit_2: '',
            credit_3: '',
            course_id_1_property: '',
            course_id_2_property: '',
            course_id_3_property: '',
            course_id_1_time: '',
            course_id_2_time: '',
            course_id_3_time: '',
            mark_1: '',
            mark_2: '',
            mark_3: '',
            showModal: false//弹出框

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

    button1_change() {

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
                        <div style={{background: '#dcdcdc', width: '100%', height: window.innerHeight-100, margin: '0', padding: '0'}}>
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

                            <ButtonToolbar className="margin-top_50px">
                                <ButtonGroup >
                                    <Button bsStyle="success" bsSize="large" onClick={() => this.button1_change()}>当前学期成绩查询</Button>
                                </ButtonGroup>
                                <ButtonGroup >
                                    <Button bsStyle="success" bsSize="large" onClick={() => this.button2_change()}>所有科目成绩查询</Button>
                                </ButtonGroup>
                                <ButtonGroup >
                                    <Button bsStyle="success" bsSize="large" onClick={() => this.open()}>导出</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

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

                            <div className="s_i_s_t">
                                {/*condensed 表格缩小
                        bordered 表格里的竖线
                        */}
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>课程编号</th>
                                        <th>课程名</th>
                                        <th>学分</th>
                                        <th>课程属性</th>
                                        <th>开课学期</th>
                                        <th>得分</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{this.state.course_id_1}</td>
                                        <td>{this.state.credit_1}</td>
                                        <td>{this.state.course_id_1_property}</td>
                                        <td>{this.state.course_id_1_time}</td>
                                        <td>{this.state.mark_1}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{this.state.course_id_2}</td>
                                        <td>{this.state.credit_2}</td>
                                        <td>{this.state.course_id_2_property}</td>
                                        <td>{this.state.course_id_2_time}</td>
                                        <td>{this.state.mark_2}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>{this.state.course_id_3}</td>
                                        <td>{this.state.credit_3}</td>
                                        <td>{this.state.course_id_3_property}</td>
                                        <td>{this.state.course_id_3_time}</td>
                                        <td>{this.state.mark_3}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}