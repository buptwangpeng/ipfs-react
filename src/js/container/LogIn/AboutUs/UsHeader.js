import React, {Component} from 'react'
import './UsHeader.css'
import jumpPage from '../../../core/jumpPage.js'


export default class UsHeader extends Component{
    constructor(){
        super();
        this.state={
            version:'1.0',
        }
    }


    render() {
        return (
            <div style={{width:'100%',padding:'0'}}>
                <div className="row header-background">
                    <div
                        // onClick={()=>{jumpPage('admin')}}
                        className="col-xs-6  col-md-5">
                        <p style={{marginLeft:60,fontSize:60,color:'#fff'}}>LOGO</p>
                    </div>
                    <div className="col-xs-12 col-md-7  header-nav">
                        <div
                            onClick={()=>{jumpPage('/us')}}
                            className="header-nav width_25">
                            about us
                        </div>
                        <div
                            className="header-nav width_25">
                            V{this.state.version}
                            {/*不显示*/}
                        </div>
                        <div
                            onClick={()=>{
                                if(confirm("确定退出登录?")){
                                    jumpPage('/')
                                }
                            }}
                            className="header-nav width_25">
                            退出
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}
