import React from 'react';
function KhungXN() {
    return (
        <div className='row'>

            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div>
                    <label className='fw-bold fs-2' >Nhập Mã Xác Thực</label>
                    <input type="text" className="form-control" required="required" />
                    <label className='fw-bold fs-2'>Xác Nhận Mã Xác Nhận</label>
                    <input type="text" className="form-control" required="required" />
                </div>
            </div>
            <button type="button" class="btn btn-danger px-5 fw-bold mb-2 text-white">Xác Nhận</button>
        </div>
    );
}

export default KhungXN;