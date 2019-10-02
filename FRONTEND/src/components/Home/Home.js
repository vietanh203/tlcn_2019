import React, { Component } from 'react';
import Header from './../Shared/Header';
import Footer from './../Shared/Footer';
import PageBread from './../Shared/PageBread';
import DeviceList from './../DeviceList/DeviceList';
import AddNewDevice from '../MangerDevice/AddNewDevice/FormAddDevice/AddNewDevice';
import InfoDevice from '../MangerDevice/InfoDevice/InfoDevice';
import HistoryDevice from '../MangerDevice/HistoryDevice/HistoryDevice';
import ShareDevice from '../MangerDevice/ShareDevice/ShareDevice';
import ManagerAccout from './../Authentication/ManagerAccout/ManagerAccout';
import { connect } from 'react-redux';






class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "DeviceList"
        }
    }

    changPage = (page) => {

        this.setState({
            body: page
        })


    }

    onRender = () => {
        if (this.state.body == "DeviceList") {
            return <DeviceList /> 
        }
        if (this.state.body == "AddNewDevice") {
            return <AddNewDevice />
        }
        if (this.state.body == "InfoDevice") {
            return <InfoDevice />
        }
        if (this.state.body == "HistoryDevice") {
            return <HistoryDevice />
        }
        if (this.state.body == "ShareDevice") {
            return <ShareDevice />
        }
        if (this.state.body == "ManagerAccout") {
            return <ManagerAccout />
        }
    
        
    }


    render() {
        return (
            <div id="main-wrapper">
                <Header />

                    <aside className="left-sidebar" data-sidebarbg="skin5">
                        <div className="scroll-sidebar">
                            <nav className="sidebar-nav">
                                <ul  className="p-t-30">
                                    <li className={this.state.body == "DeviceList" ? "sidebar-item selected" : "sidebar-item"} onClick={() => this.changPage("DeviceList")}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Bảng Điều Khiển</span></a></li>
                                    <li className={this.state.body == "InfoDevice" ? "sidebar-item selected" : "sidebar-item"} onClick={() => this.changPage("InfoDevice")}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-chart-bar" /><span className="hide-menu">Quản Lý Thiết Bị</span></a></li>
                                    <li className={this.state.body == "AddNewDevice" ? "sidebar-item selected" : "sidebar-item"} onClick={() => this.changPage("AddNewDevice")}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-shape-rectangle-plus" /><span className="hide-menu">Thêm Thiết Bị</span></a></li>
                                    <li className={this.state.body == "ShareDevice" ? "sidebar-item selected" : "sidebar-item"} onClick={() => this.changPage("ShareDevice")}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-share-variant" /><span className="hide-menu">Chia Sẽ Thiết Bị</span></a></li>
                                    <li className={this.state.body == "HistoryDevice" ? "sidebar-item selected" : "sidebar-item"} onClick={() => this.changPage("HistoryDevice")}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-history" /><span className="hide-menu">Lịch Sử Thiết Bị</span></a></li>
                                    <li className={this.state.body == "ManagerAccout" ? "sidebar-item selected" : "sidebar-item"} onClick={() => this.changPage("ManagerAccout")}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="mdi mdi-account-edit" /><span className="hide-menu">Quản Lý Tài Khoản</span></a></li>
                                    <li className="sidebar-item"  onClick={() => this.props.isLogout()}> <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i className="fa fa-power-off" /><span className="hide-menu">Đăng Xuất</span></a></li>
                            
                                </ul>
                            </nav>
                        </div>
                    </aside>
                <div className="page-wrapper">
                    <PageBread />
                    <div className="container-fluid">
                        {this.onRender()}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        isAuthenticate : state.isAuthenticate
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        isLogout : ()=>{
            dispatch({
                type : "IS_LOGOUT"
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);