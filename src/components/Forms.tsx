import { useState } from "react"

 

const Forms = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Hello! success your is ${email} and pass ${password}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Forms