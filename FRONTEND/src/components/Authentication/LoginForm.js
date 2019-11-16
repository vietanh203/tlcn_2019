import React, { Component } from 'react';
import {connect} from 'react-redux';
import callApi from './../../apicall/apiCaller';
class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state  = {
            Username : '',
            Password :'',
            falseLogin : false
        }
    }

    onChangeInput = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] :value
        })
    }

    onSubmit = () =>{
        // if(this.state.Username=='admin' && this.state.Password=='admin')
        //     
        callApi('api/authenticate','POST',{
            username : this.state.Username,
            password : this.state.Password
        }).then(res=>{
            if(res.data.success){
                this.props.onLogin(this.state.Username,res.data.token);
            }else {
                this.setState({
                    falseLogin : true
                })
            }
            
        })
        

    }

    render() {
        return (
            <div id="loginForm">
                <div className="text-center p-t-20 p-b-20">
                    <span className="db"><img src="../../assets/images/logo.png" alt="logo" /></span>
                </div>
                <div className="form-horizontal m-t-20" >
                    <div className="row p-b-30">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user" /></span>
                                </div>
                                <input 
                                    defaultValue="" 
                                    onChange = {(event) => this.onChangeInput(event)} 
                                    type="text" 
                                    name="Username" 
                                    className="form-control form-control-lg" 
                                    placeholder="Username" 
                                    aria-label="Username"
                                    aria-describedby="basic-addon1" 
                                     
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                                </div>
                                <input 
                                    defaultValue="" 
                                    onChange={(event) => this.onChangeInput(event)} 
                                    type="password" 
                                    name="Password" 
                                    className="form-control form-control-lg" 
                                    placeholder="Password" 
                                    aria-label="Password" 
                                    aria-describedby="basic-addon1"  
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-secondary">
                        <div className="col-12">
                            <div className="form-group">
                                <div className="p-t-20">
                                    <button     
                                        onClick={() =>this.props.showFormRegister()} 
                                        className="btn btn-info" 
                                        id="to-recover" 
                                        type="button"
                                    ><i className="fa fa-lock m-r-5"/> Lost password?</button>
                                    <button 
                                        onClick ={ ()=>this.onSubmit()}
                                        className="btn btn-success float-right" 
                                        type="button"
                                    >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        showFormRegister : state.showFormRegister
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        showFormRegister : ()=>{
            dispatch({
                type:"SHOW_FORM_REGISTER"
            })
        },
        onLogin : (username,token)=>{
            dispatch({
                type : "IS_AUTHENTICATE",
                username,
                token
            })
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);