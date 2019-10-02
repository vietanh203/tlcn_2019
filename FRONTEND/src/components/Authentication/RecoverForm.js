import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecoverForm extends Component {
    render() {
        return (
            <div id="recoverForm">
              <div className="text-center p-t-20 p-b-20">
                    <span className="db"><img src="../../assets/images/logo.png" alt="logo" /></span>
                </div>
              <div className="text-center">
                <span className="text-white">Enter your e-mail address below and we will send you instructions how to recover a password.</span>
              </div>
              <div className="row m-t-20">
                <form className="col-12" >
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-danger text-white" id="basic-addon1"><i className="ti-email" /></span>
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div className="row m-t-20 p-t-20 border-top border-secondary">
                    <div className="col-12">
                      <button 
                        onClick ={()=> this.props.showFormRegister()}
                        className="btn btn-success"
                        type="button"       
                        name="action"
                      >Back To Login</button>
                      <button className="btn btn-info float-right" type="button" name="action">Recover</button>
                    </div>
                  </div>
                </form>
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
    showFormRegister : () =>{
      dispatch({
        type :"SHOW_FORM_REGISTER"
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecoverForm);