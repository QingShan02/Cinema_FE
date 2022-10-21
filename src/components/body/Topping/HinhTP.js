import React from 'react';

function HinhTP({hinhTopping}) {
    console.log({hinhTopping});
    return (
        <img src={process.env.PUBLIC_URL + `/image/topping/${hinhTopping}`} className="card-img-top" alt="sos" />
        
    );
}

export default HinhTP;