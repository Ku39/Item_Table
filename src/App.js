import React, { useState } from 'react';
import './App.css';
import MyHeaders from './components/headers/header';
import MySettings from './components/settings/MySettings';

function App() {

    let [now, setNow] = useState(false)

    const view = (arg) => {
        if(now!=arg){
            setNow(now = arg)
        }
    }

  return (
    <div className='App'>
      <div className='container'>
        <MyHeaders callback = {view}/>
        <MySettings status = {now}/>
        <hr></hr>
        <div className='table'>
            AK47
            M4a4
        </div>
      </div>
      
    </div>
  );
}

export default App;
