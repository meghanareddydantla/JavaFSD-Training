import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
function Addtodo({addTodo}) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
       
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!title.trim()){
            alert("Please enter a title for the todo.");
            return;
        }
        const newTodo = {
            SNO: Math.random(),
            title: title
        };
        addTodo(newTodo);
        navigate('/');
    };
        return (
        <div>
            <h1>Todo App</h1>
            <h2>Add Todo</h2>
            <form class="basic form" onSubmit={handleSubmit}>
                <lable>TODO Title</lable>
                <input
                    type="text"
                    placeholder="Enter todo title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}
export default Addtodo;