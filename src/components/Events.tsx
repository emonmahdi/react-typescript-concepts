import { useState } from "react"

 

const Events = () => {
    const [clickCount, setClickCount] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('')

    const handleCount =() => {
        setClickCount(pre => pre +1)
    }

  return (
    <div>
        <button onClick={handleCount}>Click</button>
        <h4>Click Count : {clickCount}</h4>

        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h4>Input value: {inputValue}</h4>
        </div>
    </div>
  )
}

export default Events