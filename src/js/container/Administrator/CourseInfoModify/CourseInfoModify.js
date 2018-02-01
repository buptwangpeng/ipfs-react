import React, {Component} from 'react'
import './CourseInfoModify.css'
import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import NavSide from '../../../components/AdNavSide/NavSide'
import AdInput from '../../../components/AdInput/AdInput'
import Admin from '../../../core/admin.js'
import getJsonLength from '../../../core/getJsonLength.js'


let length;

export default class AdCourseInfoModify extends Component {
    constructor() {
        super();
        this.state = {
            course_id: '',//课程号
            course_name: '',//课程名称
            academy: '',//面向院系
            grade: '',//面向年级
            new_teacher_id: '',//新任课教师ID
            former_teacher_names: [],//原任课教师姓名  从后台获得的原任课老师（同一课程可能会有多个）
            former_teacher_name: '',//下拉菜单中选定的原任课教师姓名
            former_teacher_ids: {'0': '123', '1': '456'},//原任课教师ID  从后台获得的原任课老师（同一课程可能会有多个）
            former_teacher_id: '',//下拉菜单中选定的原任课教师ID
            course_time: '',//开课时间
            credit: '',//学分
            mark_element: '',//成绩组成
            course_property: '',//课程属性

            key: [],//获取的键值
            tip: '',
        }
    }

    course_id_change(event) {
        this.setState({
            course_id: event.target.value
        });

    }

    course_name_change(event) {
        this.setState({
            course_name: event.target.value
        });

    }

    academy_change(event) {
        this.setState({
            academy: event.target.value
        });

    }

    grade_change(event) {
        this.setState({
            grade: event.target.value
        });

    }

    new_teacher_id_change(event) {
        this.setState({
            new_teacher_id: event.target.value
        });

    }

    course_time_change(event) {
        this.setState({
            course_time: event.target.value
        });

    }

    credit_change(event) {
        this.setState({
            credit: event.target.value
        });

    }

    mark_element_change(event) {
        this.setState({
            mark_element: event.target.value
        });

    }

    course_property_change(event) {
        this.setState({
            course_property: event.target.value
        });

    }

    getValidationState() {
        const length = this.state.course_id.length;
        if (length > 3) return 'error';
        else if (length > 2) return 'success';
        else if (length > 0) return 'error';
    }

    // //测试用例
    // get() {
    //     let loginUrl = 'http://localhost:3005/course';
    //     let self = this;//一定要加上这个，因为在promise里this的作用域变了
    //     this.serverRequest = fetch(loginUrl /*+ '?user=' + self.state.user + '&password=' + self.state.password*/, {
    //         //?和&都要加上
    //         // "http://localhost:3004/list?user=${self.state.user}&password=${self.state.password}"
    //         method: "get",
    //         headers: {
    //             // 'Content-Type': 'application/json'
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     }).then(function (response) {
    //         console.log(response);
    //         response.json().then(function (response) {
    //             console.log(response[1]);
    //             // length = getJsonLength(response[1].teacher_name);
    //             self.setState({
    //                 former_teacher_names: response[1].teacher_name,//申请教师
    //                 former_teacher_ids: response[1].teacher_id,
    //                 course_id: response[1].course_id,//课程号
    //                 course_name: response[1].course_name,//课程名称
    //                 academy: response[1].academy,//面向院系
    //                 grade: response[1].grade,//面向年级
    //                 course_time: response[1].course_time,//开课时间
    //                 credit: response[1].credit,//学分
    //                 mark_element: response[1].mark_element,//成绩组成
    //                 course_property: response[1].course_property,//课程属性
    //             })
    //
    //
    //         })
    //
    //     }, function (e) {
    //         console.log('出错：', e)
    //     })
    // }

    //查询
    button1_change() {
        let self = this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8082/admin/course/info/query/';//接口的地址

        let param = {
            course: {
                course_id: this.state.course_id,//课程号
            }
        };

        admin.queryCourse(url, param).then((response) => {
            let former_teacher_names_arr=[];
            console.log(response);
            length = getJsonLength(response.data.teacher_name);
            for(let i=0;i<length;i++){
                former_teacher_names_arr[i]= response.data.teacher_name[i]
            }
            self.setState({
                former_teacher_names: former_teacher_names_arr,//申请教师
                former_teacher_ids: response.data.teacher_id,
                course_id: response.data.course_id,//课程号
                course_name: response.data.course_name,//课程名称
                academy: response.data.academy,//面向院系
                grade: response.data.grade,//面向年级
                course_time: response.data.course_time,//开课时间
                credit: response.data.credit,//学分
                mark_element: response.data.mark_element,//成绩组成
                course_property: response.data.course_property,//课程属性
            });
            // console.log([self.state.former_teacher_names,self.state.former_teacher_ids])

        });
    }

    //修改提交
    button2_change() {
        let self = this;
        let admin = new Admin();
        let url = 'http://120.79.198.95:8082/admin/course/info/modify/';//接口的地址

        //用于提取下拉框中的值
        let myselect = document.getElementById("test");
        let index = myselect.selectedIndex;
        // let c= myselect.options[index].text;
        let value = myselect.options[index].value;
        console.log(value);
        //
        console.log(this.state.former_teacher_ids[value]);

        //setState()是异步的
        //setState()并不会立即改变this.state，而是创建一个即将处理的state。
        // setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染。
        //如果想使用setState的同步的数据，就要在它的回调函数里执行操作。
        this.setState({
                former_teacher_id: this.state.former_teacher_ids[value]
            },
            () => {
                let param = {
                    course: {
                        teacher_id_change: {
                            former: this.state.former_teacher_id,
                            new: this.state.new_teacher_id
                        },
                        course_id: this.state.course_id,//课程号
                        course_name: this.state.course_name,//课程名称
                        academy: this.state.academy,//面向院系
                        grade: this.state.grade,//面向年级
                        course_time: this.state.course_time,//开课时间
                        credit: this.state.credit,//学分
                        mark_element: this.state.mark_element,//成绩组成
                        course_property: this.state.course_property,//课程属性
                    }
                };

                admin.modifyCourse(url, param).then((response) => {
                    console.log(response);
                    //必须试试response中的this的域还是不是本组件
                    if (response.meta.message == "ok") {
                        self.setState({
                            tip: "该课程信息修改成功"
                        })
                    } else {
                        self.setState({
                            tip: "该课程信息修改失败"
                        })
                    }

                });
            });


        // let param = {
        //     course: {
        //         teacher_id_change: {
        //             former: id,
        //             now: this.state.new_teacher_id
        //         },
        //         course_id: this.state.course_id,//课程号
        //         course_name: this.state.course_name,//课程名称
        //         academy: this.state.academy,//面向院系
        //         grade: this.state.grade,//面向年级
        //         course_time: this.state.course_time,//开课时间
        //         credit: this.state.credit,//学分
        //         mark_element: this.state.mark_element,//成绩组成
        //         course_property: this.state.course_property,//课程属性
        //     }
        // };
        //
        // admin.modifyCourse(url, param).then((response) => {
        //     console.log(response);
        //     //必须试试response中的this的域还是不是本组件
        //     if (response.meta.message == "ok") {
        //         self.setState({
        //             tip: "该课程信息修改成功"
        //         })
        //     } else {
        //         self.setState({
        //             tip: "该课程信息修改失败"
        //         })
        //     }
        //
        // });
    }

    render() {
        return (
            <div style={{background: '#ffffff',paddingBottom:40}}>
                <Header/>
                <div className="row">
                    <div className="col-xs-3 col-md-2 col-lg-2">
                        <div>
                            {/*内联样式style={{}}和className=''不能写在一个div中*/}
                            {/*width:'50%'是指在col-lg-4中占一半*/}
                            <NavSide/>
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-10 col-lg-10">

                        <h3>课程信息查询与修改</h3>
                        <div className=" c_mod_1">
                            <AdInput
                                title="课程编号&#12288;"
                                placeholder="请输入课程编号"
                                value={this.state.course_id}
                                onChange={this.course_id_change.bind(this)}
                            />

                            <Button bsStyle="success" bsSize="large"
                                    className="margin-left_10px "
                                    onClick={() => this.button1_change()}>查询</Button>

                        </div>

                        {/* &#12288; 中文全角空格 （一个中文宽度）  */}
                        <div className="margin-top_50px">
                            <AdInput
                                title="课程编号&#12288;"
                                placeholder="请输入课程编号"
                                value={this.state.course_id}
                                onChange={this.course_id_change.bind(this)}
                            />
                            <AdInput
                                title="课程名称&#12288;"
                                placeholder="请输入课程名称"
                                value={this.state.course_name}
                                onChange={this.course_name_change.bind(this)}
                            />
                            <AdInput
                                title="面向院系&#12288;"
                                placeholder="请输入面向院系"
                                value={this.state.academy}
                                onChange={this.academy_change.bind(this)}
                            />
                            <AdInput
                                title="面向年级&#12288;"
                                placeholder="请输入面向年级"
                                value={this.state.grade}
                                onChange={this.grade_change.bind(this)}
                            />

                            <AdInput
                                title="开课时间&#12288;"
                                placeholder="请输入开课时间"
                                value={this.state.course_time}
                                onChange={this.course_time_change.bind(this)}
                            />
                            <AdInput
                                title="学&#12288;&#12288;分&#12288;"
                                placeholder="请输入学分"
                                value={this.state.credit}
                                onChange={this.credit_change.bind(this)}
                            />
                            <AdInput
                                title="成绩组成&#12288;"
                                placeholder="请输入成绩组成"
                                value={this.state.mark_element}
                                onChange={this.mark_element_change.bind(this)}
                            />
                            <AdInput
                                title="课程属性&#12288;"
                                placeholder="请输入课程属性"
                                value={this.state.course_property}
                                onChange={this.course_property_change.bind(this)}
                            />

                            <div className=" c_mod_2">

                                <AdInput
                                    title="教师编号&#12288;"
                                    placeholder="请输入新任课教师编号"
                                    value={this.state.new_teacher_id}
                                    onChange={this.new_teacher_id_change.bind(this)}

                                />
                                <div>
                                    <select id="test" className="col-md-6 input-lg form-control">
                                        {this.state.former_teacher_names.map((name) => {
                                            // console.log(name);

                                            //获取key值（键值）
                                            let keys = [];
                                            for (let p in name) if (name.hasOwnProperty(p)) keys.push(p);

                                            // console.log(keys[0]);
                                            // console.log(name[keys[0]]);
                                            //

                                            return (
                                                <option key={keys[0]} value={keys[0]}>{name[keys[0]]}</option>
                                            );
                                            //此处有一大坑：如果写成key="key[0]"，则key不会随着key[0]值的改变而改变
                                            //相当于key等于"key[0]"这一串字符，并不是等于key[0]背后代表的值，所以要写成key={keys[0]}
                                        })}
                                    </select>
                                    <span id="helpBlock" className="margin-left_10px help-block">原任课教师</span>
                                </div>

                            </div>


                            <Button bsStyle="success" bsSize="large" className="width_50 margin-top_20px"
                                    onClick={() => this.button2_change()}>提交</Button>
                            <Form inline>
                                <FormGroup bsSize="large" className="">
                                    <ControlLabel><h4>{this.state.tip}</h4></ControlLabel>

                                </FormGroup>
                            </Form>
                        </div>


                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}