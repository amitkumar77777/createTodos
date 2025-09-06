import React from 'react'

const Read = (props) => {
        const todo=props.todo;
    const settodo=props.settodo;
   
     const rendertodos = todo.map((todo) => {
        return <li key={todo.id}>{todo.title} <span  onClick={()=>{deletehandler(todo.id)}}
        className='text-red-500 text-sm cursor-pointer'>|Delete</span></li>
    })
    const deletehandler=(id)=>{
        const filtertodo=todo.filter((todo)=>todo.id != id);
        settodo(filtertodo)
    }

  return (
    <div><div > 
     <h1 className='text-3xl mt-20 text-red-400'>Pending <span className='text-white font-bold'> Todos...</span></h1>
    <ol className='mt-5 text-xl list-decimal list-inside text-white '> {rendertodos}</ol>
    </div>
  
</div>
  )
}

export default Read