import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { data } from 'jquery';

function RanDom() {
    // const [code, setCode] = useState([]);

    // let allNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // useEffect(() => {
    //     for (let i = 0; i < 6; i++) {
    //         let randomCode = allNumber[Math.floor(Math.random() * allNumber.length)];
    //         setCode(value => { return randomCode + value });
    //     }
    // }, [])


    // // function handleClick(e) {
    // //     if (sessionStorage.getItem('pass') !== sessionStorage.getItem('repass')) {
    // //         e.preventDefault();
    // //         alert('Mật khẩu không trùng khớp');
    // //     }
    // //     if (sessionStorage.getItem('recaptcha') === null) {
    // //         alert('Chưa nhập captcha');
    // //     }
    // // }
    // const sendEmail = (e) => {
    //     let email = sessionStorage.getItem('email');
    //     emailjs.send('service_76rhmqm', 'template_y7qq009', { to_email: email, message: code }, 'aYN1rK9I-975kaFc3', {
    //     })
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };
    // return (
    //     <div className="row" >

    //         <div>
    //             <div className="my-2 col-auto">
    //                 <input type="checkbox" /><span className="mx-2">Tôi đồng ý với các điều khoản của CGV</span>
    //             </div>
    //             <Link type="button" className="btn btn-danger px-5 fw-bold mb-2" onClick={sendEmail} to='/XacNhan' state={{ code }}>Đăng Kí</Link>
    //         </div>
    //     </div >
        

    // );
}

export default RanDom;