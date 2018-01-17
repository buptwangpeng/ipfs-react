/**
 * Create by HuangYinYu on 17/4/22.
 */
// 请求数据必须参数：timestamp,jsondata,sig_kv,signature,isgzip
// 这里的signature是对timestamp和jsondata连接后的字符串

import {queryString} from '../util/util'
import 'whatwg-fetch';
export default class Fetch{
    constructor(){}
	getHeaders() {
		return {
			'Content-Type': 'application/x-www-form-urlencoded',
			// 'User-Agent'   : this.appName+"/"+this.platform+"/"+this.appid+"/"+this.version
		};
	}
    globalFetch(host,jsondata){
        let param = {
            method : 'POST',
            headers: new Headers(this.getHeaders()),
            cash   : 'no-cash',
            mode   : 'cors',
            body   : /*queryString(*/JSON.stringify(jsondata)/*)*/
        };
        return fetch(host,param).then(
            (response) => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }else {
                    return response.json(); //promise
                }
            },(error) => {
                throw new Error(`fetch error: ${error}`);
            }
        ).catch(function(err){
            throw new Error(err)
        })
    };
}