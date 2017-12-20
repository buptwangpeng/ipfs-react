import React, {Component} from 'react'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import './AdHeader.css'

export default class AdHeader  extends Component{
    constructor(){
        super();
        this.state={
            value1:'',
        }
    }

    logAccount(event){
        this.setState({
            value1:event.target.value
        });
    }
    render() {
        return (

                <div className="header">
                    <h1>管理员界面</h1><br/>
                    <form  className="input">
                        <FormGroup>
                        <FormControl
                            type="text"
                            value={this.state.value1}
                            placeholder="快速查询"
                            onChange={this.logAccount.bind(this)}
                        />
                        </FormGroup>
                    </form>
                </div>


        )
    }

}
