import React, { useState } from "react";
import styles from "./toogle.css"

const MyToogle = ({callback}) => {
    const [state, setState] = useState(false)
    callback(state)
    return(
        <label className='toogle'>
            <input 
                type = 'checkbox' 
                checked={state} 
                onChange={() => 
                setState(!state)
            }
            ></input>
            <span className= 'slider round'></span>
        </label>
    )
}

export default MyToogle