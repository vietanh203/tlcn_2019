import React, { Component } from 'react';


class SideBar extends Component {
    render() {
        return (

            <aside className="left-sidebar" data-sidebarbg="skin5">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="p-t-30">
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Bảng Điều Khiển</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="charts.html" aria-expanded="false"><i className="mdi mdi-chart-bar" /><span className="hide-menu">Quản Lý Thiết Bị</span></a></li>
                            
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="tables.html" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">Tables</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="grid.html" aria-expanded="false"><i className="mdi mdi-blur-linear" /><span className="hide-menu">Full Width</span></a></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default SideBar;