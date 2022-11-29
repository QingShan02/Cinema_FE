import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { stringify } from 'qs';

function KhungGio({maCN, maPhim}) {
    const [data, setData] = useState([]);
    let temp = JSON.parse(sessionStorage.getItem("xuatchieu"));
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/ngay/getGioBatDau",
            data: {maPhim: maPhim, maCN: maCN},
            dataType: "json",
            success: function (response) {
                setData(response);
            }, error: function (a) {
                console.log(a);
            }
        });
    }, []);

    const a = data.map((s) => {
        let b = {...temp,...s};
        console.log(b);
         return  <Link to="/cn" state={{maPhim:maPhim, gioBatDau: s.gioBatDau}} onClick={()=>{sessionStorage.setItem("xuatchieu",JSON.stringify(b))}}  key={s.stt} className="btn btn-outline-success">{s.gioBatDau}</Link>
    });

    return (
        <div className="tt">
            <label htmlFor="">2D - Phụ đề</label>
            <div className="khoibtn" style={{ marginLeft: 50 }}>
                {a}
            </div>
        </div>
    );
}

export default KhungGio;
