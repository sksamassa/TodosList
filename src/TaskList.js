import { useState } from "react";
import Task from "./Task";
import './TaskList.css';

export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
    return (
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    <Task 
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            })}
        </ul>
    );
}