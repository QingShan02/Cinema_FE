import React from 'react';
function HinhTP({ hinhTopping }) {
    console.log({ hinhTopping });
    return (
        <img style={{height:350}} src={process.env.PUBLIC_URL + `/image/topping/${hinhTopping}`} className="card-img-top" alt="sos" />
    );
}

export default HinhTP;