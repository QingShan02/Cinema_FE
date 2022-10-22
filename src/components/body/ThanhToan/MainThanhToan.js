import React from 'react';
import HinhThuc from './HinhThuc';
import Bill from './Bill';
function MainThanhToan() {
    return (<div className="container-fluid bg-white h-100" >
        <p className="h1">Thanh toán</p>
        <hr width={100} style={{ backgroundColor: 'black', border: 'none', height: 10, opacity: 1 }} />
        <div className="row">
            <HinhThuc />
            <Bill />
        </div>
    </div>

    );
}

export default MainThanhToan;