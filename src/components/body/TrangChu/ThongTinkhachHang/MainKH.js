import React from 'react';
import Profile from './profile';
import Lichsuphim from './Lichsuphim';
import "./styleKH.css";
function MainKH() {
    return (
        <div className="bg-white MainKH" >
            <Profile />
            <Lichsuphim />
        </div>
    );
}

export default MainKH;