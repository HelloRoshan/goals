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
        <form className='' onSubmit={handleSubmit}>
            <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" id='item' value={newItem} onChange={e =>  setNewItem(e.target.value)}/>
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}