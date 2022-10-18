// import React from 'react';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';

function Ghe() {
    const [data, setData] = useState([]);
    const [obj, setObj] = useState([]);
    // const [mau, setMau] = useState("bg-success");
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
        if (obj !== '') {
            // console.log(obj);
            setObj({ maGhe: obj.maGhe, mau: 'bg-secondary' });
    
            // setObj("");
        }
        // xuly();
        // if (obj.maLoai == 3) {
        //     console.log("hehe");
        //     setMau("bg-danger");
        // } else if (obj.maLoai == 2) {
        //     setMau("bg-warning");
        // } else {
        //     setMau("bg-primary");
        // }
        // console.log(mau);
    }, [obj]);

    // function xuly(e) {
    // let color = "bg-success";
    // console.log(e);

    // return mau;
    const temp = data.map(function (e) {
        // console.log(e);
        //    xuly(e);
        let color = null;

        if (e.maLoai === 3) {
            // console.log("hehe");
            color = "bg-danger";
        } else if (e.maLoai === 2) {
            color = "bg-warning";
        } else {
            color = "bg-success";
        }
        if (obj.maGhe !== e.maGhe) {
            return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
                <button className={`card text-center my-2 py-2  ${color}`} onClick={() => { setObj({ maGhe: e.maGhe, mau: color }); }} style={{ width: '50px', height: 'auto' }} >
                    <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
                </button>
            </div >
        }else{
            return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
            <button className={`card text-center my-2 py-2  ${obj.mau}`} onClick={() => { setObj({ maGhe: '', mau: '' }); }} style={{ width: '50px', height: 'auto' }} >
                <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
            </button>
        </div >
        }

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