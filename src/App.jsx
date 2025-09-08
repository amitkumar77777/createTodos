import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Create from './components/Create'
import Read from './components/Read'
import { toast } from 'react-toastify'
const App = () => {
  const [todo, settodo] = useState([
    {
      id: 1, title:"Go home🏠 ", iscompleted: false,
    },
  ])
  const deleteall = (e) => {
    e.preventDefault();
    toast.error("All Tasks Deleted!" )  
    settodo([]);
    
  }
  return (
    <div className=' p-10 w-screen h-screen bg-gray-900 flex  gap-10 '
    ><Create todo={todo} settodo={settodo} />
      <Read todo={todo} settodo={settodo} />
      <form>
        <button onClick={deleteall}
          className=' px-3 py-2 border mt-150 rounded border-white text-red-500 cursor-pointer hover:bg-red-500 hover:text-white font-bold' >Delete All</button>
      </form>
    </div>
  )
}

export default App