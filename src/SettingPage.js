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
    const url="http://localhost:5000/clock"
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
            <p id="SPpac">Clock Location <input  onChange={(e)=>handle(e)} id="comloc" list="ide" value={data.comloc}  placeholder="Type Location" required /* id="comloc" type="text"  value={inputData} onChange={(e)=>setInpuData(e.target.value)} */ />
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