import React from 'react';
function HinhTP({ hinhTopping }) {
    return (
        <img style={{height:"20%",maxHeight:100, width:"50%", maxWidth:100}} src={`http://localhost:8484/Image/topping/${hinhTopping}`} className="card-img-top" alt="sos" />
    );
}

export default HinhTP;