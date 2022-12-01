import React from 'react';
import KhungDK from './KhungDK';
// import RanDom from './RanDom';

function mainDk() {
    return (
        <div className="container bg-white" onLoad={() => {
            sessionStorage.clear();
        }}>
            <KhungDK />
        </div>
    );
}

export default mainDk;
