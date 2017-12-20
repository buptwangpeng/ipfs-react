import React, {Component} from 'react';
import  'whatwg-fetch';
import 'core-js/es6/promise';
import {render} from 'react-dom';
class Check extends Component{
    constructor() {
        super();
        this.state={
            s_id: 0,
            s_name: '',
            s_tel:''
        };
    }
//componentDidMount : 在第一次渲染后调用，只在客户端。
//React 组件的数据可以通过 componentDidMount 方法中的fetch 来获取，当从服务端获取数据库可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。
    componentDidMount() {
        let self = this;
        this.serverRequest=fetch(this.props.source, {
            method: "get"
        }).then(function (response) {
            console.log(response);
            console.log(response.ok);
            if(response.ok){
                response.json().then(function(jsonData){
                    console.log(jsonData);
                    let lastGist = jsonData[0];
                    self.setState({
                        s_id: lastGist.id,
                        s_name: lastGist.name,
                        s_tel: lastGist.tel
                });})
            }else{
                    console.log('请求失败，状态码为', response.status);
                }
            //return response.json();
        },function (e) {
            console.log('出错：',e)
        })
    }
//componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。
    componentWillUnmount() {
        this.serverRequest.abort();
    }



    render(){
        return(
            <div>
                {this.state.s_id}<br/>{this.state.s_name}<br/>{this.state.s_tel}
            </div>


        )

    }
}
export default Check