import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header.jsx";
import Books from "./components/Books.jsx";
import Container from "./components/container.jsx";
import Decoration from "./components/decoration.jsx";
import EletroDomesticos from "./components/EletroDomesticos.jsx";
import Figure from "./components/Figure.jsx";
import PreOrder from "./components/PreOrder.jsx";
import Sales from "./components/sales.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Books />
        <Container />
        <Decoration />
        <EletroDomesticos />
        <Figure />
        <PreOrder />
        <Sales />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
