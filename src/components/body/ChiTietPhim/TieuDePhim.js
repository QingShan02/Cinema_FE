import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import LichChieu from './LichChieu';
import { AppContext } from '../../../Context/AppProvider';
function TieuDePhim(props) {
    const [data, setData] = useState(props.maPhim);
    const [a, setA] = useState(new Array());
    const [isHide, setIsHide] = useState(false);
    const [ngay, setNgay] = useState('');
    const [isShow, setIsShow] = useState(1);
    let nd1 = null;
    const Server = useContext(AppContext);


    useEffect(() => {

        $.ajax({
            type: "get",
            async: false,
            url: `http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/api/phim/getMaPhim`,
            data: { maPhim: data, ngay: '2022-11-22' },
            dataType: "json",
            success: function (response) {
                response.listTheloai = Object.values(response.listTheloai).toString();
                response.traller = response.traller.replace("watch?v=", "embed/");
                setA(response.khunggio);
                setData(response);

            }, error: function (a) {
                console.log(a);
            }
        });

    }, []);
    const handleChange = (e) => {
        setNgay(e.target.value);
    }
    useEffect(() => {
    }, [isHide]);
    const handleCheck = (e) => {
        sessionStorage.setItem("xuatchieu", JSON.stringify({
            maPhim: data.maPhim,
            tenPhim: data.tenPhim,
            ngay: '2022-11-22',
            gioBatDau: e.target.text
        }));
    }
    if (isShow === 1) {
        nd1 = <div className="row mt-10" style={{ height: 200, fontSize: 18, padding: '15px 30px' }} > {data.moTa}</div>
    } else if (isShow === 2) {
        nd1 = <iframe className='w-75 pt-10 d-block mx-auto ' style={{ padding: '25px 50px' }} height={350} src={data.traller} ></iframe>
    } else if (isShow === 3) {
        nd1 =<div>
        <LichChieu maPhim = {data.maPhim} tenPhim={data.tenPhim} />

        </div> 
    }
    return (
        <div className="container bg-white " style={{ padding: '25px 50px' }}>
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img src={`http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/Image/poster/${data.hinh}`}  className="float-start" width={204} height={300} />
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

