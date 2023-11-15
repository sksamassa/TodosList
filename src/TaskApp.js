import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import { useState } from "react";

let nextId = 0;
export default function TaskApp() {
    const [todos, setTodos] = useState([]);

    function handleAddTodo(title) {
        setTodos([
            {
                id: nextId++,
                title: title,
                done: false
            }, ...todos
        ])
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(todo => {
            if(todo.id === nextTodo.id){
                return nextTodo;
            } else { 
                return todo;
             }
        }))
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter(todo => {
            return todo.id !== todoId;
        }));
    }

    return (
        <div className="taskapp">
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList todos={todos}
                    onChangeTodo={handleChangeTodo}
                    onDeleteTodo={handleDeleteTodo} />
        </div>
    )
}