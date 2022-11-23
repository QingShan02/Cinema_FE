import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Collapse from './collapse';
import { Link } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import LichChieu from './LichChieu';
function TieuDePhim(props) {
    const [data, setData] = useState(props.maPhim);
    // console.log(data);
    const [a, setA] = useState(new Array());
    const [isHide, setIsHide] = useState(false);
    const [ngay, setNgay] = useState('');
    const [isShow, setIsShow] = useState(1);
    let nd1 = null;



    useEffect(() => {

        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/phim/getMaPhim",
            data: { maPhim: data, ngay: '2022-11-22' },
            dataType: "json",
            success: function (response) {
                response.listTheloai = Object.values(response.listTheloai).toString();
                response.traller = response.traller.replace("watch?v=", "embed/");
                console.log(response.khunggio);
                setA(response.khunggio);
                // console.log(response);
                //  console.log(Object.values(response.khunggio));
                setData(response);

            }, error: function (a) {
                console.log(a);
            }
        });

        // console.log(isHide);
    }, []);
    const handleChange = (e) => {
        // console.log(e.target.value);
        setNgay(e.target.value);
    }
    useEffect(() => {
        // console.log(isHide);

    }, [isHide]);
    const handleCheck = (e) => {
        sessionStorage.setItem("xuatchieu", JSON.stringify({
            maPhim: data.maPhim,
            tenPhim: data.tenPhim,
            ngay: '2022-11-22',
            gioBatDau: e.target.text
        }));
    }
    // const temp = a.map(s => {
    //     if (getCookie("customer") == '') {
    //         return <div key={s} className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ padding: '15px 20px' }} >
    //             <Link className='btn btn-primary' onClick={(e) => {
    //                 if (!window.confirm("Vui lòng đăng nhập trước")) {
    //                     e.preventDefault();
    //                 }
    //             }} state={{ path: window.location.pathname }} to='/signin'>{s}</Link><br></br>
    //         </div>
    //     } else {
    //         return <div key={s} className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ padding: '15px 20px' }}>
    //             <Link className='btn btn-primary' onClick={handleCheck} state={{

    //                 ngay: '2022-11-22',

    //                 gioBatDau: s
    //             }} to={`/cn/${props.maPhim}`}>{s}</Link><br></br>

    //         </div>
    //     }
    // })
    // let nd = null;
    // if (!isHide) {
    //     nd = (<div className="row mt-10" style={{ height: 350 }} >

    //     </div>);
    // } else {
    //     nd = ();
    // }
    // console.log(temp);
    if (isShow === 1) {
        nd1 = <div className="row mt-10" style={{ height: 200, fontSize: 18, padding: '15px 30px' }} > {data.moTa}</div>
    } else if (isShow === 2) {
        nd1 = <iframe className='w-75 pt-10 d-block mx-auto ' style={{ padding: '25px 50px' }} height={350} src={data.traller} ></iframe>
    } else if (isShow === 3) {
        nd1 =<div>
        <LichChieu />

        </div> 
    }
    return (
        <div className="container bg-white " style={{ padding: '25px 50px' }}>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img src={process.env.PUBLIC_URL + `/image/poster/${data.hinh}`} className="float-start" width={204} height={300} />
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <h2 style={{ color: "red" }}>{data.tenPhim}</h2>
                    <hr style={{ width: 560, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    <p style={{ fontSize: 18 }}>Hàng ghế, phòng</p>
                    <p style={{ fontSize: 18 }}>Diễn viên: {data.dienVien}</p>
                    <p style={{ fontSize: 18 }}>Thể loại: {data.listTheloai}</p>
                    <p style={{ fontSize: 18 }}>Quốc gia: {data.quocGia}</p>
                    <p style={{ fontSize: 18 }}>Đạo diễn: {data.daoDien}</p>
                </div>


                <div className="container mt-3">

                    <ul className="nav nav-tabs" role="tablist">

                        <li className="nav-item">
                            <button type="button" className="nav-link  " style={{ color: 'red', fontSize: 20 }} onClick={() => { setIsShow(1) }}>NỘI DUNG</button>
                        </li>

                        <li className="nav-item">
                            <button type="button" className="nav-link" style={{ color: 'red', fontSize: 20 }} onClick={() => { setIsShow(2) }}>TRAILLER</button>
                        </li>

                        <li className="nav-item">
                            <button type="button" className="nav-link" style={{ color: 'red', fontSize: 20 }} onClick={() => { setIsShow(3) }}>LỊCH CHIẾU</button>
                        </li>


                    </ul>

                    {nd1}

                </div>

            </div>

        </div>
    );
}

export default TieuDePhim;

