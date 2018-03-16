import React, {Component} from 'react'
import './LoginHeader.css'
import jumpPage from '../../../core/jumpPage.js'


export default class Header  extends Component{
    constructor(){
        super();
        this.state={
            version:'1.0',
        }
    }


    render() {
        return (
            <div style={{width:'100%',padding:'0'}}>
                <div className="nav2 ">
                    {/*<Image src="../../../image/2.png" responsive />*/}

                    <div style={{width:'0',height:'0'}}>
                        <img src="../../../../image/2.png" className="" alt="Responsive image"/>
                    </div>

                </div>
                <div className="row header-background">
                    <div
                        className="col-xs-6  col-md-5">
                        {/*<p style={{marginLeft:60,fontSize:60,color:'#fff'}}>LOGO</p>*/}
                    </div>
                    <div className="col-xs-12 col-md-7  header-nav">
                        <div
                            onClick={()=>{jumpPage('/us')}}
                            className="header-nav width25">
                            about us
                        </div>
                        <div
                            className="header-nav width25">
                            V{this.state.version}
                            {/*不显示*/}
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}
