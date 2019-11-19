import React, { Component } from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
class HistoryDevice extends Component {
    render() {
        return (
            <div className="card col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>Điện năng tiêu thụ</h2>
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                     <LineChart />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                     <PieChart />
                </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Thiết Bị Của Tôi</h5>
                    <div className="table-responsive">
                        <table id="zero_config" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Tên thiết bị</th>
                                    <th>Vị trí</th>
                                    <th>Công suất</th>
                                    <th>Thời gian sử dụng</th>
                                    <th>Tổng tiêu thụ</th>
                                    <th>Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011/07/25</td>
                                    <td>$170,750</td>
                                </tr>
                                <tr>
                                    <td>Airi Satou</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>$162,700</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoryDevice;