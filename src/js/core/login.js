// 登录界面接口及顶层公共代码
/**
 * Created by wp on 2018/1/18.
 */
import Fetch from './fetch';

export default class user extends Fetch {
	constructor() {
		super();
	}
	//设置请求数据中的公共部分
	dataInit(jsondata) {
        jsondata.timestamp = new Date().getTime();
		jsondata.uid = localStorage.uid;
		jsondata.token= localStorage.token;
		return jsondata;
	}

	login(urlpath, param) {
		return super.globalFetch(urlpath,this.dataInit(param));
	}

}