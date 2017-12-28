/**
 * Created by henry on 2017/7/31.
 * 实现一个history栈
 * 使用Array来模拟栈
 * 本地存储放在sessionStorage
 */

export default {
    getLocalHistory: ()=>{
        if(sessionStorage.history){
            return JSON.parse(sessionStorage.history);
        }else {
            return [];
        }
    },
    push :(url,state={})=>{
        if(sessionStorage.history){
            let currentHistory = JSON.parse(sessionStorage.history);
            currentHistory.push({url:url,state:state});
            sessionStorage.history = JSON.stringify(currentHistory)
        }else {
            sessionStorage.history = JSON.stringify([{url:url,state:state}])
        }
    },
    pop : ()=>{
        if(sessionStorage.history){
            let currentHistory = JSON.parse(sessionStorage.history);
            let popHistory = currentHistory.pop();
            sessionStorage.history = JSON.stringify(currentHistory);
            return popHistory;
        }else {
            return null;
        }
    }
}

