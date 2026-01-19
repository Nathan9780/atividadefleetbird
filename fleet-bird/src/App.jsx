import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Books from "/src/components/Books.jsx";
import Heade from "/src/components/Header.jsx";
function App() {
  return (
    <div>
      <Heade />
      <Books />
    </div>
  );
}

export default App;
