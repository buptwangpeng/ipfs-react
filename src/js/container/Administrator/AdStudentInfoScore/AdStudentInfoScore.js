import React, {Component} from 'react'
import './AdStudentInfoScore.css'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { Table } from 'react-bootstrap'

export default class AdStudentInfoScore extends Component{
    constructor(){
        super();
        this.state={
            student_id:'',

        }
    }
    student_id_change(event){
        this.setState({
            student_id:event.target.value
        });
    }
    button1_change(){

    }
    button2_change(){

    }
    button3_change(){

    }
    render() {
        return (
            <div >
                <h3>学生成绩查询与导出</h3>
                    <div className="s_i_s_1">
                        <Form inline>
                                <FormGroup bsSize="large" >
                                    <ControlLabel ><h4>学生学号&#12288;</h4></ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="请输入学号"
                                                 value={this.state.student_id}
                                                 onChange={this.student_id_change.bind(this)}
                                    />
                                </FormGroup>
                        </Form>
                    </div>

                    <ButtonToolbar >
                            <ButtonGroup className="s_i_s_button">
                                <Button  bsStyle="success"  bsSize="large"  onClick={()=>this.button1_change()} >当前学期成绩查询</Button>
                            </ButtonGroup >
                            <ButtonGroup className="s_i_s_button">
                                <Button  bsStyle="success"  bsSize="large"  onClick={()=>this.button2_change()} >所有科目成绩查询</Button>
                            </ButtonGroup>
                            <ButtonGroup className="s_i_s_button">
                                <Button  bsStyle="success"  bsSize="large"  onClick={()=>this.button3_change()} >导出</Button>
                            </ButtonGroup>
                    </ButtonToolbar>
                    <div className="s_i_s_t">
                        {/*condensed 表格缩小
                        bordered 表格里的竖线
                        */}
                        <Table  striped bordered hover>
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
                                <td>Jacob</td>
                                <td>Jacob</td>
                                <td>Jacob</td>
                                <td>Jacob</td>
                                <td>Jacob</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td>Jacob</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Larry the Bird</td>
                                <td >wp</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Jacob</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
            </div>
        )
    }
}