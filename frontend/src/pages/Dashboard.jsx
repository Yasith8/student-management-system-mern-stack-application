import React, { useState } from 'react'
import AddUser from './AddUser'
import img from '../assets/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import StudentManagement from './StudentManagement';
import StudentDel from './StudentDel';
import UserUpdate from './UserUpdate';



function Dashboard() {
  const [checkId,setCheckId]=useState(1);
  const opProcesses=[
    {id:1,name:"Student Registration","func":<AddUser/>},
    {id:2,name:"Student Management","func":<AddUser/>},
    {id:3,name:"Student Deletion","func":<AddUser/>},
    {id:4,name:"Student Update","func":<AddUser/>},
  ]

  const btnHandler=(e,id)=>{
    e.preventDefault();
    setCheckId(id)
    console.log(id)
  }
  return (
    <div>
      <div className='flex h-screen'>
      <div className='w-[15%]  flex flex-col justify-between'>

        <h1><a href="" className='text-[3rem] font-bold flex flex-col items-center mt-5'><img src={img} alt=""  className='w-[8rem] border-2 border-black rounded-full'/></a></h1>

        <div className='flex flex-col gap-2'>
        {opProcesses.map((e)=>(
          <a href="" key={e.id}  className='bg-white p-3 text-center border-2 border-white hover:border-slate-600 hover:border-2' onClick={(ev)=>btnHandler(ev,e.id)}>{e.name}</a>
          ))}
          </div>

          <div className='text-center mb-3'>
            <DropdownMenu>
  <DropdownMenuTrigger><button className='p-2 bg-violet-700 text-white font-semibold rounded-md'>Account Setting</button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>VLE</DropdownMenuItem>
    <DropdownMenuItem>Event</DropdownMenuItem>
    <DropdownMenuItem>Teacher's Payment</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          </div>

      </div>
      <div className='w-[85%] '>
        {(checkId==1)?<AddUser/>:
        (checkId==2)?<StudentManagement/>:
        (checkId==3)?<StudentDel/>:<UserUpdate/>
        }
        </div>
      </div>
    </div>
  )
}

export default Dashboard