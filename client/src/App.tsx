import InputForm from "./components/InputForm";
import logo from "./assets/motorcycle-delivery.svg";
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
