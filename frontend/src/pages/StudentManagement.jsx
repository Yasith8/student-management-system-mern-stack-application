import React, { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"




import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiViewfinderCircle } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import 'ldrs/quantum'




function StudentManagement() {
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

  console.log(fData)
  if (!fData) {
    return <div className='absolute top-[50%] left-[50%]'><l-quantum size="100" speed="1.75" color="#7300FF"></l-quantum></div>;
  } 


  const handleDelete = async (studentId) => {
    console.log(studentId)
    try {
      const response = await fetch(`http://localhost:4000/api/students/${studentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
       
        console.log(response)
      } else {
        const errorMessage = await response.json();
        console.error('Error updating student:', errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className='m-5 '>
      <div className='flex items-center justify-between'>
        <div className='h-12 flex mb-4 rounded-md'><span><input type="text" className='border-2 border-violet-700 px-2 h-full rounded-l-md' /></span><button className='bg-violet-700 p-2 w-12 h-full border-2 border-violet-700 flex items-center justify-center rounded-r-md'><IoSearch className='text-white scale-110'/></button></div>
      <button className='bg-violet-700 text-white p-3 rounded-md mb-4 h-12 font-bold'>
        Add New Student
        <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        </button>
      </div>
      <Table>
  <TableHeader className=' text-white'>
    <TableRow>
      <TableHead className="w-[150px] bg-slate-300 text-black">Student ID</TableHead>
      <TableHead className="bg-slate-300 text-black">Name</TableHead>
      <TableHead className="bg-slate-300 text-black">Mobile No</TableHead>
      <TableHead className="bg-slate-300 text-black">email</TableHead>
      <TableHead className="bg-slate-300 text-black">Vle Access</TableHead>
      <TableHead className="bg-slate-300 text-black w-[10rem]">Modify</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
   
    {fData.map((e)=>(
      <TableRow className="bg-slate-50">
      <TableCell className="font-medium ">{e.studentNic}</TableCell>
      <TableCell className=" ">{e.firstName} {e.lastName}</TableCell>
      <TableCell className=" ">{e.mobileNo}</TableCell>
      <TableCell className=" ">{e.email}</TableCell>
      <TableCell className=" ">{(e.isActive)?"True":"False"}</TableCell>
      <TableCell className=" ">
        <div className='flex justify-between'>
            <button key={e._id} onClick={() => handleDelete(e._id)}>
          <div className=' bg-red-50 w-[2.5rem] h-[2.5rem] p-2 flex items-center border-2 border-red-600 rounded-md'>
        <MdDelete className='text-[1.3rem]'/>
          </div>
            </button>

            <button>
          <div className='bg-emerald-50 w-[2.5rem] h-[2.5rem] p-2 flex items-center border-2 b border-emerald-600 rounded-md'>
            <FaRegEdit className='text-[1.3rem]'/>
          </div>
            </button>

            <button>
          <div className='bg-violet-50 w-[2.5rem] h-[2.5rem] p-2 flex items-center border-2 border-violet-600 rounded-md'>
            <HiViewfinderCircle className='text-[1.3rem]'/>
          </div>
            </button>
        </div>
        </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>


    </div>
  )
}

export default StudentManagement