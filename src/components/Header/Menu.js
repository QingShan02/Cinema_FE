import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';

function Menu() {
    let data = null;
    //  data = JSON.parse(getCookie("customer"));
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
                <Link className="nav-link w-100  active border-bottom hvr-bounce-to-right text-white text-center" to="/">Trang Chủ</Link>
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
                <Link className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" to="/cn">Xem Chỗ Ngồi</Link>
            </li>
            {fm}


        </ul>
    );

}

export default Menu;