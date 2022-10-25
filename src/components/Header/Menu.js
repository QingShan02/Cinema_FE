import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';
// import  useCookie  from 'react-use-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
// import { Cookies } from 'react-cookie';

function Menu() {
    // let data = null;
    const [isShow, setIsShow] = useState(false);
    const [cookie,setCookie, removeCookie] = useCookies("customer");
    const [data,setData] = useState(null);
    useEffect(()=>{

    },[data]);
    useEffect(()=>{
        if (getCookie("customer")!= '') {
            setData(JSON.parse(getCookie("customer")));
            // console.log(window.history);
            console.log(data);
        }
    },[]);
    // console.log(data);
    let fm;
    let menu = null;
    if (isShow) {
        menu = <ul className="dropdown-menu d-block " style={{backgroundColor:"transparent",position:"static" }} id="menu">
            <li><Link className="dropdown-item hvr-bounce-to-right text-white  text-center"  to="/pro">Thông tin cá nhân</Link></li>
            <li><a className="dropdown-item hvr-bounce-to-right text-white  text-center" onClick={()=> {removeCookie("customer"); setData(null)}} >Đăng xuất</a></li>
            {/* <li><a className="dropdown-item text-white" href="#">A third link</a></li> */}
        </ul>;
    }else{
        menu = '';
    }
    if (data != null) {
        fm = <><li className="nav-item mw-100 ">
            <a   onClick={() => setIsShow(!isShow)} role="button" aria-expanded="false" className="nav-link  dropdown-toggle w-100  text-white  text-center" ><i className="fa fa-user" aria-hidden="true"></i> {data.tenKH}</a>
            {menu}
        </li>
        </>

    } else {
        fm = <><li className="nav-item mw-100">
            <Link className='nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center' state={{path:window.location.pathname}} to="/signin"><i className="fa fa-sign-in" aria-hidden="true"></i> Đăng nhập</Link></li>
            <li className="nav-item mw-100">
            <Link className="nav-link w-100 border-bottom  hvr-bounce-to-right text-white  text-center" to="/dk"><i className="fa fa-key" aria-hidden="true"></i> Đăng kí</Link>
        </li></>
    }




    return (

        <ul className="nav flex-column p-0 " id="menu">
            <li className='nav-item mw-100 '>
                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                    <img
                        src="https://play-lh.googleusercontent.com/0oH3J4rY4gf5pILGT_zNMRkdj78UK5lwrP9AxC3_wJ_goNEHmZlAwxAX3JS-7wEUuo8=w240-h480-rw"
                        //  height="100" 
                        className='img-fluid w-100 d-block pb-10'
                        alt="MDB Logo"
                        loading="lazy"
                    />
                    <div style={{height:20}}> </div>
                </a>
            </li>
            <li className="nav-item mw-100 ">
                <Link className="nav-link w-100  active border-bottom hvr-bounce-to-right text-white text-center" to="/"> <i className="fa fa-home" aria-hidden="true" /> Trang Chủ</Link>
            </li>
            

            {fm}
            

        </ul>
    );

}

export default Menu;