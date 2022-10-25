import React from 'react';
import {getCookie} from 'react-use-cookie';
import $ from 'jquery';
function Profile() {

  let data = JSON.parse(getCookie("customer"));
  
    return (  <div className="profilee ">
    <h3 className="text-center mt-5 font-weight-bold text-danger" >Thông Tin Khách Hàng</h3>
    <div className="d-flex justify-content-center align-content-center mt-5">
      <div className="hehe7">
        <div className="d-flex ">
          <div className="hehe6">
            <div className="text-right">
              <p className="mr-4 font-weight-bold">Tên đăng nhập</p>
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
          <div className="hehe5">
            <div className="hehe4">
              <input type="text" className="border-0 pt-1 w-100" value={data.tenKH} id="tenKH" name="tenKH"placeholder="******" />
            </div>
            <div className="mt-3">
              <input type="text" className="border-0 pt-1 w-100" value={data.ten} id="ten" name="ten" placeholder="******" />
            </div>
            <div className="mt-2">
              <input type="text" className="border-0 pt-1 w-100" id="email" value={data.email} name="email" placeholder="******" />
            </div>
            <div className="mt-2">
              <input type="text" className="border-0 pt-1 w-100" value={data.sdt} id="sdt" name="sdt" placeholder="******" />
            </div>
            <div className="d-flex align-content-center" style={{marginTop: '14px'}}>
              <div className="form-check mr-3 align-content-center">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Nam
                </label>
              </div>
              <div className="form-check mr-3 d-flex align-content-center">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Nữ
                </label>
              </div>
              <div className="form-check mr-3 align-content-center">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Khác
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-5" style={{maxHeight: '200px', height: '200px'}}>
        <img src="image 13.png" className="w-100 h-100" alt="" />
      </div>
    </div>
  </div>
  );
}
export default Profile;