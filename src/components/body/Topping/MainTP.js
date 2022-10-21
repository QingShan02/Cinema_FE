import React, { Component } from 'react';
import HinhTP from "./HinhTP";
import TenTP from "./TenTP";
import SoLuongTP from "./SoLuongTP";
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function MainTP(props) {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: "http://localhost:8484/api/tp/getAllTP",
            data: [],
            dataType: "json",
            success: function (response) {
                console.log(response);
                setData(response);
            }
        });
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(name + " " + value)
    };

    // <table class="table table-hover">
    //     <thead>
    //         <tr>
    //             <th></th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         <tr>
    //             <td></td>
    //         </tr>
    //     </tbody>
    // </table>

    const a = data.map((s) => {
        return <div key={s.maTopping} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="card mt-3" style={{ width: '18rem' }}>
                <HinhTP hinhTopping={s.maTopping + ".png"} />
                <div className="card-body">
                    <TenTP tenTopping={s.tenTopping} />
                    <input type="number" onChange={handleChange} name={s.maTopping}></input>
                </div>
            </div>
        </div>

    });
    // console.log(a);

    return (
        <div className="row">
            {a}

            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9"></div>

            <button type="button" className="btn btn-danger mt-4 col-2">Đặt hàng</button>

        </div>

    );
}

export default MainTP;