import { useEffect, useState } from "react";
// import $ from 'jquery';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import { useNavigate } from "react-router-dom";
import "./body/TrangChu/DangNhap/DangNhap.css";
import MainDangNhap from "./body/TrangChu/DangNhap/MainDangNhap";
function DangNhap() {
  const [data, setData] = useState(false);
  const [inputs, setInputs] = useState({});
  const [cookie, setCookie] = useCookie("customer");
  const location = useLocation();
  let history = useNavigate();

  const handleSubmit = (event) => {
<<<<<<< HEAD
    console.log(event);
=======
    // event.preventDefault();
    console.log(inputs);
    //event.preventDefault();
>>>>>>> origin/master
    $.ajax({
      type: "GET",
      url: "http://localhost:8484/api/kh/findKH",
      data: inputs,
      dataType: "json",
      async: false,
      success: function (response, data, setuo) {
        console.log(response);
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

  return (
    <MainDangNhap />
  );
}

export default DangNhap;