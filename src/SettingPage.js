import React, { useState } from 'react';
import './SettingPage.css';
import { FiPlus ,FiTrash } from "react-icons/fi";

const SettingPage=()=>{

    const [inputData,setInpuData]=useState('')
    const [items,setItems]=useState([]);

    const addItem=()=>{
        if(!inputData){

        }
        else{
            setItems([...items,inputData])
            setInpuData('')
        }
        
    }

    const deleteItem=(id)=>{
        console.log(id);
        const updateditems=items.filter((elem,ind)=>{
            return ind !== id;
        })
        setItems(updateditems);
    }

    const removeAll=()=>{
        setItems([]);
    }

    return(
        <>
        <div className="SPmain">
            <nav  id="SPnav">DIGITAL CLOCK'S</nav>
            <form id="SPform">
            <p id="SPpal">ADD LOCATION</p>
            <p id="SPpcn">Company Name <input  type="text"/></p><br/>
            <p id="SPpac">Clock Location <input type="text" placeholder="Type Location" value={inputData} onChange={(e)=>setInpuData(e.target.value)} />
            <FiPlus title="add clock" id="iconplus" onClick={addItem} />
            </p><br/>
            <div className="ShowItems">
            {
                items.map((elem ,ind)=>{
                    return(
                        <div className="EachItem" key={ind}>
                            <h4 id="SPh4">{elem}</h4><br/>
                            <FiTrash title="delete item" id="icontrash" onClick={()=>deleteItem(ind)} />
                        </div>

                    )

                })
            }
                
            </div>
            <div className="ShowItems">
            <button className="Btn" onClick={removeAll}><span>DELETE LIST</span></button>
            </div>
            <button id="SPfbtn">SUBMIT</button>
            </form>
            <div id="SPbgimg"  style={{height: '70vh', width: '50vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://data.whicdn.com/images/333359093/original.jpg)'}}>
            <p id="SPbgtext">ENTER TIME ZONE & COMPANY NAME</p>
            </div>
        </div>
        </>
    )
}

export default SettingPage;