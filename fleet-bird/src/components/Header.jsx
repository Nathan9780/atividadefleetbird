import "./../styles/header.css";

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
          <a href="#home" className="menu-link">Início</a>
          <a href="#livros" className="menu-link">Promoções</a>
          <a href="#mangas" className="menu-link">Pré-venda</a>
          <a href="#hqs" className="menu-link">Livros</a>
          <a href="#novidades" className="menu-link">Decorações</a>
          <a href="#contato" className="menu-link">Figures</a>
          <a href="#contato" className="menu-link">Eletrodomésticos</a>
          <a href="#contato" className="menu-link">Contato</a>
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