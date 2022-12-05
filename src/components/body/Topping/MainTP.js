import React, { Component } from 'react';
import HinhTP from "./HinhTP";
import TenTP from "./TenTP";
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';
import Topping from './Topping';

function MainTP(props) {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({});
    const [gia, setGia] = useState({});
    const loaction = useLocation();
    sessionStorage.setItem("topping",[]);
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

    

    const a = data.map((s) => {
        
        return <Topping key={s.maTopping} s={s} />


    });
    // console.log(a);

    return (
        <div className="container bg-light">
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