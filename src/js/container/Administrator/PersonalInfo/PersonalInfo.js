import React, {Component} from 'react'
import './PersonalInfo.css'
import Header from '../../../components/AdHeader/Header'
import Footer from '../../../components/AdFooter/Footer'
import getJsonLength from '../../../core/getJsonLength.js'

let a= {
    first:"k",
    "1": "wang",
    "2": "li",
    "3": 'bi',
    '4': '4'
};
let d={'3':'王鹏'};
let c1=1
let c2=c1.toString();
export default class PersonalInfo extends Component {
    constructor() {
        super();
        this.state = {
              name:''
        }
    }

    test1(){
        let b=getJsonLength(a);
        console.log(b);
        console.log(a.c2);
        console.log(a[1]);
        console.log(d[3]);

    }
test2(){

}
    render(){
        return(
            <div style={{background: '#ffffff', height: window.innerHeight}}>
                <Header/>
            <div style={{background: '#ffffff', height: window.innerHeight-170}}>
                <h3>个人信息(目前本页面用于测试一些函数)</h3>
                <button onClick={()=>this.test2()}>点我</button>
                <select id="test"  className="col-md-6 input-lg form-control">
                    <option>陈萍</option>
                    <option>王自健</option>
                    <option>王鹏</option>
                </select>
            </div>
                <Footer/>
            </div>
        )
    }
}