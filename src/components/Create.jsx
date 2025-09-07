import React from 'react'
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { small } from 'framer-motion/client';


const Create = (props) => {
    const todo = props.todo;
    const settodo = props.settodo;


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



    // const [title, settitle] = useState("")
    const submithandler = (data) => {
        data.id = nanoid();
        data.iscompleted = false;
        // const newtodo = {
        //     id: nanoid(),
        //     // title: title,
        //     iscompleted: false,
        // }
        // console.log(newtodo);
        // const copytodo = [...todo];
        // copytodo.push(newtodo);
        // settodo(copytodo);
        // settitle("") 
        const copytodos = [...todo];
        copytodos.push(data);
        settodo(copytodos);
        reset();
    }
    return (
        <div className='w-[70%]'>
            <div className='
 w-[90%] h-[90%] p-10 '>
                <h1 className='text-6xl text-white  '>Set <span className='text-red-400 font-thin'>Reminder.</span> For Task !</h1>
                <form onSubmit={handleSubmit(submithandler)}
                    className=' mt-10 flex flex-col items-start gap-5'>
                    <input
                        {...register("title",
                            { required: "title can't be empty" }

                        )}
                        // onChange={(e) => {
                        //     settitle(e.target.value)
                        //     console.log(e.target.value);  }}
                        //     value={title}
                        className='px-5 py-3 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-3xl w-[40%]' type="text" placeholder='Enter task ' />
                    {errors && errors.title && errors.title.message  && < small className='text-thin text-red-500 -mt-4 ' > { errors.title.message } </small>}
                <button
                    className='bg-transparent border rounded px-3 py-1 text-white  hover:bg-blue-500 cursor-pointer'>Create Todo</button>
            </form>   </div> </div >
    )}
export default Create