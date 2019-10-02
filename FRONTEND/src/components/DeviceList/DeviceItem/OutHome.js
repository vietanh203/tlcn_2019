import React, { Component } from 'react';

class OutHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }



    componentWillMount() {
        this.setState({
            status: this.props.status
        })
    }

    onChange = () => {
        this.setState({
            status: !this.state.status
        })
    }
    changeStatus = () => {
        if (!this.state.status) {
            return (
                <div className="card card-hover bg-dark bg-w-r-g-x ">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box text-center" onClick={() => this.onChange()}>
                        <h1 className="font-light text-white"><i className="fas fa-home" /></h1>
                    </div>
                    <div className="p-b-36"></div>
                </div>
            );
        } else {
            return (
                <div className="card card-hover bg-dark  bg-w-r-g">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box  text-center " onClick={() => this.onChange()}>
                        <h1 className="font-light text-yellow"><i className="fas fa-home" /></h1>
                    </div>
                    <div className="p-b-36"></div>
                </div>
            );
        }

    }

    render() {
        return (
            <div className="col-md-6 col-lg-3 col-xl-2 col-6 ">
                {this.changeStatus()}
            </div>
        );
    }
}

export default OutHome;