// import React from 'react';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Ghe(props) {
    const [data, setData] = useState([]);
    const [obj, setObj] = useState([]);
    // const [mau, setMau] = useState("bg-success");

    useEffect(() => {

    }, [obj]);

    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/cn/findGhePhim",
            data: props.obj,
            dataType: "json",
            success: function (response) {
                setData(response);
                console.log(response);
            }
        });

    }, []);

    // return mau;
    const temp = data.map(function (e) {

        let color = null;

        if (e.maLoai === 3) {
            color = "bg-danger";
        } else if (e.maLoai === 2) {
            color = "bg-warning";
        } else {
            color = "bg-success";
        }
        if(e.idVe==0){
            if (obj.maGhe !== e.maGhe) {
                return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
                    <button className={`card text-center my-2 py-2  ${color}`} onClick={() => { 
                        sessionStorage.setItem("ghe",JSON.stringify(e));
                        setObj(e); 
                        }} style={{ width: '50px', height: 'auto' }} >
                        <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
                    </button>
                    {/* <Link></Link> */}
                </div >
            } else {
                console.log(obj);
                return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
                    <button className={`card text-center my-2 py-2  bg-info`} onClick={() => { 
                                            sessionStorage.setItem("ghe","");
                        setObj(''); }} style={{ width: '50px', height: 'auto' }} >
                        <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
                    </button>
                </div >
            }
        } else{
            return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
                    <button className={`card text-center my-2 py-2  bg-secondary`}  style={{ width: '50px', height: 'auto' }} >
                        <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
                    </button>
                    {/* <Link></Link> */}
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