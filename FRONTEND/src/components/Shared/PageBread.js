import React, { Component } from 'react';

class PageBread extends Component {
    render() {
        return (
            <div className="page-breadcrumb" style={{backgroundColor:'#a6a3a3'}}>
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">{this.props.pageBread}</h4>
                        </div>
                    </div>
            </div>
        );
    }
}

export default PageBread;