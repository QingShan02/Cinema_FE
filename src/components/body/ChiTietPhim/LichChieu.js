import React from 'react';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import './lichchieu.css';

function LichChieu() {
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
                <div style={{fontSize:20}} className="tenchinhanh">{s.tenCN}</div>
                <div className="tt">
                    <label htmlFor="">2D - Phụ đề</label>
                    <div style={{ marginLeft: 50 }}>
                        <button  type="button" className="btn btn-outline-success">13:00</button>
                        <button  type="button" className="btn btn-outline-success">14:00</button>
                        <button  type="button" className="btn btn-outline-success">15:00</button>
                        <button  type="button" className="btn btn-outline-success">16:00</button>
                        <button  type="button" className="btn btn-outline-success">17:00</button>

                    </div>
                </div>
        </div>

    });
    return (
        <div>
        { b }
        </div>
    );
}

export default LichChieu;