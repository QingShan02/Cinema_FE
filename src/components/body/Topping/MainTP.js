import React, { Component } from 'react';
import HinhTP from "./HinhTP";
import TenTP from "./TenTP";
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
        let topping = {
            name: event.target.name,
            id: event.target.id,
            value: event.target.value
        };

        let toppingJsonString = JSON.stringify(topping);
        sessionStorage.setItem('topping', toppingJsonString);
        let savedToppingJsonString = sessionStorage['topping'];
        let savedToppingObject = JSON.parse(savedToppingJsonString);
    };

    const a = data.map((s) => {
        return <div key={s.maTopping} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="card mt-3 bg-dark text-light" style={{ width: '18rem' }}>
                <HinhTP hinhTopping={s.maTopping + ".png"} />
                <div className="card-body">
                    <TenTP tenTopping={s.tenTopping} />
                    <br />
                    <input type="number" onChange={handleChange} id={s.maTopping} name={s.tenTopping}></input>
                </div>
            </div>
        </div>

    });
    // console.log(a);

    return (
        <div className="row bg-light">
            {a}

            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" />

            <button type="button" className="btn btn-danger mt-4 mb-4 col-2">Đặt hàng</button>

        </div>

    );
}

export default MainTP;