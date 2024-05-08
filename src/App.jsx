import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const handleDecrement = (e) => {
  //   // if (count > 0) {
  //   //   setCount(count - 1)
  //   // } else {
  //   //   setCount(0)
  //   // }
    
  // }

  return (
    <div>

    <div className="Container">
      <button onClick={(e) => setCount(count + 1)} className="Increment">&#94;</button>
      <p className="Counter">{count}</p>
      <button onClick={(e) => count >0 ? setCount(count-1) : setCount(0)} className="Decrement"><span className="decrement">&#94;</span></button>
    </div>
    </div>
  )
}

export default App;