import React from 'react'
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
  return (
    <DialogContent className='DialogContent'>
    <DialogHeader>
      <DialogTitle>Add a New Student</DialogTitle>
    </DialogHeader>
    <form>

    <div className="grid grid-cols-3 grid-rows-3 gap-8 w-full h-full">
    <div className='flex items-center'>
        <label htmlFor="nic" className='mr-3'>NIC: </label>
        <Input id="nic"/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="fname" className='mr-3'>Firstname: </label>
        <Input id="fname"/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="lname" className='mr-3'>Lastname: </label>
        <Input id="lname"/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="dob" className='mr-3'>birthDate: </label>
        <input type='date' id="dob" className='w-[15rem] p-2 rounded-md border border-slate-200'/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="phone" className='mr-3'>MobileNo: </label>
        <Input id="phone"/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="email" className='mr-3'>Email: </label>
        <Input id="email"/>
    </div>
    <div className='flex items-center'>
        <label htmlFor="" className='mr-3'>Gender: </label>
        <div className='flex gap-3 items-center justify-center'>
        <div className='flex items-center justify-center'><input type="radio" name="gender" id="radioMale"/><label htmlFor="radioMale">Male</label></div>
        <div className='flex items-center justify-center'><input type="radio" name="gender" id="radioFemale" /><label htmlFor="radioFemale">Female</label></div>
        </div>
    </div>
    <div className='flex items-center'>
        <label htmlFor="address" className='mr-3'>Address: </label>
        <textarea name="" id="address" cols="30" rows="1" className='border border-slate-200 rounded-md'></textarea>
    </div>
    <div className='flex items-center'>
        <label htmlFor="" className='mr-3'>VLE: </label>
        <div className='flex gap-3 items-center justify-center'>
        <div className='flex items-center justify-center'><input type="radio" name="vle" id="radioactive"/><label htmlFor="radioactive">Active</label></div>
        <div className='flex items-center justify-center'><input type="radio" name="vle" id="radioinactive" /><label htmlFor="radioinactive">InActive</label></div>
        </div>
    </div>
</div>
    </form>
    <DialogFooter>
        <button className='w-[8rem]  rounded-lg border-2 border-violet-700 h-[3rem] p-1 hover:text-white hover:bg-violet-400' type="reset">Clear</button>
        <button className='w-[8rem] text-white rounded-lg bg-violet-700 h-[3rem] p-1' type="submit">Submit</button>
    </DialogFooter>
  </DialogContent>
  )
}

export default CustomeAlert