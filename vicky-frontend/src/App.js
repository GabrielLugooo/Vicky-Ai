import React from "react";
import "./App.css";
import VickyAvatar from "./components/VickyAvatar"; // Importar el componente VickyAvatar

function App() {
  return (
    <div className="App">
      <h1>¡Hola, Gaby! Vicky está aquí 👋</h1>
      <VickyAvatar /> {/* Renderiza el componente VickyAvatar */}
    </div>
  );
}

export default App;
