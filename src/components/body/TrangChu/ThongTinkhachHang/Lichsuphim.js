import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { getCookie } from 'react-use-cookie';
import Card from './Card';
function Lichsuphim() {
  let data2 = JSON.parse(getCookie("customer"));
  const [data, setData] = useState([]);
  useEffect(() => {
    $.ajax({
      type: "get",
      url: "http://localhost:8484/api/ve/LichSuVe",
      data: { maKH: data2.maKH },
      dataType: "json",
      success: function (response) {
        setData(response)
      }
    });
  }, []);
  let lc = data.map((s) => <Card ngay={s.ngay} tenphim={s.tenPhim} giobatdau={s.giobatdau} idve={s.idVe} giaVe={s.giaVe} tenghe={s.tenghe} />)
  return (<div className="mt-5 px-5 mx-auto w-50 ">
    <h3>Lịch sử xem phim</h3>
    <hr style={{ width: '220px', height: '5px', backgroundColor: '#0066FF', color: '#EE0000', marginLeft: 0, marginTop: '-2px' }} />
    {/* <div className="mt-4">
      <div className="d-flex align-content-center justify-content-between pb-3" style={{ borderBottom: '1px solid #BC5014' }}>
        <div className="d-flex align-content-center">
          <div className="hehe" style={{ width: '85px', height: '85px' }}>
            <img src="image 11.png" className="w-100 rounded" alt="" />
          </div>
          <p className="font-weight-bold ml-4" style={{ marginTop: '35px' }}>AVARTAR</p>
        </div>
        <div>
          <p className="font-weight-bold" style={{ marginTop: '35px', color: 'rgba(0, 0, 0, 0.6)' }}>Xem ngày: 24-09-2022</p>
        </div>
      </div>
    </div> */}
    <div>
      {lc}
    </div>
  </div>);
}

export default Lichsuphim;