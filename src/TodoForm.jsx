import React from 'react'
import { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form' autoComplete='off'>
            <div className="form-row">
                <label>New Item</label>
                <input value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text" id="item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}

export default TodoForm