import React, { useEffect, useState } from 'react'
import Header from './Header'

import { Input } from "@/components/ui/input"




function LogIn() {

  const [email,setEmail]=useState("");
  const [nic,setNic]=useState("");
  const [err,setErr]=useState(false);
  const [fData,setFData]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetch('http://localhost:4000/api/students/');
      const json=await response.json();

      if(response.ok){
        setFData(json)
      }
      else{
        console.error("Error fetching students: ",json)
      }
    }

    fetchData();
  },[])

  const btnHandler=(e)=>{
    e.preventDefault()
    
    console.log(fData)

    for(let i=0;i<fData.length;i++){
      if((email==fData[i].email)&&nic==fData[i].studentNic&& fData[i].isActive==true){
        console.log("Access Granted");
        break;
      }else{
        setErr(true);
        setEmail('');
        setNic('');
      }
    }
  }



  return (
    <div className='flex w-screen h-screen'>
        <div className='bg-slate-200 w-2/3 h-screen'>
        <Header className=''/>    
        </div>  
        <div className=' bg-slate-100 w-1/3 h-screen'>
          <div className='relative top-1/4 left-0 animate-fade-up animate-once animate-duration-[1000ms]'>
            <h1 className='font-bold text-center text-[3rem]'>LogIn</h1>
          <form className='mx-[4rem]'>
            <Input type="email" placeholder="Email" className={`w-full ${(err)?'border-2 border-red-600':''}`} value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <Input type="password" placeholder="NIC No" className={`w-full ${(err)?'border-2 border-red-600':''}`} value={nic} onChange={(e)=>setNic(e.target.value)}/><br />
            <div className='flex items-center justify-between'>
            <button type="reset" className='w-[6rem] py-2 b border-2 border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white'>Cancel</button>
              <button type="submit" className='w-[6rem] py-2 bg-black text-white rounded-md' onClick={btnHandler}>Submit</button>
              </div>
          </form>
          </div>

        </div>  

    </div>
  )
}

export default LogIn