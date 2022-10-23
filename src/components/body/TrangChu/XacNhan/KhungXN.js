import React from 'react';
function KhungXN() {
    return (
        <div className='row'>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  mx-auto">
                <label className="fw-bold fs-5">Nhập Mã Xác Thực</label>
                <input type="text" className="form-control" required="required" />
                <label className="fw-bold fs-5">Xác Nhận Mã Xác Thực</label>
                <input type="text" className="form-control" required="required" />
                <button type="button" className="btn btn-danger px-5 fw-bold my-2 text-white">Xác Nhận</button>
            </div>
        </div>
    );
}

export default KhungXN;