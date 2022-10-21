import React from 'react';
import { getCookie } from 'react-use-cookie';

function RanDom() {

    let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let capt = '';
    for (let i = 0; i < 6; i++) {
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        capt += `${randomCharacter}`;
    }
    const cap = (<span className='form-control bg-secondary text-white' >{capt}</span>);


    let maCap = '';
    const handelChange = (event) => {
        maCap = ` ${event.target.value}`;
        return maCap;
    }
    const handel = () => {
        if (maCap != capt || maCap === '') {
            console.log(maCap);
            alert('Mã không trùng khớp!');
        }
    }
    return (
        <div className="row" >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <label className="col-form-label fw-bold">Vui lòng nhập kí tự bên dưới</label>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <form action="#" >
                    <input className='form-control' type="text" onChange={handelChange} placeholder="Nhập captcha" maxLength={6} spellCheck="false" required />
                </form>

            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                {cap}
            </div>
            <div>
                <div className="my-2 col-auto">
                    <input type="checkbox" /><span className="mx-2">Tôi đồng ý với các điều khoản của CGV</span>
                </div>
                <button type="button" className="btn btn-danger px-5 fw-bold mb-2" onClick={handel}>Đăng Kí</button>
            </div>
        </div>

    );
}

export default RanDom;