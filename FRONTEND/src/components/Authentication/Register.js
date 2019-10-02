import React, { Component } from 'react';
import Preloader from './../Shared/Preloader';
import RegisterFrom from './RegisterFrom';
class Register extends Component {
    render() {
        return (
            <div className="main-wrapper">
               
                <Preloader/>
                <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
                    <div className="auth-box bg-dark border-top border-secondary">
                        <div>
                            <div className="text-center p-t-20 p-b-20">
                                <span className="db"><img src="../../assets/images/logo.png" alt="logo" /></span>
                            </div>
                            <RegisterFrom/>
                        </div>
                    </div>
                </div>
             
            </div>
        );
    }
}

export default Register;