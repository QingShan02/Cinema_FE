import React, { useState, useEffect, useCallback } from 'react';
let capt = '';

function KhungDK() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);


    useEffect(() => {
        if (capt == '') {
            let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            // const [capt, setCapt] = useState('');

            // useEffect(() => {

            // }, [capt]);
            // let temp = '';
            // useEffect(() => {

            // }, []);
            for (let i = 0; i < 6; i++) {
                let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
                // temp += `${randomCharacter}`;
                capt += `${randomCharacter}`;
            }
            setData1(capt);
        }
    }, []);

    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }));
    };
    // console.log(capt);
    const cap = (<span className='form-control bg-secondary text-white' >{data1}</span>);
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
                <input type="password" name='pass' className="form-control" onChange={handle} required onKeyUp={() => {
                    sessionStorage.setItem('pass', JSON.stringify(data.pass));
                }} />
            </div>
            <div className="col-auto">
                <label className="col-form-label fw-bold">Xác Nhận Mật Khẩu</label>
                <input type="password" name='repass' className="form-control" onChange={handle} onKeyUp={() => {
                    sessionStorage.setItem('repass', JSON.stringify(data.repass));
                }} required />
            </div>

            <div className="row">
                <label className="col-form-label fw-bold">Vui lòng nhập kí tự bên dưới</label>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <form action="#" >
                        <input className='form-control' name='recaptcha' type="text" onChange={handle} onKeyUp={() => {
                            sessionStorage.setItem('recaptcha', data.recaptcha);
                        }} placeholder="Nhập captcha" maxLength={6} spellCheck="false" required />
                    </form>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    {cap}
                </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </div>

    );
}
export default KhungDK;