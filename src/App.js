import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const handleBtnCLick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h1>Hello!</h1>
      <div>This is amazing!</div>
      <button onClick={handleBtnCLick} className="btn-secondary">
        Click me!
      </button>
      <div>Count: {count}</div>
    </>
  );
};
