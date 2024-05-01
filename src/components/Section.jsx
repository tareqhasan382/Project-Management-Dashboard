"use client"
import React, { useState } from 'react'
import Task from './Task';
import { dataStore } from '@/store/dataStore';


const Section = ({state,name}) => {
  
    const tasks= dataStore((store)=>store.tasks.filter((task)=>task.state===state));
    // console.log("Tasks:",tasks)
    const store=dataStore();
// console.log("dragTask:",store.dragTask)
  return (
    <div className=' bg-gray-200  rounded mt-2 ' onDragOver={(e)=>{e.preventDefault()}}
     onDrop={(e)=>{ store.moveTask(store.dragTask,state);store.setDragTask(null) }} >
        
       <div className=' bg-gray-200 rounded '>
       <div className=' bg-black text-white text-center mb-2 text-2xl font-extrabold py-2 '>{name}</div>
       <div className=' text-black flex flex-col gap-2 p-2  '>
       {tasks?.map(task=><Task title={task.title} key={task.title} />)}
      
       </div>
       </div>
    </div>
  )
}

export default Section;