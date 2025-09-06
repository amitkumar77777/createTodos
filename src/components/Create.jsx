import React from 'react'
import { nanoid } from 'nanoid';
import { useState } from 'react';

const Create = (props) => {
    const todo=props.todo;
    const settodo=props.settodo;
    const [title, settitle] = useState("")
    const submithandler = (dets) => {
        dets.preventDefault();
        const newtodo = {
            id: nanoid(),
            title: title,
            iscompleted: false,
        }
        console.log(newtodo);
        const copytodo = [...todo];
        copytodo.push(newtodo);
        settodo(copytodo);
        settitle("")
    }
    return (
        <div className='w-[70%]'>     
             <div className='
 w-[90%] h-[90%] p-10 '>
            <h1 className='text-9xl text-white  '>Create <span className='text-red-400 font-thin'>Todo.</span></h1>
            <form className=' mt-10 flex flex-col items-start gap-5'>
                <input onChange={(e) => {
                    settitle(e.target.value)
                    console.log(e.target.value);

                }}
                    value={title}
                    className='px-5 py-3 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-3xl w-[40%]' type="text" placeholder='Enter task ' />
                <button onClick={submithandler}
                    className='bg-transparent border rounded px-3 py-1 text-white  hover:bg-blue-500 cursor-pointer'>Create Todo</button>
            </form>
             
        </div> </div>
    )
}

export default Create