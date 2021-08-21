import React from 'react';
import { FiPlusSquare } from "react-icons/fi";
import './LandingPage.css';

const LandingPage=()=>{
    return(
        <>
       <div className="Lmain">
       <div>
       <nav className="Lnav">DIGITAL CLOCKS</nav>
       <h3 className="Lh3">You don't have any clock</h3>
       <button id="Lbtn"><FiPlusSquare size="3x"/></button>
       <p className="Lp">Add Clock</p>
       </div>
       <div  id="Limg" style={{marginTop:'0px',height: '70vh', width: '40vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://ak.picdn.net/shutterstock/videos/11679638/thumb/1.jpg)'}}>
       </div>
       </div>

        </>
    )
}

export default LandingPage;