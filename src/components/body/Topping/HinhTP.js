import React from 'react';
function HinhTP({ hinhTopping }) {
    return (
        <img style={{height:"20%",maxHeight:100, width:"50%", maxWidth:100}} src={`http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com//Image/topping/${hinhTopping}`} className="card-img-top" alt="sos" />
    );
}

export default HinhTP;