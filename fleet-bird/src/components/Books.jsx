import React from "react";
import CardProduct from "./CardProduct";
function Books() {
  return (
    <section>
      <h3>BOOKS</h3>
      <p>
        Conheça novas historias por meio da leitura, podendo ser mnagá,
        quadrinho, livro e light novel
      </p>

      <section className="container-card-product">
        <CardProduct />
      </section>
    </section>
  );
}

export default Books;
