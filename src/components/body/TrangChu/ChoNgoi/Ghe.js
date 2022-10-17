// import React from 'react';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';

function Ghe() {
    const [data, setData] = useState([]);
    const [obj, setObj] = useState([]);
    const [mau, setMau] = useState("bg-success");
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/cn/findGhePhong",
            data: { MaPhong: "PC06" },
            dataType: "json",
            success: function (response) {
                setData(response);
            }
        });
        console.log(obj);
        // console.log(mau);
    }, [obj])
    function xuly(e) {
        let color = "bg-success";
        if (e.maLoai == 3) {
            color = "bg-danger";
        } else if (e.maLoai == 2) {
            color = "bg-warning";
        }
        return color;
    }
    const handle = (ev) => { 
        console.log(ev.target);
    }
    const temp = data.map(function (e) {
        return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
            <button className={`card text-center my-2 py-2  ${xuly(e)}`} onClick={() => { setObj(e);}}  style={{ width: '50px', height: 'auto' }} >
                <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
            </button>
        </div >
    });
    return (
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <div className="row" >
                {temp}
            </div>
        </div>
    );
}


export default Ghe;