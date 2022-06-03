import React, { useState } from "react";
import MyToogle from "../UI/toogle/toogle";
import styles from "./header.css"

const MyHeaders = ({callback}) => {
    let [on, setOn] = useState(false)
    let className = 'text';
    let classname = 'text';

    const check = (arg) =>{
        callback(arg)
        if(on != arg){
            setOn(on = arg)
        }
    }
    
    if(on){
        classname += " on"
    }else{
        className += " on"
    }
    return(
        <div className='header'>
            <div className='switch'>
                <span className={className}> Поиск </span>
                <MyToogle callback = {check}/>
                <span className={classname}> Вывод </span>
            </div>

            <div className='headlines'>
                <a href='#'>Таблица</a>
                <a href='#'>Инструкция</a>
                <a href='#'>Поддержка</a>
                <a href='#'>Авторизация</a>
            </div>

        </div>
    )
}

export default MyHeaders