import React, { useState } from 'react'
import '../customComponent/custom.css'

import {
   
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
    
  } from "@/components/ui/dialog"

  import { Input } from "@/components/ui/input"

function CustomeAlert() {

    const [nic,setNic]=useState("");
    const [fName,setLName]=useState("");
    const [lName,setFName]=useState("");
    const [dob,setDob]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
    const [address,setAddress]=useState("");
    const [isActive,setIsActive]=useState(true);

    const [err,setErr]=useState(null);
    const [emptyFields,setEmptyFields]=useState([])

    

    const submitHandler=async()=>{
        const student={nic,fName,lName,dob,gender,phone,address,email,isActive};

        const response=await fetch('http://localhost:4000/api/students/add/',{
            method:'POST',
            body: JSON.stringify(student),
            headers:{
                "Content-Type":"application/json",
            }
        })

        const json=await response.json();
        if(!response.ok){
            setErr(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok){
              setNic("")
            setLName("")
            setFName("")
              setDob("")
            setPhone("")
            setEmail("")
          setAddress("")
         setIsActive(true)
         setErr(null)
         setEmptyFields([])
         alert("Student Added Successfully!");
        }
    }
  return (
    <DialogContent className='DialogContent'>
    <DialogHeader>
      <DialogTitle>Add a New Student</DialogTitle>
    </DialogHeader>
    <form>

    <div className="grid grid-cols-3 grid-rows-3 gap-8 w-full h-full">
    <div className='flex items-center'>
        <label htmlFor="nic" className='mr-3'>NIC: </label>
        <Input id="nic" value={nic} onChange={e=>setNic(e.target.value)}/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="fname" className='mr-3'>Firstname: </label>
        <Input id="fname" value={fName} onChange={e=>setFName(e.target.value)}/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="lname" className='mr-3'>Lastname: </label>
        <Input id="lname" value={lName} onChange={e=>setLName(e.target.value)}/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="dob" className='mr-3'>birthDate: </label>
        <input type='date' id="dob" className='w-[15rem] p-2 rounded-md border border-slate-200'
         onChange={e=>setDob(e.target.value)}
        />
    </div>
    <div className='flex items-center'>
        <label htmlFor="phone" className='mr-3'>MobileNo: </label>
        <Input id="phone" onChange={e=>setPhone(e.target.value)}/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="email" className='mr-3'>Email: </label>
        <Input id="email" onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="" className='mr-3'>Gender: </label>
        <div className='flex gap-3 items-center justify-center'>
        <div className='flex items-center justify-center'><input type="radio" name="gender" value="male" id="radioMale" onChange={e=>setGender(e.target.value)}/><label htmlFor="radioMale">Male</label></div>
        <div className='flex items-center justify-center'><input type="radio" name="gender" value="female" id="radioFemale" onChange={e=>setGender(e.target.value)}/><label htmlFor="radioFemale">Female</label></div>
        </div>
    </div>
    <div className='flex items-center'>
        <label htmlFor="address" className='mr-3'>Address: </label>
        <textarea name="" id="address" cols="30" rows="1" className='border border-slate-200 rounded-md' onChange={e=>setAddress(e.target.value)}></textarea>
    </div>
    <div className='flex items-center'>
        <label htmlFor="" className='mr-3'>VLE: </label>
        <div className='flex gap-3 items-center justify-center'>
        <div className='flex items-center justify-center'><input type="radio" value={true} name="vle" id="radioactive" onChange={e=>setIsActive(e.target.value)}/><label htmlFor="radioactive">Active</label></div>
        <div className='flex items-center justify-center'><input type="radio" value={false} name="vle" id="radioinactive" onChange={e=>setIsActive(e.target.value)}/><label htmlFor="radioinactive">InActive</label></div>
        </div>
    </div>
</div>
    </form>
    <DialogFooter>
        <div className='text-red-500'>{err?err:""}</div>
        <button className='w-[8rem]  rounded-lg border-2 border-violet-700 h-[3rem] p-1 hover:text-white hover:bg-violet-400' type="reset">Clear</button>
        <button className='w-[8rem] text-white rounded-lg bg-violet-700 h-[3rem] p-1' type="submit" onClick={submitHandler}>Submit</button>
    </DialogFooter>
  </DialogContent>
  )
}

export default CustomeAlert