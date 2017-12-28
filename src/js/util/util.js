/**
 * Created by henry on 16/5/21.
 * 所有的工具类都在这里管理
 * URL
 * Security
 *
 */
import CryptoJS from "crypto-js";
import {skey} from '../core/config'
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
    Security:{
        getSkey:function(){
            var _skey = ["","daea4d3d187ea5dbe2298bff6aff80ea","ske2"];
            return _skey;
        },
        signature:function(data){
            return CryptoJS.HmacSHA256(data,skey).toString();
        },
        MD5:function(msg){
            return CryptoJS.MD5(msg).toString();
        }
    },
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
    Validator:{
        Strategies:{
            //使用策略模式实现输入框的校验
            isTelephone:function(value,errorMsg){
                if(!/(^1[3|5|7|8][0-9]{9}$)/.test(value)){
                    return errorMsg;
                }
            },
            minLength: function(value,length,errorMsg){
                if(value.length < length){
                    return errorMsg;
                }
            },
            isIdcard:function(code,errorMsg){
                var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];    // 加权因子
                var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];            // 身份证验证位值.10代表X
                function IdCardValidate(idCard) {
                    idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格
                    if (idCard.length == 15) {
                        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证
                    } else if (idCard.length == 18) {
                        var a_idCard = idCard.split("");                // 得到身份证数组
                        if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){   //进行18位身份证的基本验证和第18位的验证
                            return true;
                        }else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                /**
                 * 判断身份证号码为18位时最后的验证位是否正确
                 * @param a_idCard 身份证号码数组
                 * @return
                 */
                function isTrueValidateCodeBy18IdCard(a_idCard) {
                    var sum = 0;                             // 声明加权求和变量
                    if (a_idCard[17].toLowerCase() == 'x') {
                        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作
                    }
                    for ( var i = 0; i < 17; i++) {
                        sum += Wi[i] * a_idCard[i];            // 加权求和
                    }
                    var valCodePosition = sum % 11;                // 得到验证码所位置
                    if (a_idCard[17] == ValideCode[valCodePosition]) {
                        return true;
                    } else {
                        return false;
                    }
                }
                /**
                 * 验证18位数身份证号码中的生日是否是有效生日
                 * @param idCard 18位书身份证字符串
                 * @return
                 */
                function isValidityBrithBy18IdCard(idCard18){
                    var year =  idCard18.substring(6,10);
                    var month = idCard18.substring(10,12);
                    var day = idCard18.substring(12,14);
                    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
                    // 这里用getFullYear()获取年份，避免千年虫问题
                    if(temp_date.getFullYear()!=parseFloat(year)
                        ||temp_date.getMonth()!=parseFloat(month)-1
                        ||temp_date.getDate()!=parseFloat(day)){
                        return false;
                    }else{
                        return true;
                    }
                }
                /**
                 * 验证15位数身份证号码中的生日是否是有效生日
                 * @param idCard15 15位书身份证字符串
                 * @return
                 */
                function isValidityBrithBy15IdCard(idCard15){
                    var year =  idCard15.substring(6,8);
                    var month = idCard15.substring(8,10);
                    var day = idCard15.substring(10,12);
                    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
                    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
                    if(temp_date.getYear()!=parseFloat(year)
                        ||temp_date.getMonth()!=parseFloat(month)-1
                        ||temp_date.getDate()!=parseFloat(day)){
                        return false;
                    }else{
                        return true;
                    }
                }
                    //去掉字符串头尾空格
                function trim(str) {
                    return str.replace(/(^\s*)|(\s*$)/g, "");
                }
                if(!IdCardValidate(code)) {
                    return errorMsg;
                }
            },
            passwordLevel : function(value,errorMsg){
                    var modes = 0;
                    //正则表达式验证符合要求的
                    if (value.length < 1) return modes;
                    if (/\d/.test(value)) modes++;    //数字
                    if (/[a-z]/.test(value)) modes++; //小写
                    if (/[A-Z]/.test(value)) modes++; //大写
                    if (/\W/.test(value)) modes++;    //特殊字符
                    //逻辑处理
                    switch (modes){
                        case 1:
                        case 2:
                            return errorMsg;
                            break;
                        case 3:
                        case 4:
                            return null;
                            break;
                    }
            }
        },
        cache: [],
        add: function(dom,rules){
            this.cache = [];
            var self = this;
            for(var i = 0,rule;rule = rules[i++];){
                (function(rule){
                    var strategyAry = rule.strategy.split(':');
                    var errorMsg = rule.errorMsg;
                    self.cache.push(function(){
                        var strategy = strategyAry.shift();
                        strategyAry.unshift(dom.value);
                        strategyAry.push(errorMsg);
                        return self.Strategies[strategy].apply(dom,strategyAry);
                    });
                })(rule);
            }
        },
        start: function (){
            for (var i = 0,validatorFunc; validatorFunc = this.cache[i++];){
                var errorMsg = validatorFunc();
                if (errorMsg){
                    return errorMsg;
                }
            }
        },
        //以下是对不同类型的输入进行封装,如手机号,身份证号,密码,邮箱等等
        checkTelephone:function(dom){
            this.add(dom,[{
                strategy:'isTelephone',
                errorMsg:'手机号输入错误'
            }]);
            var errorMsg = this.start();
            return errorMsg;
        },
        checkIDCard:function(dom){
            this.add(dom,[{
                strategy:'isIdcard',
                errorMsg:'身份证号输入错误'
            }]);
            var errorMsg = this.start();
            return errorMsg;
        },
        checkPassword:function(dom){
            this.add(dom,[{
                strategy:'minLength:6',
                errorMsg:'密码长度不能少于六位'
            },{
                strategy:'passwordLevel',
                errorMsg:'密码强度过低'
            }]);
            var errorMsg = this.start();
            return errorMsg;
        }
    },
    /************************************日期格式相关***********************************************************
     *
     *
     * */
    DateFormat:{
        getYearMonthDate:function(ms){
            var time  = new Date(parseInt(ms));
            var year = time.getFullYear();
            var month = time.getMonth()+1;
            var date  = time.getDate();
            return year+'-'+(month < 10 ? '0' + month : month)+'-'+(date < 10 ? '0' + date : date);
        },
        //暂时只支持中国境内时间
        //从毫秒数获取:年-月-日
        getFullDate:function(ms){
            var time  = new Date(parseInt(ms));
            var curTime = new Date();
            var year = time.getFullYear();
            var month = time.getMonth()+1;
            var date  = time.getDate();
            if(year==curTime.getFullYear()){
                return (month < 10 ? '0' + month : month)+'-'+(date < 10 ? '0' + date : date);
            }else {
                return year+'-'+(month < 10 ? '0' + month : month)+'-'+(date < 10 ? '0' + date : date);
            }
        },
        //从毫秒数获得格式化日期,当是当日时间只显示"时:分"不显示"年-月-日",
        // 前一天的时间,显示,"昨天 时:分"
        //一天前的,一年内的时间显示
        getFullTime:function(ms){
            var time  = new Date(parseInt(ms));
            var curTime = new Date();
            var year = time.getFullYear();
            var month = time.getMonth()+1;
            var date  = time.getDate();
            var fullTime = (time.getHours()<10 ? '0'+time.getHours():time.getHours()) + ":" + (time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes());
            if(curTime.getDate()-date > 31 && year ==curTime.getFullYear() ){
                return (month < 10 ? '0' + month : month)+'-'+(date < 10 ? '0' + date : date);
            }if(curTime.getDate()-date > 2 && curTime.getDate()-date < 31){
                return ((curTime-time)/1000/86400).toFixed(0)+'天前';
            }if(curTime.getDate()-date == 1){
                return '昨天';
            }if(curTime.getDate()-date == 2){
                return '前天';
            }if(date == curTime.getDate() && (curTime-time)/1000 >= 3600&&(curTime-time)/1000 < 86400){
                return ((curTime-time)/1000/3600).toFixed(0) + '小时前';
            }if(date == curTime.getDate() && (curTime-time)/1000 >=120 &&(curTime-time)/1000 < 3600){
                return ((curTime-time)/1000/60).toFixed(0) + "分钟前";
            }if(date == curTime.getDate() && (curTime-time)/1000 < 120){
                return  "刚刚";
            }else{
                return year+'-'+(month < 10 ? '0' + month : month)+'-'+(date < 10 ? '0' + date : date);
            }
        }
    },
    /*********************************************消息相关*****************************************************************
     * */
    Msg:function (alterMsg,position){
        //提示信息,信息显示后停留1S,在后面3S内逐渐消失
        var msg=document.createElement("div");
        msg.id="msg";
        msg.style.position="absolute";
        msg.style.opacity=0.6;//Mozilla的不透明设置
        msg.style.background="#000";
        msg.style.bottom=position||"40px";
        msg.style.height="auto";
        msg.style.width = '40%';
        msg.style.zIndex=1000;
        msg.style.color='#fff';
        msg.style.borderRadius='10px';
        msg.style.textAlign='center';
        msg.style.padding='13px 10px 10px 10px';
        msg.style.margin='0 30% 0 30%';
        document.body.appendChild(msg);
        var content=document.createElement("p");
        content.textContent = alterMsg;
        msg.appendChild(content);
        setTimeout(()=>{
            var time=0;
            var int = setInterval(()=>{
                time += 50;
                if(time < 2000){
                    msg.style.opacity -= 0.02;
                }else{
                    msg.parentNode.removeChild(msg);
                    clearInterval(int);
                }
            },50);
        },1000);
    },
    MoneyFormat:function(num)
    {
        num = num.toString().replace(/\$|\,/g,'');
        if(isNaN(num))
            num = "0";
        var sign = (num == (num = Math.abs(num)));
        num = Math.floor(num*100+0.50000000001);
        var cents = num%100;
        num = Math.floor(num/100).toString();
        if(cents<10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            num = num.substring(0,num.length-(4*i+3))+','+
                num.substring(num.length-(4*i+3));
        return (((sign)?'':'-') + num + '.' + cents);
    },
    MoneyInput:function (num) {
        //控制输入正确的钱数，保留两位小数，非小于1小数不能以0开头
        let formatedNum = num.replace(/[^\d.]/g, "");
        formatedNum = formatedNum.replace(/^\./g, "");
        formatedNum = formatedNum.replace(/\.{2,}/g, ".");
        formatedNum = formatedNum.replace(".", "$#$").replace(/\./g,"").replace("$#$", ".");
        formatedNum = formatedNum.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
        if(formatedNum.indexOf(".")< 0 && formatedNum !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
             formatedNum = parseFloat(formatedNum);
        }
        return formatedNum
    },
    setTitel:function(title){
        var $body = $('body');
        document.title = title;
        // hack在微信等webview中无法修改document.title的情况
        var $iframe = $('<iframe style="width: 0;height:0"></iframe>');
        $iframe.on('load',function() {
            setTimeout(function() {
                $iframe.off('load').remove();
            }, 0);
        }).appendTo($body);
    },
    Page:{
        scrollDownToGetMore:function(dom,whatTodo){
            //向下滚动加载更多
            dom.scroll(function () {
                var scrollTop = $(this)[0].scrollTop;
                var windowHeight = $(document).height();
                var scrollHeight = $(this)[0].scrollHeight;
                if (scrollTop + windowHeight == scrollHeight) {
                    if((typeof whatTodo) == 'function'){
                        whatTodo();
                    }else {
                        console.log('Error from Util.Page.scrollToRefresh:arguments for this function should be "dom" and "function');
                    }
                }
            });
        },
        loading:function(){
            var msg=document.createElement("div");
            msg.id = 'loading';
            msg.style.position="absolute";
            msg.style.top="30px";
            msg.style.height="auto";
            msg.style.width = '40%';
            msg.style.zIndex=1000;
            msg.style.color='#fff';
            msg.style.borderRadius='10px';
            msg.style.textAlign='center';
            msg.style.padding='13px 10px 10px 10px';
            msg.style.margin='0 30% 0 30%';
            document.body.appendChild(msg);
            var img=document.createElement("img");
            img.style.height = '120px';
            img.style.width = '120px';
            img.src = window.location.origin + '/img/loading.gif';
            msg.appendChild(img);

        }
    },
    Bankcard:{
        luhmCheck:function(bankno){
            //银行卡号Luhm校验
            //Luhm校验规则：16位银行卡号（19位通用）:
            // 1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
            // 2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
            // 3.将加法和加上校验位能被 10 整除。
            if (bankno.length < 16 || bankno.length > 19) {
                return false;
            }
            var num = /^\d*$/;  //全数字
            if (!num.exec(bankno)) {
                return false;
            }
            //开头6位
            var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
            if (strBin.indexOf(bankno.substring(0, 2))== -1) {
                return false;
            }
            var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）

            var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
            var newArr=new Array();
            for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
                newArr.push(first15Num.substr(i,1));
            }
            var arrJiShu=new Array();  //奇数位*2的积 <9
            var arrJiShu2=new Array(); //奇数位*2的积 >9

            var arrOuShu=new Array();  //偶数位数组
            for(var j=0;j<newArr.length;j++){
                if((j+1)%2==1){//奇数位
                    if(parseInt(newArr[j])*2<9)
                        arrJiShu.push(parseInt(newArr[j])*2);
                    else
                        arrJiShu2.push(parseInt(newArr[j])*2);
                }
                else //偶数位
                    arrOuShu.push(newArr[j]);
            }

            var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
            var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
            for(var h=0;h<arrJiShu2.length;h++){
                jishu_child1.push(parseInt(arrJiShu2[h])%10);
                jishu_child2.push(parseInt(arrJiShu2[h])/10);
            }

            var sumJiShu=0; //奇数位*2 < 9 的数组之和
            var sumOuShu=0; //偶数位数组之和
            var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
            var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
            var sumTotal=0;
            for(var m=0;m<arrJiShu.length;m++){
                sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
            }

            for(var n=0;n<arrOuShu.length;n++){
                sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
            }

            for(var p=0;p<jishu_child1.length;p++){
                sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
                sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
            }
            //计算总和
            sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);
            //计算Luhm值
            var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
            var luhm= 10-k;
            if(lastNum==luhm){
                return true;
            }else{
                return false;
            }
        }
    }
};
export default Util;