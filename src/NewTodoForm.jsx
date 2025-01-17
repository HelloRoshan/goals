import { useState } from "react";
export default function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState('');
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === '') return;
        addTodo(newItem.trim())
        setNewItem('');
      }
    return (
        <form className='flex justify-center' onSubmit={handleSubmit}>
            <div className="form-row">
            <input type="text" id='item' placeholder="My goal is ..."
            className="block w-64 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            value={newItem} onChange={e =>  setNewItem(e.target.value)}/>
            </div>
            <button className='rounded-md bg-sky-900 text-white px-6 py-1 mx-2'>Add</button>
        </form>
    )
}