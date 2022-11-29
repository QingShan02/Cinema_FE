import React, { useEffect, useState } from 'react';
import { getCookie } from 'react-use-cookie';
import $ from 'jquery';
import "./styleKH.css";
function Profile() {
  let data2 = JSON.parse(getCookie("customer"));
  const [data, setData] = useState([]);
  useEffect(() => {
    $.ajax({
      type: "get",
      url: "http://localhost:8484/api/kh/getOneKH",
      data: { maKH: data2.maKH },
      success: function (response) {
        setData(response)
      }
    });
  }, []);
  let khoi = null;
  if (data.gioiTinh == 0) {
    khoi = (<div className='text'>
      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
      <label className="form-check-label" htmlFor="exampleRadios1">
        Nam
      </label>
      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" defaultChecked />
      <label className="form-check-label" htmlFor="exampleRadios2">
        Nữ
      </label>
    </div>);
  } if (data.gioiTinh == 1) {
    khoi = (<div className='text'>
      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
      <label className="form-check-label" htmlFor="exampleRadios1">
        Nam
      </label>
      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" defaultChecked />
      <label className="form-check-label" htmlFor="exampleRadios2">
        Nữ
      </label>
    </div>);
  }
  return (<div className="profilee container">
    <h3 className="text-center mt-5 font-weight-bold text-danger" >Thông Tin Khách Hàng</h3>
    <div className="d-flex justify-content-center align-content-center mt-5">
      <div className="d-flex col-lg-5 a">
        <div className="col-lg-4 ">
          <div className="text-right">
            <p className="mr-4 font-weight-bold">Tên đăng nhập </p>
          </div>
          <div className="text-right">
            <p className="mr-4 font-weight-bold">Tên</p>
          </div>
          <div className="text-right">
            <p className="mr-4 font-weight-bold">Email</p>
          </div>
          <div className="text-right">
            <p className="mr-4 font-weight-bold">Số điện thoại</p>
          </div>
          <div className="text-right">
            <p className="mr-4 font-weight-bold">Giới tính</p>
          </div>
        </div>
        <div style={{ border: '2px solid #000', background: '#000', height: '205px' }}></div>
        <div className="col-lg-4 ">
          <div className="">
            <input type="text" className="border-0 text" value={data.email} id="tenKH" name="tenKH" />
          </div>
          <div className="">
            <input type="text" className="border-0 text" value={data.tenKH} id="ten" name="ten" placeholder="ssss" style={{ marginTop: '14px' }} />
          </div>
          <div className="">
            <input type="text" className="border-0 text" id="email" value={data.email} name="email" style={{ marginTop: '14px' }} />
          </div>
          <div className="">
            <input type="text" className="border-0 text" value={data.soDT} id="sdt" name="sdt" placeholder="sssss" style={{ marginTop: '14px' }} />
          </div>
          <div className="d-flex align-content-center" style={{ marginTop: '13px' }}>
            {khoi}
          </div>
        </div>
        <div className="col-lg-4" style={{ maxHeight: '200px', height: '200px', marginLeft: '20px' }}>
          <img src={require('./anh1.png')} className="w-100 h-100" style={{ borderRadius: '0px' }} alt="" />
        </div>
      </div>
    </div>
    <hr style={{ width: '1210px', height: '10px', backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
    <hr style={{ width: '1210px', height: '10px', backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
  </div>

  );
}
export default Profile;