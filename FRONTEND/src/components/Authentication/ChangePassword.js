import React, { Component } from 'react';
import Preloader from '../Home/Preloader';

class ChangePassword extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <Preloader />

                <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
                    <div className="auth-box bg-dark border-top border-secondary">
                        <div id="loginForm">
                            <div className="text-center p-t-20 p-b-20">
                                <span className="db"><img src="../../assets/images/logo.png" alt="logo" /></span>
                            </div>

                            <form className="form-horizontal m-t-20" id="loginform" action="index.html">
                                <div className="row p-b-30">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-pencil" /></span>
                                            </div>
                                            <input type="password" className="form-control form-control-lg" placeholder="Old Password" aria-label="Old Password" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                                            </div>
                                            <input type="password" className="form-control form-control-lg" placeholder="New Password" aria-label="New Password" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                                            </div>
                                            <input type="password" className="form-control form-control-lg" placeholder="Again" aria-label="Again" aria-describedby="basic-addon1" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row border-top border-secondary">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="p-t-20">
                                                <button className="btn btn-info" id="to-recover" type="button"><i className="fas fa-times m-r-5" />Cancel</button>
                                                <button className="btn btn-success float-right" type="submit"><i className="fas fa-paper-plane m-r-5" />Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>



        );
    }
}

export default ChangePassword;


