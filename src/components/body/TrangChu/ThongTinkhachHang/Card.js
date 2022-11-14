import React from "react";
function Card(props) {
    return (
        <div className="mt-4">
            <div className="d-flex align-content-center justify-content-between pb-3" style={{ borderBottom: '1px solid #BC5014' }}>
                <div className="d-flex align-content-center">
                    {/* <div className="hehe" style={{ width: '85px', height: '85px' }}>
                        <img src="" className="w-100 rounded" alt="" />
                    </div> */}
                    <p className="font-weight-bold ml-4" style={{ marginTop: '2px' }}>Phim: {props.tenphim}</p>
                </div>
                <div>
                    <p className="font-weight-bold" style={{ marginTop: '2px', color: 'rgba(0, 0, 0, 0.6)' }}>Xem ngày: {props.ngay}</p>
                </div>
                <div>
                    <button className="font-weight-bold " id="aaa" style={{ marginTop: '2px', color: '#0000FF' }} >Chi tiết</button>
                </div>
            </div>
        </div>
    );
}
export default Card;