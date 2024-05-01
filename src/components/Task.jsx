import { dataStore } from "@/store/dataStore";
import classNames from "classnames";
import React from "react";
//const STATUS = "DONE"; // ONGOING || DONE || PLANED
const Task = ({ title }) => {
    const tasks = dataStore((store)=>store.tasks.find((task)=>task.title===title))
     
    const store = dataStore();
  return (
    <div className=" bg-white text-black p-2 rounded opacity-100 cursor-move " draggable onDragStart={()=>{store.setDragTask(tasks.title)}} >
      <div className="w-full  ">{tasks.title}</div>
      <div className=" px-2 ">
        <div></div>
        <div className=" flex text-right items-end justify-end mt-1 gap-2 ">
            <div><button onClick={()=>store.deleteTask(tasks)}  className=" bg-black text-white px-2 py-1 rounded ">Delete</button></div>
        <div className={classNames("status",tasks.state)}>{tasks.state}</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
