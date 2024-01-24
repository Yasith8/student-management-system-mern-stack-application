import React from 'react'
import AddUser from './AddUser'
import img from '../assets/logo.png'


function Dashboard() {
  const opProcesses=[
    {id:1,name:"Student Registration","func":<AddUser/>},
    {id:2,name:"Student Management","func":<AddUser/>},
    {id:3,name:"Student Deletion","func":<AddUser/>},
    {id:4,name:"Student Update","func":<AddUser/>},
  ]
  return (
    <div>
      <div className='flex h-screen'>
      <div className='w-[15%]  flex flex-col justify-between'>

        <h1><a href="" className='text-[3rem] font-bold flex flex-col items-center mt-5'><img src={img} alt=""  className='w-[8rem] border-2 border-black rounded-full'/></a></h1>

        <div className='flex flex-col gap-2'>
        {opProcesses.map((e)=>(
          <a href="" key={e.id} className='bg-white p-3 text-center border-2 border-white hover:border-slate-600 hover:border-2'>{e.name}</a>
          ))}
          </div>

          <div>
            Dropdown
          </div>

      </div>
      <div className='w-[85%] bg-pink-500'>a</div>
      </div>
    </div>
  )
}

export default Dashboard