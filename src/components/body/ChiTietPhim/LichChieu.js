import React from 'react';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import './lichchieu.css';
import KhungGio from './KhungGio';
function LichChieu({maPhim}) {
    const [data, setData] = useState([]);
   

    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/chinhanh/getAllChiNhanh",
            data: [],
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData(response);
            }, error: function (a) {
                console.log(a);
            }
        });
    }, []);
    const b = data.map((s) => {
        // console.log(s.maCN);
        return   <div key={s.maCN} className="name">
                <div style={{fontSize:20,textAlign:'center'}} className="tenchinhanh">{s.tenCN}</div>
                <KhungGio maCN={s.maCN} maPhim = {maPhim} />
        </div>

    });
    return (
        <div>
        { b }
        </div>
    );
}

export default LichChieu;