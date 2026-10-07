import {useNavigate} from "react-router-dom";
function Todolist({todos, deleteTodo}) {
    const navigate = useNavigate();
    const showAddTodo = () => {
        navigate("/addtodo");
    };
    return(
        <div>
            <h1>TODO APP</h1>
            <h2>Todo List</h2>
            <table>
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{todo.title}</td>
                            <td>
                                <button onClick={() => deleteTodo(todo.SNO)}>Delete</button>
                            </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <button class="add-Todo" onClick={showAddTodo}>
                Add Todo
            </button>
        </div>
    );
}
export default Todolist;