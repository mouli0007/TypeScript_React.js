import "./App.css";
import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";

interface User {
  id: number;
  usernmae: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

function App() {
  
//   UseState with typescript
  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>([]);

  // UseRef with TypeScript !
  const inputRef = useRef<HTMLInputElement>(null);

  // We have to use Optional Chainning in typeScript ! to avoid error
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  const myNum: number = 12;
  useEffect(() => {
    console.log("Mounting");

    console.log("Users:", users);
    return () => console.log("Unmounting");
  }, [users]);

  
//   UseCallback with TypeScript
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    [count]
  );
  
//   Use Memo with thypeScript

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>ADD</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
