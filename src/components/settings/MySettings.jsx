import React from "react";
import MySearch from "../search/MySearch";
import styles from "./MySettings.css"

const MySettings = ({status}) => {
    let className = 'setting';
    let classname = 'setting';

    if(status){
        className += " invis"
    }else{
        classname += " invis"
    }

    return(
        <div className="settings">
            <div className={className}>
                <MySearch/>
            </div>
            <div className={classname}>
                qweqweqweqweqwe
            </div>
        </div>
    )
}

export default MySettings