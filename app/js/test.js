import React, {Component} from 'react'
import { default as Web3} from 'web3'
import { default as contract } from 'truffle-contract'
import labcoin_artifacts from '../../build/contracts/Study.json'//'./../../build/contracts/LabCoin.json'


let LabCoin=contract(labcoin_artifacts);
let yourAccount;
let address=[];
let q1;
let q2;
let q_address1=[];
let q_address2=[];


let labcoinProvider = new Web3.providers.HttpProvider("http://localhost:8545");
LabCoin.setProvider(labcoinProvider);

let web3 = new Web3(labcoinProvider);//创建web3对象，需要新创建对象，后面才能调用
/* if (typeof web3 !== 'undefined') {
            // console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
            // Use Mist/MetaMask's provider,
            window.web3 = new Web3(web3.currentProvider);
        } else {
            // console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        LabCoin.setProvider(web3.currentProvider);*/
//登录
class Log extends Component{
    constructor(){
        super();
        this.state={
            //登录
            address1:'',
            value1:'',

        };
    }
//当文本框写入地址数据时，更改state--address1
    logAccount(event){

        //address1=document.getElementById('logIn_address').value;
        //value1=document.getElementById('logIn_key').value;
        this.setState({
            address1:event.target.value
        });

//target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。语法：event.target

    }
    //当文本框写入密码数据时，更改state--value1
    logPassword(event){
        this.setState({
            value1:event.target.value
        });
    }
//调用web3中的personal接口，解锁账户
    unlock(){
        let Address=this.state.address1;
        let Value =this.state.value1;
        yourAccount=this.state.address1;
        let unLockRes = web3.personal.unlockAccount(Address,Value,1000*60*60);
        console.log(unLockRes);
        return unLockRes;
        // return web3.personal.unlockAccount(this.props.address1,this.props.value1,3600);

    }
    //onchange 事件会在域的内容改变时发生。onchange 事件也可用于单选框与复选框改变后触发的事件。
    render(){
        return(
            <div id="log">

                <div >
                    <label>账户</label><input type = "text" id = "logIn_address" value={this.state.address1} onChange={this.logAccount.bind(this)}/><br/>
                </div>

                <div>
                    <label>密码</label><input type = "password" id = "logIn_key" value={this.state.value1} onChange={this.logPassword.bind(this)}/><br/>
                </div>

                <div>
                    <button onClick={()=>this.unlock()}>登录</button>
                </div>

            </div>
        )
    }
}

//签到（返回三个参数：uint timestamp, address user, bool isFirst）只有地址簿中的地址才可以签到
class Sign extends Component{
//合约中的函数signIn需要消耗gas,也有返回值，对它的返回值处理使用方法2，具体方法介绍见组件Select1的注释
    signin () {
        let meta;

        LabCoin.deployed().then( function (instance) {
            meta = instance;
            //console.log(message);
            return meta.signIn({from:yourAccount, gas: 1800000});

        }).then ( function (r) {
            if(r){
                let message0='true';
                let message =document.getElementById('message');
                message.innerHTML=message0;
            }
            console.log(r);
            let a0=r.logs[0].args.error
            let message1 =document.getElementById('message1');
            message1.innerHTML=a0;
            //let sign = document.getElementById('sign');
               // sign.innerHTML=r;
        }).catch ( function (e) {
            console.log(e);
           })
    }
    //使用方法2
    signin1 () {
        let meta;

        LabCoin.deployed().then( function (instance) {
            meta = instance;
            //console.log(message);
            return meta.signIn.call({from:yourAccount, gas: 1800000});

        }).then ( function ([time,add,r]) {
            console.log(r);
            let sign = document.getElementById('sign');
             sign.innerHTML=r;
        }).catch ( function (e) {
            console.log(e);
        })

    }


    render(){
        return(
            <div>
                <button onClick={()=>this.signin()}>签到</button><br/>
                <label>是否签到成功：</label><span id="message"></span><br/>
                <label>Warning：</label><span id="message1"></span><br/>
                <button onClick={()=>this.signin1()}>检测</button><br/>
                <label>是不是今天第一个签到者：</label><span id="sign"></span>
            </div>
        )

    }

}
//查岗(返回一个地址数组)返回一周内签到的地址
class Check extends Component{
    checkIn () {
        let meta;

        LabCoin.deployed().then( function (instance) {
            meta = instance;
            return meta. getSignInLog.call();
        }).then ( function ([n,add,bool]) {
                   console.log([n,add,bool]);
                   let check1 =document.getElementById('check');
                   check1.innerHTML =add;
             }).catch ( function (e) {
                   console.log(e);
                })

    }



    render(){
        return(
            <div>
                <button onClick={()=>this.checkIn()}>查岗</button><br/>
                <label>本周已签到:</label><span id="check"></span>
            </div>
        )

    }
}
//转账 自己设置原始金额，不是转ether
class Transfer extends Component{
    constructor(){
        super();
       this.state={
                      address2:'',
                      value2:''
       }
    }

    transfer_address2(event){
           this.setState({
               address2:event.target.value
           })
    }

    transfer_value2(event){
        this.setState({
            value2:event.target.value
        })
    }
    transfer () {

           let meta;
           let a1=this.state.address2;
           let a2=this.state.value2;

            LabCoin.deployed().then( function (instance) {
                      meta = instance;
                     return meta.transfer(a1,a2,{from:yourAccount, gas: 1800000});
            }).then ( function (r) {
                   console.log(r);
                   let message="transfer successfully";
                console.log(message);
               }).catch ( function (e) {
                     console.log(e);
                  })

    }



        render(){
            return(
                <div>
                    <label>账户</label><input type = "text" id = "transfer_address" onChange={this.transfer_address2.bind(this)} /><br/>
                    <label>金额</label><input type = "text" id = "transfer_value" onChange={this.transfer_value2.bind(this)}/><br/>
                    <button onClick={()=>this.transfer()}>转账</button>
                </div>
            )

        }

}
//查看当前账户余额
class Balance extends Component{
    getBalance(){
        let meta;
        LabCoin.deployed().then( function (instance) {
            meta = instance;
            return meta.getBalanceOf(yourAccount);
        }).then ( function (r) {
            let balance=document.getElementById('balance');
            balance.innerHTML=r;
            console.log(r);
        }).catch ( function (e) {
            console.log(e);
        })
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.getBalance()}>查询余额</button><br/>
                <label>账户余额：</label><span id="balance"></span>
            </div>
        )
    }
}
//地址簿，有三个功能：添加地址、删除地址、显示地址簿中的全部地址；
class Book extends Component{
    constructor(){
        super();
        this.state={
            address3:'',
            username:'',
            address4:'',
            desc:''
        }
    }
    set1(event){
        this.setState({
            address3:event.target.value,
        })

        //q_address1.push(q1);
    }
    set2(event){
        this.setState({
            username:event.target.value
        })

    }
    set3(event){
        this.setState({
            address4:event.target.value
        })
    }
    //输出bool result
    setAddress(){
        let meta;
        let a1=this.state.address3;
        let a2=this.state.username;

        //这样的定义必须有，不能直接将state作为参数，而且要将定义放在外面
        LabCoin.deployed().then( function (instance) {

            console.log(a1);
            console.log(a2);
            meta = instance;
            return meta.setAddressBook(a1,a2,{from:yourAccount, gas: 1800000});
        }).then ( function (r) {
            console.log(r);
        }).catch ( function (e) {
            console.log(e);
        })
    }
    //输出bool result
    deleteAddress(){
        let meta;
        let a3=this.state.address4;
        LabCoin.deployed().then( function (instance) {
            meta = instance;
            //return meta.deleteAddressBook.call(a3,{from:yourAccount, gas: 1800000});//不消耗gas，用于测试函数调用是否成功
            return meta.deleteAddressBook(a3,{from:yourAccount, gas: 1800000});
        }).then ( function (r) {
            console.log(r);
        }).catch ( function (e) {
            console.log(e);
        })
    }
    //输出address[]
    getAddressbook(){
        let meta;
        let self=this;
        LabCoin.deployed().then( function (instance) {
           // console.log(meta);
            return instance.getAddressBook.call();

        }).then ( function (r) {
            address =r;
            /*for (let i=0;i<r.length;i++) {
                // document.write(address[i]+"<br />")
                address[i]=<div>
                    {r[i]}<br/>
                </div>
            }*/
              let address0=document.getElementById('address0');
               address0.innerHTML=address;
               //self.testAddress();
            console.log(address);
        }).catch ( function (e) {
            console.log(e);
        })
    }
testAddress0(){
        this.setState({
            desc:!this.state.desc
        })
}
    testAddress(){
          /* let address1=[];
            address1[0]='11';address1[1]='12';address1[2]='13';
            console.log(address1);
           console.log(address);*/
        let addr=[];
         for (let i=0;i<address.length;i++) {
             // document.write(address[i]+"<br />")
             addr[i]=<p key={i}>
                     {address[i]}<br/>
                     </p>
         }
         console.log(addr);
         return addr;
    }
//下面的<h4>{this.testAddress()}</h4>，当页面渲染时就会执行。重要：react中当state发生变化时就会重新渲染界面
    render(){
        return(
            <div>

                <h3>添加地址</h3>
                <div>
                    <label>地址</label><input type = "text" id = "set1" onChange={this.set1.bind(this)}/><br/>
                    <label>用户名</label><input type = "text" id = "set2" onChange={this.set2.bind(this)}/><br/>
                    <button onClick={()=>this.setAddress()}>添加</button>
                </div>

                <h3>删除地址</h3>
                <div>
                    <label>地址</label><input type = "text" id = "set3" onChange={this.set3.bind(this)}/><br/>
                    <button onClick={()=>this.deleteAddress()}>删除</button>
                </div>

                <h3>显示地址簿</h3>
                <button onClick={()=>this.getAddressbook()}>显示</button><span id="address0"></span><br/><br/>
                <h4>列表显示：</h4><h4>{this.testAddress()}</h4>
            </div>
        )
    }
}
//从签到的人中抽取N个人
class Select1 extends Component{
    constructor(){
        super();
        this.state={
            des:'',
            number:0
        };
    }
    set1(event){
        this.setState({
            des:event.target.value,
        })
    }
    set2(event){
        this.setState({
            number:event.target.value,
        })
    }
    selectSomeone(){
        let meta;
        let des=this.state.des;
        let num=this.state.number;
        LabCoin.deployed().then( function (instance) {
            meta = instance;

            //需要消耗gas并且有返回值的函数，返回值是一个object(各种信息都有)，比如chooseSomeone()所以需要从中获取我们需要的信息，有三种方法：
            // 方法1：从日志logs中直接获取（前提是设置了event）；
            // 方法2：完成同一个功能时，执行两次函数，一次加call,一次不加call（加call的用于获取数据，不加call的用于在区块链上更改数据状态）；
            // 方法3：这种情况出现的原因可能是返回的时候矿工还没来得及处理交易，所以只返回一个object(包含交易信息等一系列信息)，所以可以尝试加一个延迟，使得慢一点返回信息；
            // 方法4：修改合约，消耗gas的函数不返回值，另写一个constant类的函数（不消耗gas的，有后缀.call的）来返回上一个函数的值

            return meta.chooseSomeone(des,num,{from:yourAccount, gas: 1800000});
        }).then ( function (r) {
            let a1=r.logs[0].args.luckydog;//方法1
            console.log(a1);
            let balance=document.getElementById('address1');
            balance.innerHTML=a1;
            console.log(r);
        }).catch ( function (e) {
            console.log(e);
        })
    }
    render(){
        return(
            <div>

                <h3>选人</h3>
                <div>
                    <label>描述</label><input type = "text" id = "set1" onChange={this.set1.bind(this)}/><br/>
                    <label>人数</label><input type = "text" id = "set2" onChange={this.set2.bind(this)}/><br/>
                    <button onClick={()=>this.selectSomeone()}>开始</button><span id="address1"></span>
                </div>
            </div>
        )
    }
}
//从给定的数组中抽N个人（给定数组为通讯录地址组）
class Select2 extends Component{
    constructor(){
        super();
        this.state={
            des:'',
            number:0
        };
    }
    set1(event){
        this.setState({
            des:event.target.value,
        })
    }
    set2(event){
        this.setState({
            number:event.target.value,
        })
    }
    selectSomeone(){
        let meta;
        let des=this.state.des;
        let num=this.state.number;
        LabCoin.deployed().then( function (instance) {
            meta = instance;
            return meta.chooseSomeoneFrom(des,num,address,{from:yourAccount, gas: 1800000});
        }).then ( function (r) {
            let a1=r.logs[0].args.luckydog;//方法1
            console.log(a1);
            let someone=document.getElementById('address2');
            someone.innerHTML=a1;
            console.log(r);
        }).catch ( function (e) {
            console.log(e);
        })
    }
    render(){
        return(
            <div>
                <h3>选人</h3>
                <div>
                    <label>描述</label><input type = "text" id = "set1" onChange={this.set1.bind(this)}/><br/>
                    <label>人数</label><input type = "text" id = "set2" onChange={this.set2.bind(this)}/><br/>
                    <button onClick={()=>this.selectSomeone()}>开始</button><span id="address2"></span>
                </div>
            </div>
        )
    }
}
//转账ether
class TransferEther extends Component{
    constructor(){
        super();
        this.state={
            address1:'',
            address2:'',
            value1:'',

        };
    }
    logAccount1(event){
        this.setState({
            address1:event.target.value
        });

    };
    logAccount2(event){
        this.setState({
            address2:event.target.value
        });}
    logValue(event){
        this.setState({
            value1:event.target.value
        });
    }
    transfer(){
        let Address1=this.state.address1;
        let Address2=this.state.address2;
        let Value =this.state.value1;
        let unLockRes = web3.eth.sendTransaction({from:Address1,to:Address2,value:Value,gas:180000});
        console.log(unLockRes);
        return unLockRes;

    }
    //onchange 事件会在域的内容改变时发生。onchange 事件也可用于单选框与复选框改变后触发的事件。
    render(){
        return(
            <div id="log">

                <div >
                    <label>账户1</label><input type = "text" id = "logIn_address1" value={this.state.address1} onChange={this.logAccount1.bind(this)}/><br/>
                </div>
                <div >
                    <label>账户2</label><input type = "text" id = "logIn_address2" value={this.state.address2} onChange={this.logAccount2.bind(this)}/><br/>
                </div>

                <div>
                    <label>金额</label><input type = "text" id = "logIn_value" value={this.state.value1} onChange={this.logValue.bind(this)}/><br/>
                </div>

                <div>
                    <button onClick={()=>this.transfer()}>转账</button>
                </div>

            </div>
        )

    }
}
//father
class Test extends Component{

    render(){

        return(
            <div>

                <h1>lab1017出品--郜</h1>
                <div>
                    <br/><h2>登录</h2>
                    <Log />

                </div>
                <div>
                    <br/><h2>签到</h2>
                    <Sign/>
                </div>
                <div>
                    <br/><h2>查岗</h2>
                    <Check/>
                </div>
                <div>
                    <br/><h2>转账</h2>
                    <Transfer/><br/>
                    <Balance/>
                </div>
                 <div>
                     <br/><h2>地址簿</h2>
                     <Book/>
                 </div>
                <div>
                    <br/><h2>选人模式一：在已签到人中选人</h2>
                    <Select1/>
                </div>
                <div>
                    <br/><h2>选人模式二：在通讯录中选人</h2>
                    <Select2/>
                </div>
                <div>
                    <br/><h2>转账：ether</h2>
                    <TransferEther/>
                </div>
                <h2 id="status"></h2>

            </div>
        )
    }

}

export default Test