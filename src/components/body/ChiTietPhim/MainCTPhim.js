import TieuDePhim from "./TieuDePhim";
import React from 'react';
import { useLocation } from "react-router";

function MainCTPhim(props) {
const data = useLocation();
console.log(data);
    return ( <TieuDePhim maPhim={data.state.maPhim}/> );
}

export default MainCTPhim;


