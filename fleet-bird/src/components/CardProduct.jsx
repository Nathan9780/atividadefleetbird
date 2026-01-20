import React from "react";
import "/src/styles/cardProduto.css";
import "../styles/global.css";

function CardProduct() {
  return (
    <div>
      <div className="container-product">
        <div className="card-product">
          <img src="/src/img/Books/apolo.png" alt="" className="card-image" />
          <h3 className="card-title">Nome</h3>
          <span className="card-price">R$ 19.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img src="/src/img/Books/alice.png" alt="" className="card-image" />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 25.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/campfire.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 3599.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/ClassRoom.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Nome</h3>
          <span className="card-price">R$ 19.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img src="/src/img/Books/Fate.png" alt="" className="card-image" />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 25.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/KonoSuba.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 3599.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/LonerLife.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Nome</h3>
          <span className="card-price">R$ 19.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/StrayDogs.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 25.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/Treemoon.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 3599.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>

        <div className="card-product">
          <img
            src="/src/img/Books/yourName.png"
            alt=""
            className="card-image"
          />
          <h3 className="card-title">Produtos Selecionados</h3>
          <span className="card-price">R$ 3599.99</span>
          <span className="card-frete">R$ 19.99</span>
          <button className="card-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
