// ./src/components/Counter.jsx

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    const increaseCount = ()=> {
        setCount(count + 1)
    }

    const decreaseCount = ()=> {
        setCount(count - 1)
    }
    const updateShow = ()=> {
        setShow(!show)
    }

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>
      <button onClick={updateShow}>Show/Hide</button>
    </div>
  );
}

export default Counter;
