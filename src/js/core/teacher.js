// 教师界面接口及顶层公共代码
import Fetch from './fetch';

export default class user extends Fetch {
    constructor() {
        super();
    }
    //设置请求数据中的公共部分
    dataInit(jsondata) {
        console.log(new Date().getTime());
        jsondata.timestamp= new Date().getTime();        
        jsondata.token= localStorage.token;
        jsondata.uid = localStorage.uid;
        // console.log(localStorage.uid);
        return jsondata;
    }

infoquery(urlpath,param){
   return super.globalFetch(urlpath,this.dataInit(param));
}

coursequery(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

coursedetail(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

studentlistquery(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

studentgradesubmit(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

courseapplyquery(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

courseapplysubmit(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

courseadd(urlpath,param){
	return super.globalFetch(urlpath,this.dataInit(param));
}

documentObtain(urlpath,param){
    return super.globalFetch(urlpath,this.dataInit(param));
}

documentdelete(urlpath,param){
    return super.globalFetch(urlpath,this.dataInit(param));
}

getaccount(urlpath,param){
    return super.globalFetch(urlpath,this.dataInit(param));
}

getstudentlist(urlpath,param){
    return super.globalFetch(urlpath,this.dataInit(param));
}
}