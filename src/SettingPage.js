import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './SettingPage.css';
import { FiPlus ,FiTrash } from "react-icons/fi";



const getLocalItems=()=>{
    let list =localStorage.getItem('lists');
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return [];
    }
}



const SettingPage=()=>{
    const url="http://localhost:5000/create"
    const [data,setData]=useState({
        comname:"",
        comloc:""
    })
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata);
    }

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            comname:data.comname,
            comloc:data.comloc
        })
        .then(res=>{
            console.log(res.data);
        })
    }


    








    const [inputData,setInpuData]=useState('')
    const [items,setItems]=useState(getLocalItems());

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
    
    //Remove all list
    const removeAll=()=>{
        setItems([]);
    }


    //add data to local storage
    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(items))
    })

    return(
        <>
        <div className="SPmain">
            <nav  id="SPnav">DIGITAL CLOCK'S</nav>
            <form id="SPform" onSubmit={(e)=>submit(e)}>
            <p id="SPpal">ADD LOCATION</p>
            <p id="SPpcn">Company Name <input onChange={(e)=>handle(e)} id="comname" value={data.comname}  type="text" required/></p><br/>
            <p id="SPpac">Clock Location <input  onChange={(e)=>handle(e)} id="comloc" value={data.comloc}  placeholder="Type Location" required /* id="comloc" type="text"  value={inputData} onChange={(e)=>setInpuData(e.target.value)} */ />
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