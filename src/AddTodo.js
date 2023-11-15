import { useState } from 'react';
import './AddTodo.css';


export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');

    return(
        <div className='AddTodo'>
            <input placeholder='Add todo' value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
        </div>
    );
}