import "./App.css";
import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  usernmae: string;
}

function App() {
  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>([]);

  useEffect(() => {
    console.log("Mounting");

    console.log("Users:", users);
    return () => console.log("Unmounting");
  }, [users]);

  
//   Callbacl with TypeScript
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    [count]
  );

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>ADD</button>
    </div>
  );
}

export default App;
