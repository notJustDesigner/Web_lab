import { useState, useEffect } from "react";
import '../App.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      }, [count]);
    
  return (
    <div className="App">
        <h1>I've rendered {count} times!</h1>;
    </div>
    
  )
}

export default Counter
