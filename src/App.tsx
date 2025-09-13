import Events from "./components/Events";
import Forms from "./components/Forms";
import Greetings from "./components/Greetings";
import Hooks from "./components/Hooks";

const userName = "Md Emon Mahdi";
const age = 28;

function App() {
  return (
    <>
      <h2>Welcome to react typescript</h2>
      <Greetings userName={userName} age={age} />
      <Hooks />
      <Events />
      <Forms />
    </>
  );
}

export default App;
