 
type GreetingProps = {
    userName: string;
    age: number
} 

const Greetings = ({userName, age}: GreetingProps) => {
  return (
    <div>
        <h2>Hello, {userName}, I am {age} years old</h2>
    </div>
  )
}

export default Greetings