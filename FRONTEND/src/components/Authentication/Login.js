import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import RecoverForm from './RecoverForm';
import Home from './../Home/Home';

class Login extends Component {

  onShowForm = () =>{
    if(!this.props.showFormRegister){
      return <LoginForm/>
    }else{
      return <RecoverForm/>
    }
  }
  render() {
    return !this.props.isAuthenticate ? (
      <div className="main-wrapper">
        {/* <Preloader /> */}
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
          <div className="auth-box bg-dark border-top border-secondary">
            {this.onShowForm()}
          </div>
        </div>
      </div>
    ) : (<div><Home /></div>);
  }
}


const mapStateToProps = state =>{
  return {
    showFormRegister : state.showFormRegister,
    isAuthenticate : state.isAuthenticate
  }
}

export default connect(mapStateToProps,null)(Login);