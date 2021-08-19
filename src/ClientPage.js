import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import './ClientPage.css'

const ClientPage=()=>{
    return(
        <>
        <div className="Cpmain" style={{marginTop:'0px',height: '100vh', width: '100vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWE5277zi2vmOwMSqbFzuunKm3QUDz-qVE-838yENb8cNb64YaySsL5zitiRzByITK8w&usqp=CAU)'}}>
        <nav id="Cpnav"><p id="CpCn">ABC COMPANY</p><p id="Cpnpc">Global Clock</p><button id="Cpbtn"><FiPlusCircle size="3x"/></button></nav>
        <div></div>
        </div>
        </>
    )
}

export default ClientPage;