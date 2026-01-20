import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Books from "./components/Books.jsx";
import Header from "./components/Header.jsx";  // CORRIGIDO!

function App() {
  return (
    <div>
      <Header />
      <Books />
    </div>
  );
}

export default App;