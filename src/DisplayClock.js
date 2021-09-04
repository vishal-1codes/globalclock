import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './DisplayClock.css'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'





const DisplayClock=()=>{

    const[postloc,setPostloc]=useState([])

    useEffect(()=>{
        axios
        .get('http://localhost:5000/')
        .then(res=>{
            console.log(res);
            setPostloc(res.data.ClockData)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
   










    const [time ,setTime]=useState(new Date());

    const [etime,setEtime]=useState(new Date())

    const [nytime,setNytime]=useState(new Date())

   

    useEffect(() => {
        setInterval(()=>{
            setTime(new Date())
        },1000)
    })

    useEffect(() => {
        setInterval(()=>{
            setEtime(new Date().toLocaleTimeString("UTC",{timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h12'}))
        },1000)
    })

    useEffect(() => {
        setInterval(()=>{
            setNytime(new Date().toLocaleTimeString("UTC",{timeZone:'America/New_york',timeStyle:'medium',hourCycle:'h12'}))
        },1000)
    })


    return(
        <>
        <div className="cmain">
        <div id="maindiv">
            <Clock id="clockid" value={time}  size={300}  renderNumbers={true}/>
            <p>India</p>
        </div>
        <br/>
        <div id="maindiv">
            <Clock id="clockid" value={etime}  size={300} renderNumbers={true}/>
            <p>London</p>
        </div>
        <br/>
        <div id="maindiv">
            <Clock id="clockid" value={nytime}  size={300} renderNumbers={true}/>
            <p>America</p>
        </div>


        <div>
        <ul>
            {(postloc && postloc.length > 0) && postloc.map(post=>(
                <>
                <li id="getcomloc">{post.comloc}</li>
                <h2 id="getcomname">{post.comname}</h2>
                </>
            ))}
        </ul>
        </div>

        </div>

        </>
    )
}

export default DisplayClock;