import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">
                     
                        <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="# "><i className="ti-menu ti-close" /></a>
                       
                        <a className="navbar-brand" href="/index">
                           
                            <b className="logo-icon p-l-10">
                           
                                <img src="../../assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                            </b>
                            
                            <span className="logo-text">
                            
                                <img src="../../assets/images/logo-text2.png" alt="homepage" className="light-logo" />
                            </span>
                            
                        </a>
                        
                      
                        
                        
                       
                        
                        <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="# " data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
                    </div>
                    
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        
                   
                        
                        <ul className="navbar-nav float-left mr-auto">
                            <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="# " data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24" /></a></li>
                            
                          
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d-none d-md-block">Create New <i className="fa fa-angle-down" /></span>
                                    <span className="d-block d-md-none"><i className="fa fa-plus" /></span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="# ">Action</a>
                                    <a className="dropdown-item" href="# ">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="# ">Something else here</a>
                                </div>
                            </li>
                            
                       
                            
                            <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" href="# "><i className="ti-search" /></a>
                                <form className="app-search position-absolute">
                                    <input type="text" className="form-control" placeholder="Search & enter" /> <a href="# " className="srh-btn"><i className="ti-close" /></a>
                                </form>
                            </li>
                        </ul>
                        
                    
                        
                        <ul className="navbar-nav float-right">
                            
                       
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="# "data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-bell font-24" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="# ">Action</a>
                                    <a className="dropdown-item" href="# ">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="# ">Something else here</a>
                                </div>
                            </li>
                           
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="# " id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="font-24 mdi mdi-comment-processing" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                                    <ul className="list-style-none">
                                        <li>
                                            <div>
                                                {/* Message */}
                                                <a href="# " className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-success btn-circle"><i className="ti-calendar" /></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Event today</h5>
                                                            <span className="mail-desc">Just a reminder that event</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="# " className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-info btn-circle"><i className="ti-settings" /></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Settings</h5>
                                                            <span className="mail-desc">You can customize this template</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="# " className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-primary btn-circle"><i className="ti-user" /></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Pavan kumar</h5>
                                                            <span className="mail-desc">Just see the my admin!</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="# " className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-danger btn-circle"><i className="fa fa-link" /></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Luanch Admin</h5>
                                                            <span className="mail-desc">Just see the my new admin!</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                            {/* End Messages */}
                            
                            
                            {/* User profile and search */}
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="# "data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../assets/images/users/1.jpg" alt="user" className="rounded-circle" width={31} /></a>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                    <a className="dropdown-item" href="# "><i className="ti-user m-r-5 m-l-5" /> My Profile</a>
                                    <a className="dropdown-item" href="# "><i className="ti-wallet m-r-5 m-l-5" /> My Balance</a>
                                    <a className="dropdown-item" href="# "><i className="ti-email m-r-5 m-l-5" /> Inbox</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="# "><i className="ti-settings m-r-5 m-l-5" /> Account Setting</a>
                                    <div className="dropdown-divider" />
                                    <a href="# "
                                        className="dropdown-item" 
                                        onClick ={ () => this.props.isLogout()}
                                    ><i className="fa fa-power-off m-r-5 m-l-5" /> Logout</a>
                                    <div className="dropdown-divider" />
                                    <div className="p-l-30 p-10"><a href="# " className="btn btn-sm btn-success btn-rounded">View Profile</a></div>
                                </div>
                            </li>
                            
                            {/* User profile and search */}
                            
                        </ul>
                    </div>
                </nav>
            </header>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);