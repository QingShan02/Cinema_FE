import $ from 'jquery';
import React, { Component, useState} from 'react';
import "./DangNhap.css";
import FacebookLogin from 'react-facebook-login';

function MainDangNhap() {
    const [infoFB, setInfoFB] = useState({});

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
        <section className="Form my-4 mx-5" id='frmDN'>
            <div className="container">
                <div className="row g-0" id='rowDN'>
                    <div className="col-lg-3">
                        <img src="https://th.bing.com/th/id/R.0d1c49bcccb5f67e636ee4dac8615aab?rik=Gn1UgRwOXkpNww&pid=ImgRaw&r=0" className="img-fluid" alt />
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold mb-3">Log in</h1>
                        <h4>Sign into your account</h4>
                        <form action>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="email" placeholder=" Username" className="form-control my-3 p-2" defaultValue required="required" title />
                                </div>
                                <div className="col-lg-7">
                                    <input type="password" placeholder=" ***********" className="form-control my-3 p-2" defaultValue required="required" title />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="button" className="btn1 my-3 p-2 mb-5"> Login</button>
                                </div>

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
                            <a href="#"> Forgot password</a>
                            <p>Dont have a account <a href="#">Register here</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainDangNhap;