import React from 'react';
import { FiPlusSquare } from "react-icons/fi";
import { useHistory} from 'react-router-dom';
import './LandingPage.css';

const LandingPage=()=>{

    let history=useHistory();
    return(
        <>
       <div className="Lmain">
       <div className="Lmiddle">
       <h3 className="Lh3">You don't have any clock</h3>
       <button id="Lbtn" onClick={()=>{history.push("/Setting")}}><FiPlusSquare size="3x"/></button>
       <p className="Lp">Add Clock</p>
       </div>
       <div  id="Limg" style={{height: '70vh', width: '40vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://ak.picdn.net/shutterstock/videos/11679638/thumb/1.jpg)'}}>
       </div>
       </div>

        </>
    )
}

export default LandingPage;