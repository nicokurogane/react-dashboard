import React from 'react';
import NavBar from "./components/NavBar";
import Counter from "./components/Counter"
import "./app.css";


function App() {
  return (
    <>
      <NavBar />
      <div className="test-div">
        <Counter props={{ title: "test title 1", number: "8" }} />
        <Counter props={{ title: "test title 2", number: "10" }} />
        <Counter props={{ title: "test title 3", number: "12" }} />
      </div>
    </>
  );
}

export default App;
