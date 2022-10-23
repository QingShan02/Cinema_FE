import React from 'react';
import $ from 'jquery';
function Bill() {
    let data = JSON.parse(sessionStorage.getItem("ghe"));
    let data1 = JSON.parse(sessionStorage.getItem("xuatchieu"));
    const handleClick = ()=>{
        $.ajax({
            type: "get",
            url: "https://localhost:8484/api/ve/insertVe",
            data: {tongGiaVe:data.gia*1.05,thueVat:0.05,maCTGhe:0,maNV:''},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    }
    return (<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên Phim</th>
                    <th>Ghế</th>
                    <th>Giá</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >1</td>
                    <td >{data1.tenPhim}</td>
                    <td >{data.tenGhe}</td>
                    <td >{(data.gia).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Thuế (5%):</td>
                    <td>{(data.gia*0.05).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                </tr>
                <tr>
                    <td>Tổng</td>
                    <td />
                    <td />
                    <td >{(data.gia*1.05).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type="button" className="btn btn-primary w-100">Xác nhận</button>
                    </td>
                    <td colSpan={2}>
                        <button type="button" className="btn btn-primary w-100">Hủy</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    );
}

export default Bill;