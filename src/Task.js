import { useState } from 'react';
import './Task.css';

export default function Task({
    todo,
    onChange,
    onDelete
}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;

    if(isEditing){
        todoContent = (<div className='Task'>
            <input value={todo.title} onChange={e => {
                onChange({ ...todo, title: e.target.value })
            }} />
            
            <button onClick={() => setIsEditing(false)} style={{ marginLeft: '200px'}}>Save</button>
        </div>);
    } else {
        todoContent = (
            <div className='Task'>
                {todo.title}
                <button onClick={() => setIsEditing(true)} style={{ marginLeft: '12px', marginLeft: '350px'}}>Edit</button>
            </div>
        )
    }

    return (<label className='Task'>
        <input type='checkbox' checked={todo.done} onChange={e => {
            onChange({ ...todo, done: e.target.checked });
        }} />
        {todoContent}
        <button onClick={() => onDelete(todo.id)} style={{height: '30px', float: 'right', marginRight: '20px'}}>Delete</button>
    </label>);
}