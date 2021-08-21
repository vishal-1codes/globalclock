import React from 'react';
import './SettingPage.css';

const SettingPage=()=>{
    return(
        <>
        <div className="Stmain" >
            <nav className="Stnav">DIGITAL CLOCK'S</nav>
            <form id="Stf">
                <p id="Stp">Add Location</p>
                <p id="Stcl">Company Name <input type="text" /></p><br/>
                <p id="Stal">Add Clock <input type="text" list="ide"/>
                <datalist id="ide">
                    <option value="india"/>
                    <option value="japan"/>
                    <option value="northkorea"/>
                    <option value="srilanka"></option>
                    <option value="mongolia"></option>
                    <option value="maldives"></option>
                    <option value="pakistan"></option>
                    <option value="korea"></option>
                    <option value="philippines"></option>
                    <option value="bangladesh"></option>
                    <option value="bhutan"></option>
                    <option value="vietnam"></option>
                    <option value="nepal"></option>
                    <option value="afghanistan"></option>
                    <option value="china"></option>
                    <option value="indonesia"></option>
                    <option value="malaysia"></option>
                    <option value="thailand"></option>
                    <option value="laos"></option>
                    <option value="singapore"></option>
                    <option value="unitedkingdom"></option>
                    <option value="spain"></option>
                    <option value="bulgaria"></option>
                    <option value="ireland"></option>
                    <option value="netherlands"></option>
                    <option value="belgium"></option>
                    <option value="austria"></option>
                    <option value="portugal"></option>
                    <option value="kazakhstan"></option>
                    <option value="germany"></option>
                    <option value="switzerland"></option>
                    <option value="hungary"></option>
                    <option value="greece"></option>
                    <option value="czechrepublic"></option>
                    <option value="iceland"></option>
                    <option value="finland"></option>
                    <option value="ukraine"></option>
                    <option value="denmark"></option>
                    <option value="sweden"></option>
                    <option value="russia"></option>
                    <option value="france"></option>
                    <option value="poland"></option>
                    <option value="slovakia"></option>
                    <option value="italy"></option>
                    <option value="romania"></option>
                    <option value="uzbekistan"></option>
                    <option value="unitedstateofamerica"></option>
                    <option value="brazil"></option>
                    <option value="nicaragua"></option>
                    <option value="costarica"></option>
                    <option value="honduras"></option>
                    <option value="peru"></option>
                    <option value="chile"></option>
                    <option value="paraguay"></option>
                    <option value="elsalvador"></option>
                    <option value="jamaica"></option>
                    <option value="uruguay"></option>
                    <option value="bolivia"></option>
                    <option value="argentina"></option>
                    <option value="guatemala"></option>
                    <option value="dominica"></option>
                    <option value="columbia"></option>
                    <option value="mexico"></option>
                    <option value="egypt"></option>
                    <option value="algeria"></option>
                    <option value="cotedlvoire"></option>
                    <option value="malawi"></option>
                    <option value="ghana"></option>
                    <option value="ethiopia"></option>
                    <option value="zambia"></option>
                    <option value="tanzania"></option>
                    <option value="guinea"></option>
                    <option value="kenya"></option>
                    <option value="morocco"></option>
                    <option value="australia"></option>
                    <option value="tonga"></option>
                    <option value="papuanewguinea"></option>
                    <option value="fiji"></option>
                    <option value="newzealand"></option>
                    <option value="samoa"></option>
                    <option value="yemen"></option>
                    <option value="oman"></option>
                    <option value="bahrain"></option>
                    <option value="israel"></option>
                    <option value="kuwait"></option>
                    <option value="jordan"></option>
                    <option value="iran"></option>
                    <option value="saudiarabia"></option>
                    <option value="taiwan"></option>
                    <option value="unitednations"></option>
                    <option value="quebec"></option>
                </datalist>
                </p><br/>
                <button id="Stbtn">Submit</button>
            </form>
            <div id="Spcimg" style={{height: '70vh', width: '50vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://data.whicdn.com/images/333359093/original.jpg)'}}>
            <p id="Spctext">ENTER YOUR MULTIPLE COMPANY LOCATION TIMEZONE & NAME.</p>
            </div>
        </div>
        </>
    )
}

export default SettingPage;