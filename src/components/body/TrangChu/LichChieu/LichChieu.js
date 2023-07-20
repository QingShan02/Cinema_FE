import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "./stylelc.css";
import { Link } from 'react-router-dom';
// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 3 },
// ];
function LichChieu() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [datagiobd, setData_gbd] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [ngay, setngay] = useState([]);
    const [cn, setchinhanh] = useState([]);
    const [giobatdau1, setgiobatdau] = useState([]);
    let temp = JSON.parse(sessionStorage.getItem("xuatchieu"));
    useEffect(() => {
        $.ajax({
            type: "GET",
            async: false,
            url: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com//api/ngay/getNgay",
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
            url: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com//api/chinhanh/getAllChiNhanh",
            data: [],
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData2(response)
            }
        });
    }, []);
    useEffect(() => {
        $.ajax({
            type: "GET",
            async: false,
            url: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com//api/xuatchieu/XuatChieuTheoNgay",
            data: { ngay: ngay, macn: cn, gioBatDau: giobatdau1 },
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData1(response)
            }
        });
    }, [ngay, cn, giobatdau1]);
    useEffect(() => {
        $.ajax({
            type: "GET",
            async: false,
            url: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com//api/ngay/getgiobatdau1ngay",
            data: { maCN: cn, ngay: ngay },
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData_gbd(response)
            }
        });
    }, [cn, ngay]);
    const cnclick = (e) => {
        setchinhanh(e.target.value);

    };
    const chinhanh = data2.map((s, idcn) => {
        return <option value={s.maCN} key={idcn}>{s.tenCN}</option>
    });

    const Hclick = (e) => {
        console.log(e);
        setngay(e);

    };
    console.log(cn);
    console.log(ngay);
    console.log(giobatdau1);
    const gbd = datagiobd.map((s, gbd) => {
        return <div key={gbd}>
            <li className='gbd' onClick={() => setgiobatdau(s.gioBatDau)} >{s.gioBatDau}</li>
        </div>
    });
    console.log(gbd);
    const phim = data1.slice(0, data1.length).map((s, idd) => {
        let b = { ...temp, ...s };
        return <div key={idd} className="cardlc" style={{ border: '1px solid #000', width: 'auto', maxWidth: '1200px', marginLeft: '0px', marginBottom: '20px', maxHeight: 'auto' }}>
            <h4 className="card-title title">{s.tenPhim}</h4>
            <div className='col-lg-12 d-flex card2 row' style={{ paddingTop: '10px', paddingBottom: '10px', maxHeight: 'auto' }}>
                <div className="col-lg-3 col-xs-12">
                    <img src={`http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com//Image/poster/${s.hinh}`} alt="" style={{ height: '220px', width: '180px', borderRadius: '0px', marginBottom: '2px' }} />
                </div>
                <div className="col-lg-8 col-xs-12 d-flex">
                    <div className='' style={{ background: '#000', height: '220px', width: '2px', marginRight: '5px' }}></div>
                    <div>
                        <label>Ngày chiếu:</label><span style={{ marginLeft: '5px', width: 'auto', maxWidth: '100px' }}>{s.ngay}</span><hr style={{ width: '175px' }}></hr>
                        <label>Thời lượng:</label><span style={{ marginLeft: '5px', width: 'auto', maxWidth: '100px' }}>{s.thoiLuong}</span><hr style={{ width: '175px' }}></hr>
                        <label>Phòng Chiếu:</label><span style={{ marginLeft: '5px', width: 'auto', maxWidth: '100px' }}>{s.tenPhong}</span><hr style={{ width: '175px' }}></hr>
                        {/* <label>Giờ chiếu:</label><button style={{ marginLeft: '18px', width: 'auto', maxWidth: '100px', borderRadius: '25px' }}>{s.gioBatDau}</button> */}
                        <label style={{ marginRight: '10px' }}>Giờ Chiếu:</label><Link to={`/ctphim/${s.maPhim}/stt=${s.stt_xc}`} state={{ maPhim: s.maPhim, gioBatDau: s.gioBatDau }} onClick={() => { sessionStorage.setItem("xuatchieu", JSON.stringify(b)); }} key={s.stt} className="btn btn-outline-success">{s.gioBatDau}</Link>

                    </div>
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
        <div className='main' style={{ height: 'auto', maxHeight: 'auto', minHeight: '100vh' }} >
            <Carousel interval={null} className=' text-center col-lg-12 carousell' style={{ width: '100%' }} pause='hover' nextLabel='null'>
                {lc}
            </Carousel>

            <select onChange={cnclick} className="combobox">
                <option className='option' value="">Chi Nhánh</option>
                {chinhanh}
            </select>
            <hr className='hr'></hr>
            <div className='d-flex justify-content-center'>
                {gbd}
            </div>
            <hr className='hr'></hr>
            <div className='col-lg-12'>
                {phim}
            </div>
        </div>
    );
}

export default LichChieu;