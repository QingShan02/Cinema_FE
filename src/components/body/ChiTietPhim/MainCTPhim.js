import TieuDePhim from "./TieuDePhim";
import React from 'react';
import { useLocation } from "react-router";
import { useEffect } from "react";
function MainCTPhim(props) {
const data = useLocation();
useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [])
console.log(data);
    return ( <TieuDePhim maPhim={data.state.maPhim}/> );
}

export default MainCTPhim;


