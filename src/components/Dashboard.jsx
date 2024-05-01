"use client"
import React, { useState } from 'react'
import Section from './Section'
import { dataStore } from '@/store/dataStore'
import Modal from './Modal'

const Dashboard = () => {
  const [title,setTitle]=useState("")
  const [open,setOpen]=useState(false)
  // const data = { title: "Tareq Hasan", state: "DONE" };
  // const addTask= dataStore((store)=>store.addTask)
  const store = dataStore();
  return (
    <div className=' w-full h-auto mx-auto  lg:px-20 px-2 rounded  '>
        <div className=' w-full bg-red-400 flex flex-row justify-between px-4 py-4 items-center text-center '>
            <h1 className=' lg:text-4xl text-xl font-extrabold '>Dashboard</h1>
            <button onClick={()=>setOpen(true)} className=' bg-black text-white p-2 rounded '>Create Task</button>
            
        </div>
        <Modal isOpen={open} onClose={() => setOpen(false)}  />
        <div className=' grid grid-cols-3  gap-5 h-full  '>
          <Section state="PLANED" name="To Do" />
          <Section state="ONGOING" name="Progress" />
          <Section state="DONE" name="Done" />
        </div>
    </div>
    
  )
}

export default Dashboard;
// {store.addTask({title:"Tareq",state:"DONE"})}