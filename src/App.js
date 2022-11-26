// import React, { Component } from 'react';

import React, { useState } from 'react';
import TrangChu from './components/TrangChu';
import { createBrowserRouter, BrowserRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import DangNhap from './components/DangNhap';
import MainXN from './components/body/TrangChu/XacNhan/MainXN';
import { createBrowserHistory } from 'history';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import HoaDon from './components/HoaDon';
function App() {
  const history = createBrowserHistory();
  return (

      <BrowserRouter basename='/RapChieuPhim_Web' history={history}>
        

        <Routes>
          <Route path='*' exact element={<TrangChu />}></Route>
          <Route path='/signin' element={<DangNhap />}></Route>
          <Route path='/qrCodeVe/*' element={<HoaDon />}></Route>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="container-fluid ">

//         <div className="row">
//           <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 bg-dark">
//             <Menu />

//           </div>

//           <div className="col-xs-10 col-sm-9 col-md-10 col-lg-10">
//             <TrangChuComponent />
//           </div>

//         </div>

//         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//           <FooterComponent />

//         </div>
//       </div>



//     )
//   }
// }

// export default App;
