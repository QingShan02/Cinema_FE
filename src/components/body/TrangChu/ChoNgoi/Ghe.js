// import React from 'react';
import React, { useState, useRef } from 'react';

function Ghe({ obj }) {
    // const [data, setData] = useState([]);
    // const [obj, setObj] = useState([]);
    let color = "";

    if (obj.maLoai === 3) {
        color = "bg-danger";
    } else if (obj.maLoai === 2) {
        color = "bg-warning";
    } else {
        color = "bg-success";
    }
    const [mau, setMau] = useState(color);
    const ref = useRef();





    ref.current = color;
    const handleChon = (e) => {
        sessionStorage.setItem("ghe", JSON.stringify(obj));
        setMau("bg-info");
    };
    const handleBoChon = () => {
        sessionStorage.setItem("ghe", "");
        setMau(ref.current);
    };
    if (obj.idVe === 0) {
        // if (obj.maGhe !== e.maGhe) {
        //     return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={e.maGhe}>
        //         <button className={`card text-center my-2 py-2  ${color}`} onClick={() => {
        //             sessionStorage.setItem("ghe", JSON.stringify(e));
        //             setObj(e);
        //         }} style={{ width: '50px', height: 'auto' }} >
        //             <div className=" font-weight-bold text-white" >{e.tenGhe}</div>
        //         </button>
        //         {/* <Link></Link> */}
        //     </div >
        // } else {
        return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={obj.maGhe}>
            <button className={`card text-center my-2 py-2  ${mau}`} onClick={(mau!=="bg-info") ? handleChon:handleBoChon
            } style={{ width: '50px', height: 'auto' }} >
                <div className=" font-weight-bold text-white" >{obj.tenGhe}</div>
            </button>
        </div >
        // }
    } else {
        return <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" key={obj.maGhe}>
            <button className={`card text-center my-2 py-2  bg-secondary`} style={{ width: '50px', height: 'auto' }} >
                <div className=" font-weight-bold text-white" >{obj.tenGhe}</div>
            </button>
            {/* <Link></Link> */}
        </div >
    }



}


export default Ghe;