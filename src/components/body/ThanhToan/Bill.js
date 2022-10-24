import React, { useState } from 'react';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';
import { Link } from 'react-router-dom';

function Bill() {
    let data = JSON.parse(sessionStorage.getItem("ghe"));
    let data1 = JSON.parse(sessionStorage.getItem("xuatchieu"));
    let data2 = JSON.parse(sessionStorage.getItem("topping"));
    const [idve1,setIdve] = useState("");
    console.log(data2);
    const cookie=JSON.parse(getCookie("customer"));
  let tp = null;
  let giatp = 0;
        if(data2!==null){
            console.log(data2);
            giatp = (data2.gia * data2.soluongmua);
            tp = (<tr>
            <td >2</td>
            <td >{data2.tenTopping}</td>
            <td >{data2.soluongmua}</td>
            <td >{(data2.gia).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
            <td >{(data2.gia * data2.soluongmua).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
        </tr>);
        }else if(data2=='' || data2==null){
            tp= '';
        }
        
    let temp = '';
    if(data2!=null){
        temp  =     {tongGiaVe:data.gia*1.05+giatp,thueVat:0.05,maCTGhe:data.maCTGhe,maKH:cookie.maKH};
    }else{
        temp =     {tongGiaVe:data.gia*1.05,thueVat:0.05,maCTGhe:data.maCTGhe,maKH:cookie.maKH};
    }
    const handleClick = ()=>{
        $.ajax({
            type: "get",
            url: "http://localhost:8484/api/ve/insertVe",
            data: temp,
            dataType: "json",
            success: function (response) {
                console.log(response);
                setIdve(response);
            },
            error:function(e){
                console.log(e);
            }
        });
        if(data2!=null){
            $.ajax({
                type: "get",
                url: "http://localhost:8484/api/ve/insertCTTP",
                data: {idve:idve1,maTopping:data2.maTopping,soLuongMua:data2.soluongmua},
                dataType: "json",
                success: function (response) {
                    console.log(response);
                },
                error:function(e){
                    console.log(e);
                }
            });
        }
        
    }
    return (<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
                    <td >{(data.gia).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                    <td >{(data.gia).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>

                </tr>
                
                {tp}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td />
                    <td>Thuế (5%):</td>
                    <td>{(data.gia*0.05).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                </tr>
                <tr>
                    <td>Tổng</td>
                    <td />
                    <td />
                    <td />
                    <td >{(data.gia*1.05+giatp).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <Link onClick={handleClick} to="/" className="btn btn-primary w-100">Xác nhận</Link>
                    </td>
                    <td colSpan={3}>
                        <Link onClick={()=>sessionStorage.clear()} className="btn btn-primary w-100" to="/">Hủy</Link>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    );
}

export default Bill;