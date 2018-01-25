/**
 * Create by HuangYinYu on 17/4/22.
 */


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
                    return response.json().then((data)=>{
                        if(data.meta.code==200){
                            return new Promise(function(resolve,reject){
                                resolve(data)
                            })
                        } else if(data.meta.code==400&&data.meta.message=='NotAuthorized'){
                            // alert("请先登录");
                            window.location.href=location.hostname+"/login"
                        } else if(data.meta.code==500){
                            alert("服务器错误，正在处理中")
                        }
                    }); //promise
                }
            },(error) => {
                throw new Error(`fetch error: ${error}`);
            }
        ).catch(function(err){
            throw new Error(err)
        })
    };
}