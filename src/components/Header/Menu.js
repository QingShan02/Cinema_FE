import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';

function Menu() {
    let data = null;
    if (getCookie("customer") != '') {
        console.log(1);
        data = JSON.parse(getCookie("customer"));
    }
    // console.log(data);
    let fm;
    if (data != null) {
        fm =
            <a className="nav-link w-100   text-white  text-center" >User: {data.tenKH}</a>;

    } else {
        fm = <li className="nav-item mw-100">
            <Link className='nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center' to="/signin">Đăng nhập</Link></li>
    }




    return (

        <ul className="nav flex-column p-0 " id="menu">
            <li className='nav-item'>
                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                    <img
                        src="https://play-lh.googleusercontent.com/0oH3J4rY4gf5pILGT_zNMRkdj78UK5lwrP9AxC3_wJ_goNEHmZlAwxAX3JS-7wEUuo8=w240-h480-rw"
                        //  height="100" 
                        className='img-fluid mx-auto d-block '
                        alt="MDB Logo"
                        loading="lazy"
                    />
                </a>
            </li>
            <li className="nav-item mw-100 ">
                <Link className="nav-link w-100  active border-bottom hvr-bounce-to-right text-white text-center" to="/"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" /></svg>Trang Chủ</Link>
            </li>
            <li className="nav-item mw-100 ">
                <a className="nav-link w-100  active border-bottom hvr-bounce-to-right text-white text-center" href="">Phim</a>
            </li>
            <li className="nav-item mw-100">
                <a className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" href="#">Lịch chiếu phim</a>
            </li>
            <li className="nav-item mw-100">
                <a className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" href="#">Vé đã đặt</a>
            </li>
            <li className="nav-item mw-100">
                <Link className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" to="/pro">Thông tin cá nhân</Link>
            </li>
            <li className="nav-item mw-100">
                <Link className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" to="/tp">Topping</Link>
            </li>
            {fm}
            <li className="nav-item mw-100">
                <Link className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" to="/dk">Đăng kí</Link>
            </li>

        </ul>
    );

}

export default Menu;