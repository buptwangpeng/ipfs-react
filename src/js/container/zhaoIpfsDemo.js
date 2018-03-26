import React, { Component } from 'react';
import './App.css';
import ipfsAPI from 'ipfs-api';
import Utf8ArrayToStr from '../util/util';

const ipfs = ipfsAPI({host:'localhost',port:'5001',protocol:'http'});

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            strHash:null,
            strContent:null,
            strHref:null
        }
    }

    saveTextBlobOnIpfs = (blob)=>{
        return new Promise(function(resolve,reject){
            const descBuffer = Buffer.from(blob,'utf-8');
            ipfs.add(descBuffer).then((response)=>{
                console.log(response);
                resolve(response[0].hash);
            }).catch((err)=>{
                console.log(err);
                reject(err);
            })
        })
    }

    render(){
        return (
            <div className="App">
                <input
                    ref="ipfsContent"
                />
                <button onClick={()=>{
                    let  ipfsContent = this.refs.ipfsContent.value;
                    console.log(ipfsContent);
                    this.saveTextBlobOnIpfs(ipfsContent).then((hash)=>{
                        console.log(hash);
                        this.setState({
                            strHash:hash
                        })
                    })
                }}>提交到IPFS</button>

                <p>{this.state.strHash}</p>

                <button onClick={()=>{
                    console.log("从ipfs读取数据：");
                    // QmVozpsSMcRwUBfL4ghd4MooDRoanYaW149mhq8wrenz26
                    ipfs.cat("QmT6zJs3RouHW32GLaMU86jHTMn3Y7Uwde2J9QjZ2TJYwG").then((stream)=>{
                        console.log(stream);
                        let strContent = Utf8ArrayToStr(stream);
                        this.setState({
                            strContent:strContent
                        });
                        let strBLob = new Blob([stream]);
                        console.log(strBLob.type);
                        if(window.URL){
                            this.setState({
                                strHref:window.URL.createObjectURL(strBLob)
                            });
                            console.log(this.state.strHref);
                        }
                    });
                    ipfs.get(this.state.strHash).then((file)=>{
                        console.log(file[0]);
                        console.log(file[0].path);
                        console.log(Utf8ArrayToStr(file[0].content));
                    })
                }}>读取数据</button>
                {/*<h1>{this.state.strContent}</h1>*/}
                <a download="download" href={this.state.strHref} target="_blank">文件下载</a>
            </div>
        )
    }
}

export default App;