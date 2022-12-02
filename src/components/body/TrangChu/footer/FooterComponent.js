import React, { Component } from 'react';
import './Style.css';
class FooterComponent extends Component {
    render() {
        return (<footer className="bg-dark text-white text-center text-lg-start">
            {/* Grid container */}
            <div className="container-fluid p-4">
                {/*Grid row*/}
                <div className="row">
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Giới thiệu</h5>
                        <p className='diachi'>
                            Chi nhánh 1: T1 Cinema - Hưng Thịnh <br/>
                            Địa chỉ: 78, Bình Hưng Hòa, quận Bình Thạnh 
                        </p>
                        <p className='diachi'>
                            Chi nhánh 2: T1 Cinema - Bình Tân <br/>
                            Địa chỉ: 90, Phạm Ngũ Lão, quận Bình Tân 
                        </p>
                        <p className='diachi'>
                            Chi nhánh 3: T1 Cinema - Tân Phú <br/>
                            Địa chỉ: 178, Lý Thường Kiệt, quận Tân Phú 
                        </p>
                        <p className='diachi'>
                            Chi nhánh 4: T1 Cinema - Cộng Hòa <br/>
                            Địa chỉ: 60, Cộng Hòa, quận Tân Bình 
                        </p>
                        <p className='diachi'>
                            Chi nhánh 5: T1 Cinema - Quang Trung <br/>
                            Địa chỉ: 199, Quang Trung, quận Gò Vấp
                        </p>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Góc điện ảnh</h5>
                        <p>
                            >> Thể loại phim
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Hỗ trợ</h5>
                        <p>
                            >> Góp ý
                        </p>
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            Công ty TNHH T1 Cinema, tầng 5 toà F, Phường Tân Chánh Hiệp, Quận 12, Tp.Hồ Chí Minh
            </div>
            {/* Copyright */}
        </footer>);
    }
}



export default FooterComponent;