import React from 'react';
import $ from 'jquery';


function TieuDePhim(props) {
    let data = props.maPhim;

    
    return (
        <div className="container bg-white ">
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img src={process.env.PUBLIC_URL + `/image/poster/${data.hinh}`} className="float-start" width={204} height={300} />
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <h2 style={{ color: "red" }}>{data.tenPhim}</h2>
                    <hr style={{ width: 560, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    <p>9.4/10</p>
                    <p>Hàng ghế, phòng</p>
                    <p>Diễn viên: {data.dienVien}</p>
                    <p>Thể loại: Hài, Tình cảm</p>
                    <p>Quốc gia: {data.quocGia}</p>
                    <p>Đạo diễn: {data.daoDien}</p>
                </div>
                <div className="row">
                    <div>
                        <h4>NỘI DUNG PHIM</h4>
                        <hr style={{ width: 182, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    </div>
                    <div>
                        <p>{data.moTa}</p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <h4>LỊCH CHIẾU</h4>
                        <hr style={{ width: 130, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    </div>
                </div>
                <div className="w-100">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <input type="date" name="date" id="inputdate" className="form-control" defaultValue required="required" /><br />
                    </div>
                </div>

                <div className="row w-100">
                    <div>
                        <button type="button" className="btn btn-danger">Rạp gà rán</button>
                    </div>
                    <div className="row w-100">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p>2D - Phụ đề</p>
                            <p>3D - Phụ đề</p>
                        </div>
                        {/* <div className="row"> */}
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="button">19:30</button><br></br>
                            <button type="button">21:30</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

            </div>

        </div>
    );
}
export default TieuDePhim;

