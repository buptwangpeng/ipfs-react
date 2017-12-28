/**
 * Created by HuangJinYu on 17/5/31
 * @使用browserHistory实现页面跳转，参数
 * @url:String,要跳转的url,支持相对路径
 * @options:Object
 */

import { browserHistory } from 'react-router';
import localHistory from './historyStack';
export default function jumpPage(url='',options={}){
    let {reload,goback,replace} = options;
    if(goback){
        window.history.go(-1);
    }

    let _rk = Date.parse(new Date());
    if(url[0] != '/'){
        url = '/'+url;
    }
    if (url.indexOf('?')>0){
        url = url+'&_rk='+_rk;
    }else {
        url = url + '?_rk='+_rk;
    }
    localStorage.path = url;

    //将url记录放在本地history栈中保存
    localHistory.push(url);

    if(reload){
        //刷新
        window.location.href = location.origin +url;
    }

    if(replace){
        //替换history
        browserHistory.replace(url);
    }

	browserHistory.push(url);
}


