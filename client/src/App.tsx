import InputForm from "./components/InputForm";
import logo from "./assets/wolt-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <InputForm />
    </div>
  );
}

export default App;
