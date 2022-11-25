import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function KhungGio({maCN, maPhim}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/ngay/getGioBatDau",
            data: {maPhim: maPhim, maCN: maCN},
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData(response);
            }, error: function (a) {
                console.log(a);
            }
        });
    }, []);

    const a = data.map((s) => {
         return  <button type="button" className="btn btn-outline-dark">{s.gioBatDau}</button>
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
