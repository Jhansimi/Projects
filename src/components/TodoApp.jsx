import React, { useState } from 'react';
import "./TodoApp.css";

const TodoApp = () => {

    const [addTodo, setAddTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    const addTodoHandler = (e) => {
        setAddTodo(e.target.value);
    }

    const addBtn = () => {
        if (addTodo.trim() !== '') {
            setTodos([...todos, { id: idCounter, text: addTodo }]);
            setAddTodo('');
            setIdCounter(idCounter + 1);
            console.log("coun,d,",idCounter)
        }
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className='bg-container'>
            <div className='input-container'>
                <input type="text" className='input-text' placeholder='Add Todo..' value={addTodo} onChange={addTodoHandler} />
                <button onClick={addBtn}>Add</button>
            </div>
            <div className='container'>
                {todos.map((todo) => (
                    <div className='d-flex justify-content-around p-3 mt-5' key={todo.id}>
                        <div className='d-flex'>
                            <input type="checkbox" />
                            <h5 className='m-2'>{todo.text}</h5>
                        </div>
                        <div>
                            <button className='m-2' onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;
