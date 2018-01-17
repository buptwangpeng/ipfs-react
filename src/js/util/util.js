/**
 * Created by wp on 18/1/16.
 * 所有的工具类都在这里管理
 * URL
 * Security
 *
 */
import CryptoJS from "crypto-js";
//queryString 将json数据进行了排序
export let queryString = function (obj){
    let string = '';
    for (let key in obj){
        string += '&'+encodeURIComponent(key)+'='+encodeURIComponent(obj[key]);
    }
    return string.substring(1,string.length);
}

export  let Security  = {
    signature:function(data,skey){
        return CryptoJS.HmacSHA256(data,skey).toString();
    },
    MD5:function(msg){
        return CryptoJS.MD5(msg).toString();
    }
}

var Util={
    /**
     * ******************************************************URL相关*****************************************************
     * urlEncode and urlDecode
     */
    Url:{
        urlEncode:function(url)
        {
            var output = '';
            var x = 0;

            url = utf16to8(url.toString());
            var regex = /(^[a-zA-Z0-9-_.]*)/;

            while (x < url.length)
            {
                var match = regex.exec(url.substr(x));
                if (match != null && match.length > 1 && match[1] != '')
                {
                    output += match[1];
                    x += match[1].length;
                }
                else
                {
                    if (url[x] == ' ')
                        output += '+';
                    else
                    {
                        var charCode = url.charCodeAt(x);
                        var hexVal = charCode.toString(16);
                        output += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();
                    }
                    x++;
                }
            }

            function utf16to8(str)
            {
                var out, i, len, c;

                out = "";
                len = str.length;
                for(i = 0; i < len; i++)
                {
                    c = str.charCodeAt(i);
                    if ((c >= 0x0001) && (c <= 0x007F))
                    {
                        out += str.charAt(i);
                    }
                    else if (c > 0x07FF)
                    {
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                    else
                    {
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                }
                return out;
            }

            return output;
        },
        urlDecode:function(encodedUrl){
            return decodeURI(encodedUrl);
        },
        getUrlParam:function(){
            var url = window.location.search; //获取url中"?"符后的字串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                var strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        },
        resetParam:function(){
            var arr = [];
            var p = '';
            var param = this.getUrlParam();
            for(var item in param){
                arr.push(item);
            }
            for(var i =0;i<arr.length;i++){
                if (i==0 && arr[i]!='code'){
                    p = p+arr[i]+'=' +param[arr[i]];
                }else if(i>0 && arr[i]!='code') {
                    p = p+ '&'+arr[i]+'=' +param[arr[i]];
                }
            }
            if(p){
                return p;
            }else {
                return ""
            }
        },
        backTitle:function(){
            console.log(this.getUrlParam().backTitle)
            return this.urlDecode(this.getUrlParam().backTitle || '返回') ;
        },
        isWechat:function(){
            //检测请求是否来自微信
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                return true;
            }else{
                return false;
            }
        }

    },
    /**
     * *******************************************************安全相关***************************************************
     * signature 获取消息签名
     */

    /**
     * *******************************************************平台相关***************************************************
     * getPlatform 获取终端类型
     */
    Platform:{
        getPlatform: function () {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs ) {
                return "IOS";
            } else if(bIsAndroid) {
                return "android";
            }else{
                return "webapp";
            }
        }
    },
    /**
     * *******************************************************输入框校验相关**********************************************
     * checkTel 检测手机号
     */

};
export default Util;