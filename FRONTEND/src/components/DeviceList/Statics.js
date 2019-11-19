import React, { Component } from 'react';
class Statics extends Component {
    render() {
        // console.log(this.props.onCountShareUser)
        return (
            <div class="row">
                <div class="col-lg-3 col-xl-3">
                    <div class="card-stats mb-4 mb-xl-0 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="text-uppercase text-muted mb-0 card-title">Thiết bị kết nối</h5>
                                    <span class="h2 font-weight-bold mb-0">{this.props.onCountDeviceOnlie}</span>
                                </div>
                                <div class="col-auto col">
                                    <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 mb-0 text-muted text-sm">
                                <span class="text-success mr-2">
                                    <i class="fa fa-arrow-up"></i> 3.48%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-3">
                    <div class="card-stats mb-4 mb-xl-0 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="text-uppercase text-muted mb-0 card-title">Tài khoản chia sẻ</h5>
                                    <span class="h2 font-weight-bold mb-0">{this.props.onCountShareUser}</span>
                                </div>
                                <div class="col-auto col">
                                    <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                                        <i class="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 mb-0 text-muted text-sm">
                                <span class="text-danger mr-2">
                                    <i class="fas fa-arrow-down"></i> 3.48%</span>
                                <span class="text-nowrap">Since last week</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-3">
                    <div class="card-stats mb-4 mb-xl-0 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="text-uppercase text-muted mb-0 card-title">Điện tiêu thụ</h5>
                                    <span class="h2 font-weight-bold mb-0">924 kW</span>
                                </div>
                                <div class="col-auto col">
                                    <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 mb-0 text-muted text-sm">
                                <span class="text-warning mr-2">
                                    <i class="fas fa-arrow-down"></i> 1.10%</span>
                                <span class="text-nowrap">Since yesterday</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-3">
                    <div class="card-stats mb-4 mb-xl-0 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="text-uppercase text-muted mb-0 card-title">Performance</h5>
                                    <span class="h2 font-weight-bold mb-0">49,65%</span>
                                </div>
                                <div class="col-auto col">
                                    <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                                        <i class="fas fa-percent">
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 mb-0 text-muted text-sm">
                                <span class="text-success mr-2">
                                    <i class="fas fa-arrow-up"></i> 12%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statics;
