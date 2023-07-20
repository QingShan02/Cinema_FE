import React, { useContext, useEffect, useState } from 'react';
import { getCookie } from 'react-use-cookie';
import $ from 'jquery';
import "./styleKH.css";
import { AppContext } from '../../../../Context/AppProvider';
function Profile() {
  let data2 = JSON.parse(getCookie("customer"));
  const [data, setData] = useState([]);
  const [Avatar, setAvatar] = useState();
  const [img, setimg] = useState();
  const Server = useContext(AppContext);
  let anh = null;
  useEffect(() => {
    $.ajax({
      type: "get",
      url: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/api/kh/getOneKH",
      data: { maKH: data2.maKH },
      success: function (response) {
        setData(response)
      }
    });
  }, []);
  useEffect(() => {
    if (Avatar != null) {
      downloadQR(Avatar);
    }
    return () => {
      Avatar && URL.revokeObjectURL(Avatar.preview)
    }
  }, [Avatar])
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
    setimg(file.name)
  }
  const downloadQR = (e) => {
    var formdata = new FormData();
    console.log(Avatar);
    formdata.append("file", Avatar);
    console.log(formdata);
    $.ajax({
      url: `http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/saveQRCode`,
      type: "POST",
      data: formdata,
      async: false,
      processData: false,
      contentType: false,
    }).done(function (respond) {
      console.log(respond);
    });
  };

  if (Avatar != null) {
    anh = (<div className="col-lg-4" style={{ maxHeight: '170px', height: '170px', marginLeft: '20px', width: '120px' }}>
      {Avatar && (<img src={Avatar.preview} onClick={() => setimg(Avatar.name)} className="w-100 h-100" style={{ borderRadius: '0px' }} alt="" />)}
    </div>)
  } else {
    anh = (
      <div className="col-lg-4" style={{ maxHeight: '170px', height: '170px', marginLeft: '20px', width: '120px' }}>
        <img src={`http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/Image/qrCode/${data.hinhFB}`} className="w-100 h-100" style={{ borderRadius: '0px' }} alt="" />
      </div>
    )
  }
  console.log(img);
  console.log(data2.maKH);
  useEffect(() => {
    $.ajax({
      type: "get",
      url: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/api/kh/updateKH2",
      data: { maKH: data2.maKH, hinhfb: img },
      dataType: "json",
      async: false,
      success: function (response) {
        console.log(response);
        alert("Đã cập nhật ảnh");
      }
    })
  }, [img]);
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
    <div className="d-flex justify-content-center mt-5 container">
      <div className="d-flex col-lg-6 row a ">
        <div className="col-lg-4 col-xs-6">
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
        <div className="col-lg-4 col-xs-6 d-flex">
          <div style={{ border: '2px solid #000', background: '#000', height: '205px', width: '0px' }}></div>
          <div>
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
        </div>
        <div className='col-lg-4 col-xs-6'>
          {anh}
          <input type="file" style={{ marginLeft: '20px', marginTop: '5px' }} onChange={handlePreviewAvatar} />
        </div>
      </div>
    </div>
    <hr style={{ width: '1210px', height: '10px', backgroundColor: '#000', marginLeft: 0, marginTop: '-2px' }} />
    <hr style={{ width: '1210px', height: '10px', backgroundColor: '#000', marginLeft: 0, marginTop: '-2px' }} />
  </div>

  );
}
export default Profile;