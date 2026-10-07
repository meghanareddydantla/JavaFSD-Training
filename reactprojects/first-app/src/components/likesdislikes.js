import {useState} from "react";
import image from "../src/image.png";
import { App } from "../App";
function LikesDislikes(){
    //Local Variable
    const[count,setCount] = useState(0);
    //arrow function
    const handleLike = ()=>{
        setCount(count+1);
    }
    const handleDislike = () => {
        setCount(count  1);
    }
    return(
        <div>
            <img src={image} alt="Hanuma" />
            <h2>Count: {count}</h2>
            <button onClick={handleLike}>Like</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleDislike}>Dislike</button>
        </div>
    
}
export default LikesDislikes;


