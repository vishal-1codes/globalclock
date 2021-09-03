import React, {useState , useEffect}  from 'react';
import axios from 'axios';

const SolvePage=()=>{
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


    return(
        <>
        <h1>hiii</h1>
        <div>
        <ul>
            {(postloc && postloc.length > 0) && postloc.map(post=>(
                <>
                <li>{post.comloc}</li>
                <li>{post.comname}</li>
                </>
            ))}
        </ul>
        </div>
        </>
    )
}

export default SolvePage;
