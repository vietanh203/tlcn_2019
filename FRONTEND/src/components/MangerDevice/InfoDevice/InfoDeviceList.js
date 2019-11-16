import React, { Component } from 'react';
//import InfoDeviceItem from './InfoDeviceItem';

class InfoDeviceList extends Component {
    render() {
        return (
            <table id="zero_config" className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Mật khẩu thiết bị</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Loại</th>
                        <th>Mã người tạo</th>
                        <th>Tên khu vực</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
                
            </table>
        );
    }
}

export default InfoDeviceList;