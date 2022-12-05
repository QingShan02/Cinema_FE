import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
function KhungXN() {
    const data = useLocation();
    const code = data.state;
    const [IFKH, setIFKH] = useState({
        tenKH: code.data.tenKH,
        email: code.data.email,
        soDT: code.data.soDT,
        matKhau: code.data.repass
    });
    let xtcode;
    const handle = (e) => {
        xtcode = e.target.value;
    }





    function xl(e) {
        if (code.code !== xtcode) {
            alert('Mã xác thực không chính xác');
            e.preventDefault();
        }
        else {
            alert('Đăng kí thành công');
            $.ajax({
                type: "get",
                url: "http://localhost:8484/api/kh/insertKHWEB",
                data: IFKH,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                }
            });
            e.preventDefault();
        }
    }

    return (
        <div className='row'>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  mx-auto">
                <label className="fw-bold fs-5">Nhập Mã Xác Thực</label>
                <input type="text" className="form-control" maxLength={6} required="required" onChange={handle} />
                <button type="button" className="btn btn-danger px-5 fw-bold my-2 text-white" onClick={xl}>Xác Nhận</button>
            </div>
        </div>
    );
}

export default KhungXN;