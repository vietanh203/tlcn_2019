import React, { Component } from 'react';
import Preloader from './../Home/Preloader';


class Error extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <Preloader />
                <div className="error-box">
                    <div className="error-body text-center">
                        <h1 className="error-title text-danger">403</h1>
                        <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                        <p className="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                        <a href="index.html" className="btn btn-danger btn-rounded waves-effect waves-light m-b-40">Back to home</a> 
                    </div>
                </div>

            </div>
        );
    }
}

export default Error;