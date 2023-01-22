import Home from "./pages/Home";
import logo from "./assets/wolt-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Home />
    </div>
  );
}

export default App;
