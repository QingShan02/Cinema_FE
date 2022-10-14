import React from 'react';
import ChuThich from './ChuThich';
import Ghe from './Ghe';
import HangGhe from './HangGhe';
import TieuDePhong from './TieuDePhong';
function MainChoNgoi() {
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