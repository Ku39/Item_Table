import React from "react";
import styles from "./MySearch.css"

const MySearch = (props) => {
    

    return(
        <div className="shell">

            <div className="left">
                <select></select>
                <select></select>
                <div>
                    <input type="checkbox"/>
                    <input type="text"></input>
                </div>
            </div>

            <div className="center">
                <div>
                    <h5>Кол-во продаж / нед.</h5>
                    <input></input>
                    <input></input>
                </div>
                <div>
                    <h5>Стоимость</h5>
                    <input></input>
                    <input></input>
                </div>
            </div>

            <div className="right">
            <select></select>
                <div>
                    <input type="checkbox"></input>
                    <select/>
                </div>
            </div>

        </div>
    )
}

export default MySearch