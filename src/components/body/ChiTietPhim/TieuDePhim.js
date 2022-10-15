import React from 'react';
function TieuDePhim() {
    return (
        <div className="container bg-white ">
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/l/d/ld_poster_nkc_m_i_1_.jpg" className="float-start" width={204} height={300} />
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <h2 style={{ color: "red" }}>NGƯỢC DÒNG THỜI GIAN ĐỂ YÊU ANH </h2>
                    <hr style={{ width: 560, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    <p>9.4/10</p>
                    <p>Hàng ghế, phòng</p>
                    <p>Diễn viên: Thanavat Vatthanaputi, Ranee Campen, Paris Intarakomalyasu, Suwatjanee Chaimusik, Paweenut Pangnakorn, Chanon Santinatornkul</p>
                    <p>Thể loại: Hài, Tình cảm</p>
                    <p>Quốc gia: Thái Lan</p>
                    <p>Đạo diễn: Adisorn Tresirikasem</p>
                </div>
                <div className="row">
                    <div>
                        <h4>NỘI DUNG PHIM</h4>
                        <hr style={{ width: 182, height: 2, backgroundColor: 'red', marginLeft: 0, marginTop: '-2px' }} />
                    </div>
                    <div>
                        <p>Avatar là câu chuyện về người anh hùng “bất đắc dĩ” Jake
                            Sully – một cựu sĩ quan thủy quân lục chiến bị liệt nửa
                            thân. Người anh em sinh đôi của anh được chọn để tham
                            gia vào chương trình cấy gien với người ngoài hành tinh
                            Na’vi nhằm tạo ra một giống loài mới có thể hít thở
                            không khí tại hành tinh Pandora. Giống người mới này
                            được gọi là Avatar. Sau khi anh của Jake bị giết, Jake
                            được chọn để thay thế anh mình và đã trở thành một
                            Avatar, Jake có nhiệm vụ đi tìm hiểu và nghiên cứu hành
                            tinh Pandora. Những thông tin mà anh thu thập được rất
                            có giá trị cho chiến dịch xâm chiếm hành tinh xanh thứ
                            hai này của loài người.</p>
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
                        <input type="date" name="date" id="inputdate" className="form-control" defaultValue required="required" title /><br />
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

