/**
 * Created by henry on 2018/1/16.
 */
/**
 * Created by HuangJinYu on 2017/3/12.
 * 构造函数参数:
 * param = {
 *      sig_kv:'sig_kv',
 *      skey:'skey',
 *      appName:'appName',
 *      version:'version',
 *      appid:'appid',
 *      platform:'platform'
 * }
 */
import Fetch from './fetch';

export default class Xuser extends Fetch {
	constructor() {
		super();
	}

	//设置请求数据中的公共部分
	dataInit(jsondata) {
		jsondata.uid = localStorage.uid;
		return jsondata;
	}

	login(urlpath, param) {
		return super.globalFetch(urlpath,this.dataInit(param));
	}

}