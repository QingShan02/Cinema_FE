import React from 'react';
function ChuThich() {
    return (
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div className="container mt-2 " style={{ height: '70px', width: '200px' }}>
                <div className="card h-50  w-25 bg-success" />
                <div className="mt-2" >Ghế thường</div>
            </div>
            <div className="container mt-2 " style={{ height: '70px', width: '200px' }}>
                <div className="card mr-1 mt-1 h-50 w-25 bg-warning float-left" />
                <div className="mt-2 ">Ghế Đôi</div>
            </div>
            <div className="container mt-2 " style={{ height: '70px', width: '200px' }}>
                <div className="card mr-1 mt-1 h-50 w-25 bg-danger float-left" />
                <div className="mt-2">Ghế Vip</div>
            </div>
            <div className="container mt-2 " style={{ height: '70px', width: '200px' }}>
                <div className="card mr-1 mt-1 h-50 w-25 bg-secondary float-left" />
                <div className="mt-2 ">Ghế Đã Đặt</div>
            </div>
        </div>
    );
}

export default ChuThich;