// 学生界面接口及顶层公共代码
/**
 * Created by wp on 2018/1/29.
 */

import Fetch from './fetch';

export default class student extends Fetch {
    constructor() {
        super();
    }
    //设置请求数据中的公共部分
    dataInit(jsondata) {
        jsondata.timestamp = new Date().getTime();
        jsondata.token= localStorage.token;
        jsondata.uid = localStorage.uid;
        console.log(localStorage.uid);
        return jsondata;
    }


    queryAddressPassword(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    queryCourseList(urlpath, param) {
        return super.globalFetch(urlpath, this.dataInit(param));
    }
    getstudentid(urlpath, param) {
        return super.globalFetch(urlpath, this.dataInit(param));
    }
    getaccount(urlpath, param) {
        return super.globalFetch(urlpath, this.dataInit(param));
    }
    choosecourse(urlpath,param) {
        return super.globalFetch(urlpath, this.dataInit(param));
    }
}