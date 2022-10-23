import React, { useState, useEffect } from 'react';

function KhungDK() {
    const [data, setData] = useState([]);

    useEffect(() => {

    }, [data]);
    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }));
    };

    return (
        <div>
            <h3 className="text-center bg-danger text-white pb-1">Đăng Kí</h3>

            <div className="mb-3">
                <label className="form-label fw-bold">Họ và Tên</label>
                <input type="text" name='name' className="form-control" placeholder="......" onChange={handle} required />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Số Điện Thoại</label>
                <input type="text" name='sdt' className="form-control" maxLength={10} placeholder="....." onChange={handle} required />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" name='email' className="form-control" placeholder="name@gmail.com" onChange={handle} onKeyUp={() => {
                    sessionStorage.setItem('email', JSON.stringify(data.email));
                }} required />
            </div>
            <div className="col-auto">
                <label className="col-form-label fw-bold">Mật Khẩu</label>
                <input type="password" name='pass' className="form-control" onChange={handle} required />
            </div>
            <div className="col-auto">
                <label className="col-form-label fw-bold">Xác Nhận Mật Khẩu</label>
                <input type="password" name='repass' className="form-control" onChange={handle} onKeyUp={() => {
                    sessionStorage.setItem('i4', JSON.stringify(data));
                }} required />
            </div>
        </div>

    );
}
export default KhungDK;