import React, { useState } from 'react';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Paypal from './Paypal';
import QRCode from 'react-qr-code';

function Bill() {
    let data = JSON.parse(sessionStorage.getItem("ghe"));
    let data1 = JSON.parse(sessionStorage.getItem("xuatchieu"));
    let data2 = JSON.parse(sessionStorage.getItem("topping"));
    const [idve1, setIdve] = useState("");
    console.log(data2);
    const cookie = JSON.parse(getCookie("customer"));
    let tp = null;
    let giatp = 0;
    if (data2 !== null) {
        console.log(data2);
        giatp = (data2.gia * data2.soluongmua);
        tp = (<tr>
            <td >2</td>
            <td >{data2.tenTopping}</td>
            <td >{data2.soluongmua}</td>
            <td >{(data2.gia).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
            <td >{(data2.gia * data2.soluongmua).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
        </tr>);
    } else if (data2 == '' || data2 == null) {
        tp = '';
    }

    let temp = '';
    if (data2 != null) {
        temp = { tongGiaVe: data.gia * 1.05 + giatp, thueVat: 0.05, maCTGhe: data.maCTGhe, maKH: cookie.maKH };
    } else {
        temp = { tongGiaVe: data.gia * 1.05, thueVat: 0.05, maCTGhe: data.maCTGhe, maKH: cookie.maKH };
    }
    const handleClick = () => {
        $.ajax({
            type: "get",
            url: "http://localhost:8484/api/ve/insertVe",
            data: temp,
            async: false,
            dataType: "json",
            success: function (response) {
                console.log(response);
                setIdve(response);
            },
            error: function (e) {
                console.log(e);
            }
        });
        if (data2 != null) {
            $.ajax({
                type: "get",
                async: false,
                url: "http://localhost:8484/api/tp/insertCTTP",
                data: { idve: idve1, maTopping: data2.maTopping, soLuongMua: data2.soluongmua },
                dataType: "json",
                success: function (response) {
                    console.log(response);
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }

    }
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Phim</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                        <th>Thành Tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >1</td>
                        <td >{data1.tenPhim} - {data.tenGhe}</td>
                        <td >1</td>
                        <td >{(data.gia).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                        <td >{(data.gia).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>

                    </tr>

                    {tp}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td />
                        <td>Thuế (5%):</td>
                        <td>{(data.gia * 0.05).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                    <tr>
                        <td>Tổng</td>
                        <td />
                        <td />
                        <td />
                        <td >{(data.gia * 1.05 + giatp).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                    {/* <tr>
                    <td colSpan={2}>
                        <Link onClick={handleClick} to="/" className="btn btn-primary w-100">Xác nhận</Link>
                    </td>
                    <td colSpan={3}>
                        <Link onClick={()=>sessionStorage.clear()} className="btn btn-primary w-100" to="/">Hủy</Link>
                    </td>
                </tr> */}
                    <tr>
                        <PayPalScriptProvider options={{ "client-id": "Ad4Ki-0dqrtzbR0jCy66s3qI_8w6KF6oqtE8wxWGmduyGoRdop-pqBItlI69J1zcvQVJM6Mi8kF2kY6f" }}>
                            <Paypal price={((data.gia * 1.05 + giatp) / 24815).toFixed(2)}
                                showSpinner={true} success={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        </PayPalScriptProvider>
                    </tr>
                </tfoot>
            </table>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => {
                    document.getElementById('exampleModal').style.display = "block";
                    document.getElementById('exampleModal').style.opacity = 1;
                }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex={999} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" id="hehe">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                                    <QRCode
                                        size={256}
                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                        value="http://google.com"
                                        viewBox={`0 0 256 256`}
                                    />
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên Phim</th>
                                            <th>Số Lượng</th>
                                            <th>Giá</th>
                                            <th>Thành Tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >1</td>
                                            <td >{data1.tenPhim} - {data.tenGhe}</td>
                                            <td >1</td>
                                            <td >{(data.gia).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                            <td >{(data.gia).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>

                                        </tr>

                                        {tp}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td />
                                            <td>Thuế (5%):</td>
                                            <td>{(data.gia * 0.05).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                        </tr>
                                        <tr>
                                            <td>Tổng</td>
                                            <td />
                                            <td />
                                            <td />
                                            <td >{(data.gia * 1.05 + giatp).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                        </tr></tfoot></table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => {
                                    document.getElementById('exampleModal').style.display = "none";
                                    document.getElementById('exampleModal').style.opacity = 0;
                                }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Bill;