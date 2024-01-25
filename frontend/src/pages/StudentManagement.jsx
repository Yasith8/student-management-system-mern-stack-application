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
  return (
    <div>
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Student ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Mobile No</TableHead>
      <TableHead className="text-right"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>


    {fData.map((e)=>(
      <TableRow>
      <TableCell className="font-medium">{e.studentNic}</TableCell>
      <TableCell>{e.firstName}</TableCell>
      <TableCell>{e.mobileNo}</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
  )
}

export default StudentManagement