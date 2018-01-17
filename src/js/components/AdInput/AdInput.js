import {FormGroup} from 'react-bootstrap'
import {ControlLabel} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import React from 'react'

const AdInput = ({props,title,placeholder,onChange,value})=>{
    return(
        <div className="">
            <Form inline >
                <FormGroup bsSize="large">
                    <ControlLabel><h4>{title}</h4></ControlLabel>
                    <FormControl type="text"
                                 placeholder={placeholder}
                                 value={value}
                                 onChange={onChange}
                    />

                </FormGroup>
            </Form>
        </div>
    )
}

export default AdInput;