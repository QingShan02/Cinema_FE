import React from 'react';
import { useLocation } from 'react-router-dom';
function KhungXN() {
    const data = useLocation();
    const code = data.state;
    let xtcode;
    const handle = (e) => {
        xtcode = e.target.value;
        console.log(xtcode);
    }
    function xl(e) {
        if (code !== xtcode) {
            alert('Mã xác thực không chính xác');
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