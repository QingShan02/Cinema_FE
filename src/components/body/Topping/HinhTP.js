import React from 'react';
function HinhTP({ hinhTopping }) {
    console.log({ hinhTopping });
    return (
        <img style={{height:350, width:300}} src={`http://localhost:8484/Image/topping/${hinhTopping}`} className="card-img-top" alt="sos" />
    );
}

export default HinhTP;