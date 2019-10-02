import React, { Component } from 'react';

class ErrorItem extends Component {
    
    render() {
        return (
            <div className="col-md-6 col-lg-3 col-xl-2 col-6">
                <div className="card card-hover bg-danger">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box  text-center">
                        
                        <h1 className="font-light text-white"><i className="mdi mdi-alert"></i></h1> 
                    </div>
                    <h4 className="text-white text-center p-b-5">Không kết nối</h4>
                </div>
            </div>
        );
    }
}

export default ErrorItem;