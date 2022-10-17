import { React } from "react";
import HomePage from "./components/HomePage";
// import HeaderFirst from "./components/Header/HeaderFirst";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderFirst from "./components/Header/HeaderFirst.js";
import HeaderSecond from "./components/Header/HeaderSecond";
import HeaderThree from "./components/Header/HearderThree";

function App() {
  return (
    <div className="App">
      <HeaderFirst/>
      <HeaderSecond/>
      <HeaderThree/>
      <HomePage/>
    </div>
  );
}

export default App;
