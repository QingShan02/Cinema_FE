import React, { useState, useEffect } from 'react';
import $ from 'jquery';
const ChuyenDe = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        $.ajax({
            type: "GET",
            async: false,        
            url: "http://localhost:8484/api/phim/getAllPhim",
            data: [],
            dataType: "json",
            success: function (response) {
                setData(response);
                //console.log(response);
            }
        });
    },[]);

    
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.

    const a = data.map((s, index) => {
        return <div key={s.maPhim} className='col-xs-3 col-sm-6 col-md-3 col-lg-3 mb-2 shadow-sm'>
            <div className="card" >
                <img className="card-img-top " src="https://zingtv-photo.zmdcdn.me/tv_program_445_445/e/4/e4c33de5d505df18a117935ee48acbd7_1504865052.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{s.tenPhim}</h5>
                    <p className="card-text">{s.thoiLuong}</p>
                    <a href="#" className="btn d-block btn-primary">Xem chi tiết</a>
                </div>
            </div>
        </div>
            ;
    });
    return (<div className="panel panel-default mt-20">
        <div className="panel-heading">
            <h3 className="panel-title text-danger">{props.title}</h3>
        </div>
        <hr style={{backgroundColor:"red",height:20,border:"none"}}/>
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