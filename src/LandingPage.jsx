import React from 'react';
import { FiPlusSquare } from "react-icons/fi";
import './LandingPage.css';

const LandingPage=()=>{
    return(
        <>
       <div className="Lmain" style={{marginTop:'-0.00px',height: '100vh', width: '100vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://lh3.googleusercontent.com/proxy/e-u2MnFgO0km0fSu4Qygxln8ejsZ6p3sCMgAzqUDgZKiXfxdOkA5TcVUkwmPF_LtIdYOd2FfGLcbZXRbaV9D7atOP9E9fSYsFaVBCrj_Q61UDybaN1LT7ks-)'}}>
       <nav className="Lnav"><span>Global Clock</span></nav>
       <h3 className="Lh3">You don't have any clock</h3>
       <button id="Lbtn"><FiPlusSquare size="3x"/></button>
       <p className="Lp">Add Clock</p>
       </div>

        </>
    )
}

export default LandingPage;