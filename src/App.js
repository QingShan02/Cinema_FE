// import React, { Component } from 'react';
import Menu from './components/Header/Menu';
import FooterComponent from './components/footer/FooterComponent';
import TrangChuComponent from './components/body/TrangChu/TrangChuComponent';
import React, { useState } from 'react';
function App() {
  return (<div className="container-fluid ">

    <div className="row">
      <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 bg-black p-0 ">
        <Menu />

      </div>

      <div className="col-xs-10 col-sm-9 col-md-10 col-lg-10 bg-dark">
        <TrangChuComponent />
      </div>

    </div>

    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <FooterComponent />

    </div>
  </div>);
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
