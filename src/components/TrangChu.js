import Menu from './Header/Menu';
import TrangChuComponent from './body/TrangChu/TrangChuComponent';
import FooterComponent from './footer/FooterComponent';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import MainKH from './body/TrangChu/ThongTinkhachHang/MainKH';
import MainCTPhim from './body/ChiTietPhim/MainCTPhim';
import MainChoNgoi from './body/TrangChu/ChoNgoi/MainChoNgoi';
import MainTP from './body/Topping/MainTP';
import MainDk from './body/TrangChu/DangKi/MainDK';
import MainXN from './body/TrangChu/XacNhan/MainXN';
import MainThanhToan from './body/ThanhToan/MainThanhToan';
import DangNhap from './DangNhap';
function TrangChu() {


  return (
    <div className="container-fluid p-0 ">

      <div className="row ">
        <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 bg-black p-0 ">
          <Menu />

        </div>

        <div className="col-xs-10 col-sm-9 col-md-10 col-lg-10 bg-dark p-0">
          <Routes>
            <Route path='/' exact element={<TrangChuComponent />}></Route>
            <Route path='/pro' element={<MainKH />}></Route>
            <Route path='/ctphim/*' element={<MainCTPhim />}></Route>
            <Route path='/cn/*' element={<MainChoNgoi />}></Route>
            <Route path='/dk/*' element={<MainDk />}></Route>
            <Route path='/tp/*' element={<MainTP />}></Route>
            <Route path='/XacNhan' element={<MainXN />}></Route>
            <Route path='/thanhtoan/*' element={< MainThanhToan />}></Route>
            <Route path='/pro/*' element={< MainKH />}></Route>
          </Routes>

        </div>

      </div>


      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <FooterComponent />

      </div>
    </div>);
}

export default TrangChu;