import {useState} from "react";
function Counter(){
    //Local Variable
    const[count,setCount] = useState(0);
    //arrow function
    const handleIncrement = ()=>{
        setCount(count+1);
    }
    const handledecrement = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>+</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handledecrement}>-</button>
        </div>
    )
}
export default Counter;
export function App() {
  return (
    <div>
      <h1>First Functional Component</h1>
      <p>My First Functional Component - im Practicing React projects</p>
    </div>
  );
}
