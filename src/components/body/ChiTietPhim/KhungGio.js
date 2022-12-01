import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';

import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../../../Context/AppProvider';

function KhungGio({ maCN, maPhim, tenPhim }) {
    const [data, setData] = useState([]);
    // const [isShow,setIsShow] = useState(true);
    let temp = JSON.parse(sessionStorage.getItem("xuatchieu"));
    const Server = useContext(AppContext);
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: `http://${Server.data.ip}:8484/api/ngay/getGioBatDau`,
            data: { maPhim: maPhim, maCN: maCN },
            dataType: "json",
            success: function (response) {

                // console.log(response.length);
                setData(response);
            }, error: function (a) {
                console.log(a);
            }
        });
    }, []);
    let label = <label htmlFor="">2D - Phụ đề</label>;
    let a = data.map((s) => {
        if (getCookie("customer") == '') {
            return <Link key={s.stt} className='btn btn-outline-success' onClick={(e) => {
                    if (!window.confirm("Vui lòng đăng nhập trước")) {
                        e.preventDefault();
                    }
                }} state={{ path: window.location.pathname }} to='/signin'>{s.gioBatDau}</Link>
        } else {
            let b = { ...temp, ...s };
            // console.log(b);
            return <Link to={`/ctphim/${maPhim}/stt=${s.stt_xc}`} state={{ maPhim: maPhim, gioBatDau: s.gioBatDau }} onClick={()=>{sessionStorage.setItem("xuatchieu",JSON.stringify(b));}} key={s.stt} className="btn btn-outline-success">{s.gioBatDau}</Link>
        }

    });
    if (data.length === 0) {
        label = <></>;
        a = <>Không có lịch chiếu của chi nhánh này</>;
    }

    return (
        <div className="tt">
            {label}
            <div className="khoibtn" style={{ marginLeft: 50 }}>
                {a}
            </div>
        </div>

    );
}


export default KhungGio;
