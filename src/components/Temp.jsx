import { dataStore } from "../store/dataStore";
import {shallow} from "zustand/shallow"

export default function Temp({state}){
    const tasks=dataStore((store)=>store.tasks.filter((task)=>task.state===state),shallow)
    
}