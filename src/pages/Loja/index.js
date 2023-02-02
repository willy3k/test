import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

import { Container } from '../../style/GlobalStyles';

import { PoductsContaine, ProfilePicture, Footer } from './styled';
import axios from '../../services/axios';

// eslint-disable-next-line react/prop-types
export default function Loja({ addItemCard }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getDate() {
      const response = await axios.get('');
      // console.log(response.data.product);
      setProducts(response.data.products);
    }

    getDate();
  }, []);

  // quando clicar em compra ele ira add no carrinho
  // function addItem() {
  //   const addProduct = products;
  //   const name = addProduct.map((addProducts) => addProducts.name);
  //   console.log(name);
  // }

  return (
    <>
      <Container>
        <PoductsContaine>
          {products.map((product) => (
            <div className="card-products" key={String(product.id)}>
              <ProfilePicture>
                {get(product, 'photo', false) ? (
                  <img src={product.photo} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <div className="nama-price">
                <div className="name">
                  <span>{product.name}</span>
                </div>
                <div className="price">
                  <span>R${product.price}</span>
                </div>
              </div>

              <div className="descriçao">
                <div className="brand">
                  <span>{product.brand}</span>
                </div>
                <div className="description">
                  <span>{product.description}</span>
                </div>
              </div>

              <button
                className="comprar"
                type="submit"
                // pegando os nomes do items da api
                // eslint-disable-next-line no-restricted-globals
                onClick={() =>
                  addItemCard(product.photo, product.name, product.price)
                }
              >
                <FiShoppingBag /> COMPRAR
              </button>
            </div>
          ))}
        </PoductsContaine>
      </Container>

      <Footer>
        <footer>MKS sistimas @ Todos os direitos reservados</footer>
      </Footer>
    </>
  );
}
