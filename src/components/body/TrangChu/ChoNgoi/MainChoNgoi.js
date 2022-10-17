import React from 'react';
import { useEffect } from 'react';
import ChuThich from './ChuThich';
import Ghe from './Ghe';
import HangGhe from './HangGhe';
import TieuDePhong from './TieuDePhong';
// import { useEffect } from "react";
function MainChoNgoi() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
      }, [])
    return (

        <div className='container bg-white '>
            <TieuDePhong />
            <div className='container'>
                <div className='row'>
                    <HangGhe />
                    <Ghe />
                    <ChuThich />
                </div>
            </div>
        </div>





    );
}

export default MainChoNgoi;