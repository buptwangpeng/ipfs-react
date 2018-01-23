// 管理员界面接口及顶层公共代码
/**
 * Created by HuangJinYu on 2017/3/12.
 */
import Fetch from './fetch';

export default class user extends Fetch {
    constructor() {
        super();
    }
    //设置请求数据中的公共部分
    dataInit(jsondata) {
        jsondata.timestamp = new Date().getTime();
        jsondata.token= localStorage.token;
        jsondata.uid = localStorage.uid;
        return jsondata;
    }

    addStudent(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    queryStudent(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    modifyStudent(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    addTeacher(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    queryTeacher(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    modifyTeacher(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    queryTeacherApply(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    approveTeacherApply(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    addCourse(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    queryCourse(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    modifyCourse(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    addAdministrator(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    queryAdministrator(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
    modifyAdministrator(urlpath, param) {
        return super.globalFetch(urlpath,this.dataInit(param));
    }
}