import Drilling from "./components/Drilling";
import Events from "./components/Events";
import FocusInput from "./components/FocusInput";
import Forms from "./components/Forms";
import Greetings from "./components/Greetings";
import Hooks from "./components/Hooks";
import { useTheme } from "./components/ThemeContext";

const userName = "Md Emon Mahdi";
const age = 28;

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div style={{ padding: "50px", margin: 0 }}>
        <h2>Welcome to react typescript</h2>

        <header
          style={{
            padding: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Theme: {theme}</span>
          <button
            onClick={toggleTheme}
            style={{ marginLeft: 12, padding: "6px 12px" }}
          >
            Ligh / Dark
          </button>
        </header>

        <Greetings userName={userName} age={age} />
        <Hooks />
        <Events />
        <Forms />
        <FocusInput />
        <Drilling>
          <h3>Blog title One</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam
            earum necessitatibus unde, adipisci consequuntur vel maxime ex
            facere delectus nesciunt placeat voluptas officiis iusto sapiente
            consectetur itaque dolore exercitationem soluta repellat voluptatum
            totam, dolorum aliquid! Soluta expedita obcaecati minus.
          </p>
        </Drilling>
        <Drilling>
          <h3>Blog title Two</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam
            earum necessitatibus unde, adipisci consequuntur vel maxime ex
            facere delectus nesciunt placeat voluptas officiis iusto sapiente
            consectetur itaque dolore exercitationem soluta repellat voluptatum
            totam, dolorum aliquid! Soluta expedita obcaecati minus.
          </p>
        </Drilling>
      </div>
    </>
  );
}

export default App;
