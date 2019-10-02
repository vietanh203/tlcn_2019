import React, { Component } from 'react';

class Preloader extends Component {
    render() {
        return (
            <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos"></div>
                    <div className="lds-pos"></div>
                </div>
            </div>
        );
    }
}

export default Preloader;