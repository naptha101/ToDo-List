import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Add, Delete, Remove } from '../actions';
import { MdDeleteOutline } from "react-icons/md";
const Todo = () => {
    const [input,setInput]=useState("");
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.todoreducer.list)
    const [show,Setshow]=useState(false);
  return (
    <div className='min-w-[40vw] flex flex-col gap-2 min-h-[40vh] justify-center items-center p-4 rounded-lg bg-indigo-400'>
        
        <div className='flex p-2 gap-2 justify-center items-center'>
            <input className='p-2 rounded-md outline-none' value={input} onChange={(e)=>setInput(e.target.value)}   type="text" placeholder='Add Todo'></input>
            <FaPlus size={20} className='text-white hover:animate-spin ' onClick={()=>dispatch(Add(input))}></FaPlus>
        </div>
        <div className='flex flex-col gap-2 p-3 duration-100 '>

          {
           show&&list.map((e,i)=>(
                <div key={i} className='flex item-center rounded-md bg-white justify-between w-[15vw] p-3'>
                    <h1>{e.data}</h1>
                    <MdDeleteOutline onClick={()=>dispatch(Delete(e.id))}></MdDeleteOutline>
                </div>
            ))

          }
       {list.length>0&&show&& <button  className='p-3 rounded-lg bg-orange-300 text-white' onClick={()=>dispatch(Remove())}>{"Delete All"}</button>}
       {list.length>0&&   <button  className='p-3 rounded-lg bg-indigo-600 text-white' onClick={()=>Setshow(!show)}>{show?"Hide":`Show All (${list.length})`}</button>}
          </div>
  

        
        </div>
  )
}

export default Todo