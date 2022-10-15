// import React from 'react';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';

function Ghe() {
    const [data, setData] = useState([]);
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/cn/findGhePhong",
            data: { MaPhong: "PC01" },
            dataType: "json",
            success: function (response) {
                setData(response);
                console.log(response);
            }
        });
    }, [])

    const temp = data.map(function (e) {
        return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
            <div className="card text-center my-2 py-2 bg-success" style={{ width: '50px', height: 'auto' }} >
                <div className="card-text font-weight-bold text-white">{e.tenGhe}</div>
            </div>
        </div>
    });
    return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="row">
                {temp}
            </div>
        </div>
    );
}

export default Ghe;