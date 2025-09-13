import { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState<number>(0);

  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    setUser({
        name:"Abdul Alim",
        email: 'alim@gmail.com'
    })
  }, [])

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button onClick={() => setCount(count - 1)}> Decrement</button>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      {
        user && <p>name: {user.name} && email: {user.email}</p>
      }
    </div>
  );
};

export default Hooks;
