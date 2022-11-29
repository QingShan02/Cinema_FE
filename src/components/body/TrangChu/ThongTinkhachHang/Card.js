import React, { useEffect, useState } from 'react';
import "./styleKH.css";
function Card(props) {
    const [isShow, setIsShow] = useState(false);
    let khoi = null;
    if (isShow) {
        khoi = (
            <div className="d-block btn btn-default" >
                <p><span>Id Vé:</span> {props.idve}</p>
                <p><span>Giờ bắt đầu:</span> {props.giobatdau}</p>
                <p><span>Tổng giá vé:</span> {props.giaVe}</p>
            </div>
        );
    } else {
        khoi = (<div></div>);
    }
    return (
        <div className="" style={{ borderBottom: '1px solid #BC5014', width: '600px' }}>
            <div className="d-flex align-content-center justify-content-between pb-3">
                <div className="d-flex">
                    {/* <div className="hehe" style={{ width: '85px', height: '85px' }}>
                        <img src="" className="w-100 rounded" alt="" />
                    </div> */}
                    <p className="font-weight-bold" style={{ marginTop: '2px' }}><span>Phim:</span> {props.tenphim}</p>
                </div>
                <div>
                    <p className="font-weight-bold" style={{ marginTop: '2px', color: 'rgba(0, 0, 0, 0.6)' }}><span>Xem ngày:</span> {props.ngay}</p>
                </div>
                <div>
                    <a className="font-weight-bold app" style={{ marginTop: '2px', color: '#0000FF' }} onClick={() => { setIsShow(!isShow) }}>Chi tiết</a>
                </div>
            </div>
            {khoi}
        </div >
    );
}
export default Card;
