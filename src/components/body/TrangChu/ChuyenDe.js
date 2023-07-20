import React, { useState, useEffect, useContext } from 'react';
import $ from 'jquery';
import { Link, NavLink } from 'react-router-dom';
import MainHC from './HeaderContainer/MainHC';
import MainBanner from './Banner/MainBanner';
import MainTimKiem from './TimKiem/MainTimKiem';
import { AppContext } from '../../../Context/AppProvider';
// import logo from './image/MP01';
const ChuyenDe = (props) => {
    const [data, setData] = useState([]);
    // const [theloai,setTheloai] = useState([]);
const Server  = useContext(AppContext);
    useEffect(() => {
        $.ajax({
            type: "GET",
            async: false,
            url: `http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/api/phim/getAllPhim`,
            data: [],
            dataType: "json",
            success: function (response) {
                setData(response);
            }
        });
        // getTheLoai(theloai);

    }, []);


    //WARNING! To be deprecated in React v17. Use componentDidMount instead.

    const a = data.map((s) => {
        return <div key={s.maPhim} className='col-xs-3 col-sm-6 col-md-3 col-lg-3 mb-2 shadow-sm'>
            <div className="card" >
                <img className="card-img-top " src={`http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/Image/poster/${s.hinh}`} height="300" alt="Card image cap" />
                <div className="card-body " >
                    <h5 className="card-title">{s.tenPhim}</h5>
                    <p className="card-text">{s.thoiLuong}</p>
                    <Link to={`/ctphim/${s.maPhim}`}
                        state={{
                            maPhim: s.maPhim
                        }} onClick={() => { sessionStorage.setItem("xuatchieu", JSON.stringify({ maPhim: s.maPhim, tenPhim: s.tenPhim })) }} className="btn d-block btn-primary">Xem chi tiết</Link>
                </div>
            </div>
        </div>
            ;
    });
    console.log(a);
    return (<div className="panel panel-default mt-20">
                        <MainTimKiem />
                {/* <MainHC /> */}
                <MainBanner />
        <div className="panel-heading">
            <h3 className="panel-title text-danger">{props.title}</h3>
        </div>
        <hr style={{ backgroundColor: "red", height: 20, border: "none" }} />
        <div className="panel-body">
            <div className="row">

                {/* <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> */}
                {a}
                {/* </div> */}
            </div>
            {/* <a href="#" className="card-link float-sm-end">Card link</a> */}
        </div>
    </div >);
}

export default ChuyenDe;