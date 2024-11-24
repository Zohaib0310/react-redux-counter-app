import React, { useState } from "react";
import Counter from "./Counter";
import "./style.css";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h1>REDUX MADE IT EASY</h1>
      <h2>{`The count: ${count}`}</h2>
      <Counter />
    </div>
  );
}

export default App;
