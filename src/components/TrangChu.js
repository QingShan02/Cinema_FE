import Menu from './Header/Menu';
import TrangChuComponent from './body/TrangChu/TrangChuComponent';
import FooterComponent from './body/TrangChu/footer/FooterComponent';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import MainKH from './body/TrangChu/ThongTinkhachHang/MainKH';
import MainCTPhim from './body/ChiTietPhim/MainCTPhim';
import MainChoNgoi from './body/TrangChu/ChoNgoi/MainChoNgoi';
import MainTP from './body/Topping/MainTP';
import MainDk from './body/TrangChu/DangKi/MainDK';
import MainXN from './body/TrangChu/XacNhan/MainXN';
import MainThanhToan from './body/ThanhToan/MainThanhToan';
import MainTimKiem from './body/TrangChu/TimKiem/MainTimKiem';
import MainHC from './body/TrangChu/HeaderContainer/MainHC';
import Banner from './body/TrangChu/Banner/MainBanner';
import DangNhap from './DangNhap';
import Carousel from 'react-bootstrap/Carousel';
import MainBanner from './body/TrangChu/Banner/MainBanner';
import MainLC from './body/TrangChu/LichChieu/MainLC';
function TrangChu() {


  return (
    <div className="container-fluid p-0 ">

      <div className="row ">
        <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 bg-black p-0 ">
          <Menu />

        </div>

        <div className="col-xs-10 col-sm-9 col-md-10 col-lg-10 bg-dark p-0">



          <Routes >
            <Route path='/' exact element={<TrangChuComponent />}>
            </Route>
            <Route path='/pro' element={<MainKH />}></Route>
            <Route path='ctphim/:id' index element={<MainCTPhim />}></Route>
            <Route path='ctphim/:id/stt=:id' index element={<MainChoNgoi />}></Route>
            <Route path='ctphim/:id/stt=:id/tp/thanhtoan/' element={< MainThanhToan />}></Route>

            {/* <Route path='/cn/*' element={<MainChoNgoi />}></Route> */}
            <Route path='/dk/*' element={<MainDk />}></Route>
            <Route path='ctphim/:id/stt=:id/tp' element={<MainTP />}></Route>
            <Route path='/XacNhan' element={<MainXN />}></Route>
            <Route path='/pro/*' element={< MainKH />}></Route>
            <Route path='/lc/*' element={< MainLC />}></Route>
          </Routes>

        </div>

      </div>






      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <FooterComponent />

      </div>
    </div>);
}

export default TrangChu;