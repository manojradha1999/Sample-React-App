import { useState } from "react";

function Usestatehook() {

    const[count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>count :{count}</button>
        </div>
    );
}

export default Usestatehook;