import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer ClassName="page-footer font-small unique-color-dark">

                <div class="container text-center text-md-left mt-5" style={{ backgroundColor: 3e5569 }}>

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold">IOT Vision</h6>
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                            <p>Cung cấp và quản lý thiết bị IOT.</p>

                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase font-weight-bold">Sản phẩm</h6>
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                            <p>
                                <a href="#!">Bóng đèn</a>
                            </p>
                            <p>
                                <a href="#!">Bộ điều khiển</a>
                            </p>
                            <p>
                                <a href="#!">Máy lạnh</a>
                            </p>

                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                            <p>
                                <a href="#!">Đối tác</a>
                            </p>
                            <p>
                                <a href="#!">Phí vận chuyển</a>
                            </p>
                            <p>
                                <a href="#!">Hỗ trợ</a>
                            </p>

                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase font-weight-bold">Liên hệ</h6>
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                            <p>
                                <i class="fas fa-home mr-3"></i> Lê Văn Việt, Quận 9, HCM</p>
                            <p>
                                <i class="fas fa-envelope mr-3"></i> lcnghia95@gmail.com</p>
                            <p>
                                <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>

                        </div>

                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> IOTVISON.com</a>
                </div>

            </footer >

        );
    }
}

export default Footer;