import React, { Component } from 'react';
import Footer from './Footer';
import PageBread from './PageBread';
import DeviceList from './../DeviceList/DeviceList';
import AddNewDevice from '../MangerDevice/AddNewDevice/FormAddDevice/AddNewDevice';
import InfoDevice from '../MangerDevice/InfoDevice/InfoDevice';

class PageWrapper extends Component {
    render() {
        return (
            <div className="page-wrapper">            
                <PageBread />       
                <div className="container-fluid">
                    <DeviceList />
                </div>
                <Footer />    
            </div>
        );
    }
}

export default PageWrapper;