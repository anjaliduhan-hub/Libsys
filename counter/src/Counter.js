import React, {useState} from "react";

const Counter = (props) => {
let[count, setCount] = useState(0);

let increase = () => {
setCount(count =count + 1);
};

let decrease = () => {
setCount(count = count - 1);
} 

let reset = () => {
setCount(0); 
}

return (
<div>
<h1> {count} </h1>
<button onClick={increase}>+</button> 
<button onClick={decrease}>-</button>
<button onClick={reset}>Reset</button>
</div>
)
};

export default Counter;



