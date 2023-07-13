import React from 'react'


function Todo({task, toggleComplete, deleteTodo, editTodo}) {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
            <div>
                <button className='btn-n btn-edit' onClick={() => editTodo(task.id)}>Edit</button>
                <button className='btn-n btn-delete' onClick={() => deleteTodo(task.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;