import { useEffect, useState } from "react";
// import $ from 'jquery';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import { useNavigate } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import "./body/TrangChu/DangNhap/DangNhap.css";
function DangNhap() {
  const [data, setData] = useState(false);
  const [inputs, setInputs] = useState({});
  const [cookie, setCookie] = useCookie("customer");
  const location = useLocation();
  const [infoFB, setInfoFB] = useState({});
  // useEffect(()=>{
  //     handleSubmit();
  // },[]);
  let history = useNavigate();

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(event);
    //event.preventDefault();
    $.ajax({
      type: "GET",
      url: "http://localhost:8484/api/kh/findKH",
      data: inputs,
      dataType: "json",
      async: false,
      success: function (response, data, setuo) {
        setCookie(JSON.stringify(response), {
          days: 2,
          SameSite: 'Strict',
          Secure: true,
        });

        history(-1);
      }
    });

  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  };

  const responseFacebook = async (response) => {
    setInfoFB({
      tenkh: response.name,
      email: response.email,
      idfb: response.id,
      hinh: response.picture.data.url
    });
    console.log(infoFB);
    $.ajax({
      type: "get",
      url: "http://localhost:8484/api/kh/insertKH",
      data: infoFB,
      dataType: "json",
      success: function (response) {
        console.log(response);
      },
      error: function (e) {
        console.log(e);
      }
    });

    console.log(infoFB);
    console.log(response);
  }

  const componentClicked = (response) => {
    console.log(response);
  }

  return (

    <div className="container-fluid  bg-white" style={{ height: 600 }}>
      <p className="h1">Đăng nhập</p>
      <hr />
      <form className="form-horizontal d-block mx-auto" onSubmit={handleSubmit}>
        <div className="form-group was-validated">
          {/* <label class="control-label col-sm-2" for="email"></label> */}
          <div className="col-sm-12">
            <input type="text" className="form-control" onChange={handleChange} name="email" id="email" placeholder="Enter email" />
          </div>
        </div>
        <div className="form-group was-validated">
          <label className="control-label col-sm-2" htmlFor="pwd" />
          <div className="col-sm-12">
            <input type="password" name="matKhau" onChange={handleChange} className="form-control" id="pwd" placeholder="Enter password" />
          </div>
        </div>
        <div className="form-group was-validated">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label><input type="checkbox" /> Remember me</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <Link onClick={handleSubmit} className="btn btn-danger text-white m-3" to="/"> Đăng Nhập</Link>

            <FacebookLogin
              appId="1293678041410090"
              // autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              size='medium'
              icon="fa-facebook"
              cssClass="my-facebook-button-class"
            />
          </div>

        </div>
      </form>
    </div>

  );
}

export default DangNhap;