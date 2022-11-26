import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
function HoaDon() {
    let data = useLocation();
    const [result,setResult] = useState({});
    // console.log(data.pathname.split("/")[2]);
    useEffect(()=>{
        $.ajax({
            type: "get",
            async:false,
            url: "http://192.168.1.15:8484/api/ve/getVe",
            data: {idVe:data.pathname.split("/")[2]},
            dataType: "json",
            success: function (response) {
                console.log(response);
                setResult(response);
            }
        });
    },[]);
    return (  <div className='container-fluid'>
        <h1>Thông tin vé</h1>
        <p>Tên khách hàng: {result.tenkh}</p>
        <p>Tên Phim: {result.tenPhim}</p>
        <p>Giá vé: {(result.giaVe)}</p>
    </div>);
}

export default HoaDon;
