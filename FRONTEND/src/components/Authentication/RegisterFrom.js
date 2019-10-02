import React, { Component } from 'react';

class RegisterFrom extends Component {
    render() {
        return (
            <form className="form-horizontal m-t-20" action="index.html">
                                <div className="row p-b-30">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user" /></span>
                                            </div>
                                            <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                                        </div>
                                        {/* email */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-danger text-white" id="basic-addon1"><i className="ti-email" /></span>
                                            </div>
                                            <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                                            </div>
                                            <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                                            </div>
                                            <input type="text" className="form-control form-control-lg" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row border-top border-secondary">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="p-t-20">
                                                <button className="btn btn-block btn-lg btn-info" type="submit">Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
        );
    }
}

export default RegisterFrom;