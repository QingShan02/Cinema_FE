import TieuDePhim from "./TieuDePhim";
import React from 'react';
import { useLocation,useParams } from "react-router";
import { useEffect } from "react";
function MainCTPhim(props) {
const data = useLocation();
const {id} = useParams();
console.log(data);
useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, []);
    return ( <TieuDePhim maPhim={id}/> );
}

export default MainCTPhim;


