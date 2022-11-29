import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "./stylelc.css";

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 3 },
// ];
function LichChieu() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [ngay, setngay] = useState([]);
    useEffect(() => {
        $.ajax({
            type: "GET",
            async: false,
            url: "http://localhost:8484/api/ngay/getNgay",
            data: [],
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData(response)
            }
        });
    }, []);
    useEffect(() => {
        $.ajax({
            type: "GET",
            async: false,
            url: "http://localhost:8484/api/xuatchieu/XuatChieuTheoNgay",
            data: { ngay: ngay },
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData1(response)
            }
        });
    }, [ngay]);
    const Hclick = (e) => {
        console.log(e);
        setngay(e);

    };
    const phim = data1.slice(0, data1.length).map((s, idd) => {

        return <div className="col-lg-12 row  cardlc container" key={idd} style={{ border: '1px solid #000', width: '1200px', marginLeft: '0px', marginBottom: '20px' }}>
            <h4 className="card-title title">{s.tenPhim}</h4>
            <div className='col-lg-12 d-flex card2' style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <div className="col-lg-2">
                    <img src={`http://localhost:8484/Image/poster/${s.hinh}`} alt="" style={{ height: '220px', width: '180px', borderRadius: '0px' }} />
                </div>
                <div className='col-lg-1' style={{ background: '#000', height: '220', width: '2px', marginRight: '5px' }}></div>
                <div className="col-lg-6">
                    <label>Ngày chiếu:</label><span style={{ marginLeft: '5px', width: '100px' }}>{s.ngay}</span><hr style={{ width: '188px' }}></hr>
                    <label>Thời lượng:</label><span style={{ marginLeft: '5px', width: '100px' }}>{s.thoiLuong}</span><hr style={{ width: '188px' }}></hr>
                    <label>Giờ chiếu:</label><span style={{ marginLeft: '18px', width: '100px', borderRadius: '25px' }}>{s.gioBatDau}</span>
                </div>
            </div>
        </div>

    })
    let lc = data.map((s, idx) => {

        return <Carousel.Item key={idx} onClick={() => {
            Hclick(s.ngay)
            setIsShow(!isShow)
        }}>
            <button className='button'>{s.ngay} </button></Carousel.Item >
    })
    console.log({ phim });
    return (
        <div className='container main' style={{ height: 'auto', maxHeight: 'auto', minHeight: '100vh' }} >
            <Carousel interval={null} className='d-block text-center col-log-6 carousell' style={{ width: '100%' }} pause='hover' nextLabel='null'>
                {lc}
            </Carousel>
            <hr className='hr'></hr>
            <div>
                {phim}
            </div>
            <hr className='hr'></hr>
        </div>
    );
}

export default LichChieu;