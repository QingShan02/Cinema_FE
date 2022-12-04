import { useState } from "react";
import HinhTP from "./HinhTP";
import TenTP from "./TenTP";

function Topping({ s }) {
    const [isClick, setIsClick] = useState(true);
    const handleChange = (s, event) => {
        let savedToppingJsonString = sessionStorage['topping'];
        let topping = {
            tenTopping: s.tenTopping,
            maTopping: s.maTopping,
            soluongmua: event.target.value,
            gia: s.gia
        };
        // if (savedToppingJsonString == "") {
        //     sessionStorage.setItem("topping", JSON.stringify([topping]));
        //     return;
        // } else {
        let savedToppingObject = JSON.parse(savedToppingJsonString);
        for (let i = 0; i < savedToppingObject.length; i++) {
            let t = savedToppingObject[i];
            if (t.maTopping == topping.maTopping) {
                t.soluongmua = topping.soluongmua;
                sessionStorage.setItem("topping", JSON.stringify(savedToppingObject));
                return;
            }
        }
        savedToppingObject.push(topping);
        sessionStorage.setItem("topping", JSON.stringify(savedToppingObject));


        // }
        // console.log(s,topping);

        // let toppingJsonString = JSON.stringify([topping]);
        // sessionStorage.setItem('topping', toppingJsonString);


    };
    return (<tr >
        <td>
            <div className="checkbox">
                <label>
                    <input type="checkbox" defaultValue="" onClick={() => {
                        setIsClick(!isClick);

                        if (isClick == true) {
                            let topping = {
                                tenTopping: s.tenTopping,
                                maTopping: s.maTopping,
                                soluongmua: 1,
                                gia: s.gia
                            };
                            if (sessionStorage.getItem("topping") != "") {
                                let obj = JSON.parse(sessionStorage['topping']);
                                obj.push(topping);
                                sessionStorage.setItem("topping", JSON.stringify(obj));
                            } else {
                                sessionStorage.setItem("topping", JSON.stringify([topping]));

                            }
                        } else if (isClick == false) {
                            let obj = JSON.parse(sessionStorage['topping']);
                            // console.log(obj);
                            if(obj.length ==1){
                                sessionStorage.setItem("topping","");
                                return;
                            }
                            for (let i = 0; i < obj.length; i++) {
                                let t = obj[i];
                                console.log(t);
                                if (t.maTopping == s.maTopping) {
                                    // let temp = i+1;
                                    obj.slice(0,i);
                                    console.log(obj);
                                    sessionStorage.setItem("topping", JSON.stringify(obj));
                                    return;
                                }
                            }
                        }

                    }} />
                </label>
            </div>
        </td>
        <td><HinhTP hinhTopping={s.maTopping + ".png"} /><TenTP tenTopping={s.tenTopping} /></td>
        <td><input type="number" disabled={isClick} onChange={(e) => { handleChange(s, e) }} defaultValue={1} id={s.maTopping} name={s.tenTopping}></input></td>


    </tr>);
}

export default Topping;