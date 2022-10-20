import React from 'react';
function khungdangki() {
    return (
        <div>
            <h3 className="text-center bg-danger text-white pb-1">Đăng Kí</h3>
            <div className="mb-3">
                <label className="form-label fw-bold">Họ và Tên</label>
                <input type="email" className="form-control" placeholder="......" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Số Điện Thoại</label>
                <input type="email" className="form-control" placeholder="....." />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="name@gmail.com" />
            </div>
            <div className="col-auto">
                <label className="col-form-label fw-bold">Mật Khẩu</label>
                <input type="password" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="col-auto">
                <label className="col-form-label fw-bold">Xác Nhận Mật Khẩu</label>
                <input type="password" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
        </div>

    );
}

export default khungdangki;