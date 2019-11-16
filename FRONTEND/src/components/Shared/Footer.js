import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer className="page-footer font-small blue pt-4" style={{backgroundColor:'darkgrey'}}>

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase">IOTVISION</h5>
                            <p>Cung cấp dịch vu quản lý và điều khiển thiết bị IOT</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Liên Hệ</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">email : lcnghia95@gmail.com</a>
                                </li>
                                <li>
                                    <a href="#!">SDT : 0333865088</a>
                                </li>
                                <li>
                                    <a href="#!">Address : 484 Lê Văn Việt, Tăng Nhơn Phú A, Quận 9, Hồ Chí Minh</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                     <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>

            </footer>

        );
    }
}

export default Footer;