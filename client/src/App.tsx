import Cards from "./components/Card";
import logo from "./assets/wolt-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Cards />
    </div>
  );
}

export default App;
