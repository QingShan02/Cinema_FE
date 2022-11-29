import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import { Link } from 'react-router-dom';
import { stringify } from 'qs';

function KhungGio({maCN, maPhim, handleCheck}) {
    const [data, setData] = useState([]);
    // const [isShow,setIsShow] = useState(true);
    let temp = JSON.parse(sessionStorage.getItem("xuatchieu"));
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/ngay/getGioBatDau",
            data: {maPhim: maPhim, maCN: maCN},
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
            //  return  <button type="button" className="btn btn-outline-dark">{s.gioBatDau}</button>
            //  return  <button type="button" key={s.stt}className="btn btn-outline-dark" >{s.gioBatDau}</button>
         
            let b = {...temp,...s};
            console.log(b);
             return  <Link to="/cn" state={{maPhim:maPhim, gioBatDau: s.gioBatDau}} onClick={()=>{sessionStorage.setItem("xuatchieu",JSON.stringify(b))}}  key={s.stt} className="btn btn-outline-success">{s.gioBatDau}</Link>
        });
    if(data.length ===0){
        label = <></>;
        a =<>Không có lịch chiếu của chi nhánh này</>;
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
