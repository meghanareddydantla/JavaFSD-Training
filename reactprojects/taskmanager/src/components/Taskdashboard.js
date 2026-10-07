import { useNavigate } from 'react-router-dom';
import "./Taskdashboard.css";
function TaskDashboard({tasks,deleteTask}){
     const navigate = useNavigate();

    const showAddTask = () =>{
        navigate("/Addtask");
    }
    return(
        <div>
            <h1> Task Manager App</h1>
            <h2> TaskDashboard</h2>
            <table>
                <thead>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {tasks.map((task,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{task.name}</td>
                            <td>{task.status}</td>
                            <td><button onClick={() => deleteTask(task.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button class="add-task-btn" onClick={showAddTask} >Add Task</button>
        </div>

    );

}
export default TaskDashboard;