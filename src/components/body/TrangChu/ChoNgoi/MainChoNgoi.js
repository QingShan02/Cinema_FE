import React from 'react';
import { useEffect } from 'react';
import ChuThich from './ChuThich';
import HangGhe from './HangGhe';
import TieuDePhong from './TieuDePhong';
import { Link, useLocation, useParams } from 'react-router-dom';
import MainGhe from './MainGhe';

// import { useEffect } from "react";
function MainChoNgoi() {
    const data = useLocation();
    console.log(data);
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    function handleClick(event) {
        if ((sessionStorage.getItem("ghe")) === null || (sessionStorage.getItem("ghe")) === "") {
            event.preventDefault();
            alert("chưa chọn ghế");
        }
    }
    return (

        <div className='container bg-white '>
            <TieuDePhong />
            <div className='container'>
                <div className='row'>
                    <HangGhe />
                    {/* <MainGhe obj={{ stt_xc: JSON.parse(sessionStorage.getItem("xuatchieu")).stt_xc }} /> */}
                    <MainGhe obj={{ stt_xc: id }} />

                    <ChuThich />
                    <Link className="btn btn-primary" onClick={handleClick} to={`${data.pathname}/tp`}>Tiếp theo</Link>
                </div>
            </div>
        </div>





    );
}

export default MainChoNgoi;




