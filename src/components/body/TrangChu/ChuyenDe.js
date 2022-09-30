import React, { useState, useEffect } from 'react';
const ChuyenDe = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            { id: 1, title: 'Phim 1', mota: 'Mô tả' },
            { id: 2, title: 'Phim 2', mota: 'Mô tả' },
            { id: 3, title: 'Phim 3', mota: 'Mô tả' },
            { id: 4, title: 'Phim 4', mota: 'Mô tả' },
            { id: 5, title: 'Phim 5', mota: 'Mô tả' },
            { id: 6, title: 'Phim 6', mota: 'Mô tả' },
            { id: 7, title: 'Phim 7', mota: 'Mô tả' },
            { id: 8, title: 'Phim 8', mota: 'Mô tả' }
        ]);
    }, []);
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.

    const a = data.map((s, index) => {
        return <div key={s.id} className='col-xs-3 col-sm-6 col-md-3 col-lg-3 mb-2 shadow-sm'>
            <div className="card" >
                <img className="card-img-top " src="https://zingtv-photo.zmdcdn.me/tv_program_445_445/e/4/e4c33de5d505df18a117935ee48acbd7_1504865052.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{s.title}</h5>
                    <p className="card-text">{s.mota}</p>
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