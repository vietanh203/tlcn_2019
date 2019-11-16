import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../../../apicall/apiCaller';

class FormStepTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success : '',
            id:'',
            password :'',
            message : ''
        }
    }
    
    onForm = () =>{
        return this.props.onForm ? {display:'block'} : {display:'none'};
    }

    onChange = (events) =>{
        let name = events.target.name
        let value = events.target.value
        this.setState({
            [name]:value
        })
        console.log(this.state);
    }

    onClick = ()=>{
        callApi(`api/devices/connectdevice`,'POST',{
            token : this.props.token,
            id:this.state.id,
            password:this.state.password
        }).then(res=>{
            if(res.data){
                this.setState({
                    success:res.data.success,
                    message : res.data.message          
                })
            }
        })
    }

    render() {
        return (
                <section id="steps-uid-0-p-1" role="tabpanel" aria-labelledby="steps-uid-0-h-1" className="body" aria-hidden="true" style={this.onForm()}>
                   <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " >
                        </div>
                        <div className=" text-center col-xs-4 col-sm-4 col-md-4 col-lg-4 " >
                            <label htmlFor="surname"><h3>ID thiết bị</h3></label>
                            <input onChange = {(events)=>this.onChange(events)} id="id" name="id" type="text" className="required form-control" style={{'border':'solid'}} />
                            <label htmlFor="password"><h3>Mật khẩu trên thiết bị</h3></label>
                            <input onChange = {(events)=>this.onChange(events)} id="password" name="password" type="password" className="required email form-control" style={{'border':'solid'}}/>
                            <br/><button type="button" className="btn btn-success " onClick={()=>this.onClick()}>Kết nối</button>
                            {
                                this.state.success===false? <div><br/><div class="alert alert-danger"> <br /> <strong>Fail!</strong>{this.state.message}</div></div> : 
                                this.state.success===true ? <div><br/><div class="alert alert-success"> <br /> <strong>Success!</strong>Kết Nối Thiết Bị Thành Công.</div></div> : ''
                            }
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " >
                        </div>
                   </div>                  
                </section>   
        ); 
    }
}

const mapStateToProps = state =>{
    return {
        username : state.username,
        token : state.token
    }
}

export default connect(mapStateToProps)(FormStepTwo);