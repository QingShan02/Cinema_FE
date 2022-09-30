import React, { Component } from 'react';
class FooterComponent extends Component {
    render() {
        return (<footer className="bg-dark text-white text-center text-lg-start">
            {/* Grid container */}
            <div className="container p-4">
                {/*Grid row*/}
                <div className="row">
                    {/*Grid column*/}
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Giới thiệu</h5>
                        <p>
                            >> Về chúng tôi
                        </p>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Góc điện ảnh</h5>
                        <p>
                            >> Thể loại phim
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Hỗ trợ</h5>
                        <p>
                            >> Góp ý
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Kết nối</h5>
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
            Công ty cổ phần Phim thiên long môn, tầng 5 toà F, Phường Tân Chánh Hiệp, Quận 12, Tp.Hồ Chí Minh
            </div>
            {/* Copyright */}
        </footer>);
    }
}



export default FooterComponent;