import "./../styles/header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar-content">
          <p>🚚 Frete grátis para compras acima de R$ 100</p>
          <p>⭐ 4.8/5 Avaliação dos clientes</p>
        </div>
      </div>

      <div className="main-area">
        <div className="logo-area">
          <h1 className="logo">Fleet Bird</h1>
          <p className="slogan">Sua loja internacional</p>
        </div>

        <nav className="menu">
          <Link className="menu-link" to="/inicio">
            Home
          </Link>
          <Link className="menu-link" to="/promocoes">
            Sales
          </Link>
          <Link className="menu-link" to="/prevenda">
            PreOrder
          </Link>
          <Link className="menu-link" to="/livros">
            Books
          </Link>
          <Link className="menu-link" to="/decoracoes">
            Decorations
          </Link>
          <Link className="menu-link" to="/figures">
            Figures
          </Link>
          <Link className="menu-link" to="/eletrodomesticos">
            Eletrodomesticos
          </Link>
          <Link className="menu-link" to="/contato">
            Contact{" "}
          </Link>
        </nav>

        <div className="user-icons">
          <button className="icon-btn">
            <span className="icon">🔍</span>
          </button>
          <button className="icon-btn">
            <span className="icon">❤️</span>
          </button>
          <button className="icon-btn cart-btn">
            <span className="icon">🛒</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
