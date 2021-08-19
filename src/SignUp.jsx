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
        <h1 id="navtext">GLOBAL CLOCK</h1>
        <form className="sform" onSubmit={(e)=>submit(e)} >
            <h4>Sign Up </h4>
            <label id="semail"><FiMail/> <input onChange={(e)=>handle(e)}  id="email" value={data.email}  type="email" autoComplete="off" required/></label>
            <br></br>
            <label><FiUnlock/> <input  onChange={(e)=>handle(e)}  id="password" value={data.password}  type="password" min="6" max="12" autoComplete="off" required/></label><br/>
            <button type="submit" >Submit</button>
        </form>
        <span id="Sucir2"></span>
        <span id="Sucir3"></span>
        <div>
            <div id="Suphoto" style={{height: '80vh', width: '30vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://st.depositphotos.com/2069237/2453/i/600/depositphotos_24537413-stock-photo-young-man-looking-thinking.jpg)'}}></div>
        </div>
        <span id="Sucir1"></span>
        <br/>
        <div className="Suart">
            <article id="Suart1"><nav>OUR SERVICE</nav><br/><br/>
            <span>
            We provide digital clocks for global company. Our clients are UXmini , AB group,etc.
            </span>
            </article> <br/>
            <article id="Suart2"><nav>ABOUT US</nav><br/><br/>
            <span>
            We are new here , but we are create better life for humans and our employee.
            <br/>We started our journey from 2021.
            </span>
            </article>
        </div>


        </div>
        </>
    );
}

export default SignUp;