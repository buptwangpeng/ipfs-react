import React, {Component} from 'react'
import Utf8ArrayToStr from '../util/util';

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI({host: 'localhost', port: '5001', protocol: 'http'});

//将文件存到ipfs上
let saveWordOnIpfs = (reader) => {
    return new Promise(function(resolve, reject) {
        const buffer = Buffer.from(reader.result,'utf-8');
        ipfs.add(buffer).then((response) => {
            console.log(response);
            resolve(response[0].hash);
        }).catch((err) => {
            console.error(err);
            reject(err);
        })
    })
};

// //从ipfs上下载文件
// let downloadWordFromIpfs = (hash) => {
//     ipfs.cat(hash).then((stream)=>{
//         // console.log("原始数据："+stream);
//         let strContent = Utf8ArrayToStr(stream);
//         // console.log("经处理的数据："+strContent);
//
//         let strBLob = new Blob([stream]);
//         console.log(strBLob.type);
//         if(window.URL){
//             this.setState({
//                 strHref:window.URL.createObjectURL(strBLob)
//             });
//             console.log(this.state.strHref);
//         }
//     });
// };

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: null,
            wordHash:"QmXLhkUTphnNAyM4A57tBS1Pog7P6yewQRAG1z8fnAvmQe",
            strHref:null
        }
    }


    render() {
        return (<div className="App">

            <h2>上传文档到IPFS：</h2>
            <div>
                <label id="file">Choose file to upload</label>
                <input type="file" ref="file" id="file" name="file" multiple="multiple"/>
                {/*multiple 属性规定允许用户输入到 <input> 元素的多个值*/}
                {/*React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。*/}
                {/*这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。*/}
                {/*这样就可以确保在任何时间总是拿到正确的实例。*/}
            </div>
            <div>new FileReader()
                <button onClick={() => {
                    var file = this.refs.file.files[0];
                    console.log(this.refs.file);
                    //HTML5的FileReader对象主要用来把文件读入内存，并且读取文件中的数据
                    var reader = new FileReader();
                    reader.readAsArrayBuffer(file);
                    // let blob =new Blob([file],{type:""});
                    //FileReader的对象事件onloadend：数据读取完成时触发，无论成功或失败
                    reader.onloadend = (e) => {
                        console.log(reader);
                        // 上传数据到IPFS
                        saveWordOnIpfs(reader).then((hash) => {
                            console.log(hash);
                            this.setState({imgSrc: hash})
                        });
                    }

                }}>上传至ipfs</button>
                <button onClick={() => {
                    ipfs.cat(this.state.wordHash).then((stream)=>{
                        console.log(stream);
                        // let strBLob = new Blob([stream],{type:"text/plain;charset=UTF-8"});//text/plain——txt的文字格式
                        let strBLob = new Blob([stream],{type:"application/x-rar-compressed"});//.rar的文件格式（压缩包）
                        if(window.URL){
                            this.setState({
                                strHref:window.URL.createObjectURL(strBLob)
                            });
                            console.log(this.state.strHref);
                        }
                    });
                }}>从ipfs下载文件</button>
                <a download="download" href={this.state.strHref} target="_blank">文件下载</a>
            </div>
        </div>);
    }
}

export default App