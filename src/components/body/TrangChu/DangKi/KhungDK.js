import React, { useState, useEffect, useCallback } from 'react';
let capt = '';

function KhungDK() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);


    useEffect(() => {
        if (capt == '') {
            let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            // const [capt, setCapt] = useState('');

            // useEffect(() => {

            // }, [capt]);
            // let temp = '';
            // useEffect(() => {

            // }, []);
            for (let i = 0; i < 6; i++) {
                let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
                // temp += `${randomCharacter}`;
                capt += `${randomCharacter}`;
            }
            setData1(capt);
        }
    }, []);

    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }));
    };
    // console.log(capt);
    const cap = (<span className='form-control bg-secondary text-white' >{data1}</span>);
    return (

        //         <div>
        //             <h3 className="text-center bg-danger text-white pb-1">Đăng Kí</h3>
        //             <div className="mb-3">
        //                 <label className="form-label fw-bold">Họ và Tên</label>
        //                 <input type="text" name='name' className="form-control" placeholder="......" onChange={handle} required />
        //             </div>
        //             <div className="mb-3">
        //                 <label className="form-label fw-bold">Số Điện Thoại</label>
        //                 <input type="text" name='sdt' className="form-control" maxLength={10} placeholder="....." onChange={handle} required />
        //             </div>
        //             <div className="mb-3">
        //                 <label className="form-label fw-bold">Email</label>
        //                 <input type="email" name='email' className="form-control" placeholder="name@gmail.com" onChange={handle} onKeyUp={() => {
        //                     sessionStorage.setItem('email', JSON.stringify(data.email));
        //                 }} required />
        //             </div>
        //             <div className="col-auto">
        //                 <label className="col-form-label fw-bold">Mật Khẩu</label>
        //                 <input type="password" name='pass' className="form-control" onChange={handle} required onKeyUp={() => {
        //                     sessionStorage.setItem('pass', JSON.stringify(data.pass));
        //                 }} />
        //             </div>
        //             <div className="col-auto">
        //                 <label className="col-form-label fw-bold">Xác Nhận Mật Khẩu</label>
        //                 <input type="password" name='repass' className="form-control" onChange={handle} onKeyUp={() => {
        //                     sessionStorage.setItem('repass', JSON.stringify(data.repass));
        //                 }} required />
        //             </div>

        //             <div className="row">
        //                 <label className="col-form-label fw-bold">Vui lòng nhập kí tự bên dưới</label>
        //                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        //                     <form action="#" >
        //                         <input className='form-control' name='recaptcha' type="text" onChange={handle} onKeyUp={() => {
        //                             sessionStorage.setItem('recaptcha', data.recaptcha);
        //                         }} placeholder="Nhập captcha" maxLength={6} spellCheck="false" required />
        //                     </form>
        //                 </div>
        //                 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        //                     {cap}
        //                 </div>
        //             </div>
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        // </div>



        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
            <style dangerouslySetInnerHTML={{ __html: "\n    @import url('https://fonts.googleapis.com/css?family=Numans');\n\n.container-body{\nbackground-image: url('https://www.langf.vn/cam-nang-lang-dai-hoc/wp-content/uploads/2020/11/Ra7.jpg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nheight: 100%;\nfont-family: 'Numans', sans-serif;\n\n}\n\n.container{\nheight: 100%;\nalign-content: center;\n}\n\n.card{\nheight: 480px;\npadding: '25px 50px';\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 350px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n\n.social_icon span{\nfont-size: 60px;\nmargin-left: 10px;\ncolor:#97F2F3;\n}\n\n.social_icon span:hover{\ncolor: white;\ncursor: pointer;\n}\n\n.social_icon{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n\n.input-group-prepend span{\nwidth: 50px;\nbackground-color :#97F2F3;\ncolor: black;\nborder:0 !important;\n}\n\ninput:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n#input-group{\n    width: 50px;\nbackground-color: white;\ncolor: white;\nborder:0 !important;\n}\n\n.login_btn{\ncolor: black;\nmargin:20px 20px 20px 20px;\nbackground-color:#97F2F3;\nwidth: 100px;\n}\n\n.login_btn:hover{\ncolor: white;\nbackground-color: #FFFF00;\n}\n\n.links{\ncolor: white;\n}\n\n.links a{\nmargin-left: 4px;\n}\n  " }} />

            <div className="container-body">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        {/* <div className="card-header">
                            <h3>CGV</h3>
                        </div> */}
                        <div  className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas
                                            fa-user" /></span>
                                    </div>
                                    <input type="text" className="form-control" name="name" ng-model="name" required placeholder="Họ và tên" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas
                                            fa-phone" /></span>
                                    </div>
                                    <input type="text" className="form-control" name="phone" ng-model="phone" required placeholder="Số điện thoại" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas
                                            fa-key" /></span>
                                    </div>
                                    <input id="password-input" type="password" className="form-control" name="matkhau" ng-model="matkhau" required placeholder="Mật khẩu" />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas
                                            fa-key" /></span>
                                    </div>
                                    <input id="password-input" type="password" className="form-control" name="NLMK" ng-model="MLMK" required placeholder="Nhập lại mật khẩu" />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas
                                            fa-wrench" /></span>
                                    </div>
                                    <input type="text" className="form-control" name="NMXN" ng-model="NMXN" required placeholder="Nhập mã xác nhận" />
                                </div>
                                <div className="input-group form-group">

                                    <input type="text" className="form-control" />
                                </div>
                                {/* <div className="form-group">
                                    <input type="submit" defaultValue="ĐĂNG KÍ" className="btn
                                    float-right login_btn" />
                                    
                                </div> */}
                                <div className="my-2 col-auto">
                                    <input type="checkbox" /><span style={{ color: 'white' }} className="mx-2">Tôi đồng ý với các điều khoản của CGV</span>
                                </div>
                            </form>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="ĐĂNG KÍ" className="btn
                                    float-right login_btn" />

                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>


    );
}
export default KhungDK;