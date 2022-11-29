import React, { useEffect } from 'react';
import { useState } from 'react';
import Ghe from './Ghe';
import $ from 'jquery';
function MainGhe({obj}) {
    const [data,setData] = useState([]);
    useEffect(() => {
        $.ajax({
            type: "get",
            async: false,
            url: "http://localhost:8484/api/cn/findGhePhim",
            data: obj,
            dataType: "json",
            success: function (response) {
                setData(response);
                console.log(obj);
            },error:(e)=>{
                console.log(e)
            }
        });

    }, []);
    const ghe = data.map(s=>{
        return <Ghe key={s.maGhe} obj = {s}/>
    })
    return (  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
    <div className="row" >
        {ghe}
    </div>
</div>);
}

export default MainGhe;