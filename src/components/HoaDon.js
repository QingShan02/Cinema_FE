import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import { useContext } from 'react';
import '../App.css';
import AppProvider, { AppContext } from '../Context/AppProvider';
function HoaDon() {
    let data = useLocation();
    const [result,setResult] = useState({});
    const Server = useContext(AppContext);
    const [tp,setTp] = useState({});
    console.log(data);
    // console.log(ip);
    // console.log(`http://${Server.data.ip}:8484/api/ve/getVe`);
    // console.log(data.pathname.split("/")[2]);
    useEffect(()=>{
        $.ajax({
            type: "get",
            async:false,
            url: `http://${Server.data.ip}:8484/api/ve/getVe`,
            data: {idVe:data.pathname.split("/")[2]},
            dataType: "json",
            success: function (response) {
                // console.log(response);
                setResult(response);
            },error:function (e){
                console.log(e);
            }
        });
        $.ajax({
            type: "get",
            async:false,
            url: `http://${Server.data.ip}:8484/api/order/getOrder`,
            data: {idVe:data.pathname.split("/")[2]},
            dataType: "json",
            success: function (response) {
                console.log(response);
                setTp(response);
            },error:function (e){
                console.log(e);
            }
        });
    },[]);
    let temp =null;
    if(tp !=null){
        temp = tp.map(s=>{
            
        })
    }
    return ( 
         <div id='divShowVe' className='container-fluid border d-block mx-auto ' style={{marginTop:"30px", width:"70%"}}>
        <img src={`http://${Server.data.ip}:8484/Image/qrCode/${data.pathname.split("/")[2]}.jpg`}></img>
        <h1>Thông tin vé</h1>
        <p>Tên khách hàng: {result.tenkh}</p>
        <p>Nơi xem: T1 Cinema - {result.diachi}</p>
        <hr/>
        <img className='d-block mx-auto' src={`http://${Server.data.ip}:8484/Image/poster/${result.hinh}`} height="300px"/>
        <p>Loại vé: <span className='btn btn-success'>{result.tenloai}</span> </p>
        <p>Hàng ghế: {result.tenghe}</p>
        <p>Tên Phim: {result.tenPhim}</p>
        <p>Giá vé: {(result.giaVe)}</p>
        <p>Ngày chiếu: {result.giochieu}</p>
    </div>
);
}

export default HoaDon;
