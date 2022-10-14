import Menu from './Header/Menu';
import TrangChuComponent from './body/TrangChu/TrangChuComponent';
import FooterComponent from './footer/FooterComponent';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import MainKH from './body/TrangChu/ThongTinkhachHang/MainKH';
function TrangChu() {

    return (  <div className="container-fluid ">

    <div className="row ">
      <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 bg-black p-0 ">
        <Menu />

      </div>

      <div className="col-xs-10 col-sm-9 col-md-10 col-lg-10 bg-dark">
  <Routes>
    <Route path='/' exact element={<TrangChuComponent />}></Route>
    <Route path='/pro' element={<MainKH/>}></Route>
  </Routes>

      </div>

    </div>

    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <FooterComponent />

    </div>
  </div>);
}

export default TrangChu;