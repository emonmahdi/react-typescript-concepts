import Greetings from "./components/Greetings";

const userName = "Md Emon Mahdi";
const age = 28;

function App() {
  return (
    <>
      <h2>Welcome to react typescript</h2>
      <Greetings userName={userName} age={age} />
    </>
  );
}

export default App;
