import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
     const [value,setValue]=useState("");
      const navigate=useNavigate();
       console.log(value)
     const handleClick= useCallback(()=>{
         navigate(`/zegocloud/${value}`);
     },[navigate,value])
  return (
    <div>
         <input style={{borderRadius:'green'}} type="text" value={value} onChange={(e)=>setValue(e.target.value)}  name="" id="" />
       <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Home