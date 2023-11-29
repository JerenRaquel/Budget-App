import React from "react";
import NavBar from "./components/NavBar";
import "./css/app.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
