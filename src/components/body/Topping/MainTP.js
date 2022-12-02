import React, { Component } from 'react';
import HinhTP from "./HinhTP";
import TenTP from "./TenTP";
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';

function MainTP(props) {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({});
    const [gia, setGia] = useState({});
    const loaction = useLocation();
    useEffect(() => {
        sessionStorage.removeItem("topping");
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

    const handleChange = (s, event) => {
        let topping = {
            tenTopping: s.tenTopping,
            maTopping: s.maTopping,
            soluongmua: event.target.value,
            gia: s.gia
        };
        console.log(s,topping);

        let toppingJsonString = JSON.stringify(topping);
        sessionStorage.setItem('topping', toppingJsonString);
        let savedToppingJsonString = sessionStorage['topping'];
        let savedToppingObject = JSON.parse(savedToppingJsonString);
    };

    const a = data.map((s) => {
        return <tr key={s.maTopping}>
            <td>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" defaultValue="" />
                    </label>
                </div>
            </td>
            <td><HinhTP hinhTopping={s.maTopping + ".png"} /><TenTP tenTopping={s.tenTopping} /></td>
            <td><input type="number" onChange={(e) => { handleChange(s, e) }} id={s.maTopping} name={s.tenTopping}></input></td>


        </tr>


    });
    // console.log(a);

    return (
        <div className="row bg-light">
            <p className='h3'>Order Topping</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th />
                        <th>Tên Topping</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {a}
                </tbody>
            </table>




            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" />

            <Link className="btn btn-danger mt-4 mb-4 col-2" to={`${loaction.pathname}/thanhtoan`}>Thanh toán</Link>

        </div>

    );
}

export default MainTP;