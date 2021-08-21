import React, { useState } from 'react';
import axios from 'axios';
import { FiMail , FiUnlock} from "react-icons/fi";
import './SignUp.css'



const SignUp=()=>{
    const url="http://localhost:5000/create"
    const[data,setData]=useState({
        email:"",
        password:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            email:data.email,
            password:data.password
        })
        .then(res=>{
            console.log(res.data);
        })
    }
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

   
   
    return(
        <>
        <div className="Sumain" >
        <h1 id="navtext">DIGITAL CLOCK'S</h1>
        <form className="sform" onSubmit={(e)=>submit(e)} >
            <h4>Sign Up </h4>
            <label id="semail"><FiMail/> <input onChange={(e)=>handle(e)}  id="email" value={data.email}  type="email" autoComplete="off" required/></label>
            <br></br>
            <label><FiUnlock/> <input  onChange={(e)=>handle(e)}  id="password" value={data.password}  type="password" min="6" max="12" autoComplete="off" required/></label><br/>
            <button type="submit" >Submit</button><br/>
            <label>signup using <a href="https://www.google.com/gmail/">Gmail</a></label>
        </form>
        <span id="Sucir2"></span>
        <span id="Sucir3"></span>
        <div>
            <div id="Suphoto" style={{height: '80vh', width: '40vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url()'}}>
               <p id="Suphototext"> Setup digial clocks for all of your global office locations </p>
            </div>
        </div>
        <span id="Sucir1"></span>
        <br/>
        </div>
        </>
    );
}

export default SignUp;