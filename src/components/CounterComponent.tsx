import { useCounter } from "../hooks/useCounter"

const CounterComponent:React.FC = () => {
    const {counter, increment, decrement, reset} = useCounter(5)
  return (
    <div>
        <button onClick={decrement}>Decrement</button>
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComponent