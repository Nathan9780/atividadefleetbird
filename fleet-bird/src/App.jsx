import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
    <BrowserRouter>
      <div>
        <header>
          <Header />
        </header>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/livros" element={<Books />} />
        <Route path="/eletrodomesticos" element={<EletroDomesticos />} />
        <Route path="/figures" element={<Figure />} />
        <Route path="/prevenda" element={<PreOrder />} />
        <Route path="/promocoes" element={<Sales />} />
        <Route path="/decoracoes" element={<Decoration />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
