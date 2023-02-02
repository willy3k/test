import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import get from 'lodash';
import { FaTimes, FaUserCircle } from 'react-icons/fa';

import Amount from '../Amount/index';
import { CenterAmount } from './styled';

export default function Card({ setCart, showNavCarringo, cart }) {
  const [callStorage, setCallStorage] = useState(false);

  useEffect(() => {
    try {
      if (cart.length === 0) return;

      const carts = JSON.parse(localStorage.getItem('cart'));
      setCart(carts);
      setCallStorage(false);
    } catch (error) {
      console.log(error);
    }
  }, [callStorage]);

  // const total = () => {};

  const calculeMore = (ind, value) => {
    const allCart = cart;
    let totalValue = value;
    // let totalPrice = price;
    allCart[ind].unity = Number((totalValue -= 1));
    // allCart[ind].price = Number((totalPrice -= price));
    console.log('menos', allCart);
    localStorage.setItem('cart', JSON.stringify(allCart));
    setCallStorage(true);
    setCart(allCart);
  };
  //
  const calculeLess = (ind, value) => {
    const allCart = cart;
    let totalValue = value;
    allCart[ind].unity = Number((totalValue += 1));
    // allCart[ind].price = Number((totalValue *= price));
    console.log('mais', allCart);
    localStorage.setItem('cart', JSON.stringify(allCart));
    setCallStorage(true);
    setCart(allCart);
  };

  // cart.map((item, cart) => {});
  /// A quantidade so atualizar quando eu atualizo o cart, quando eu adiciono outro
  /// ent quem eu preciso pegar e o cart, no useEffect...
  /// so preciso descobri como ?

  return (
    <>
      <div className="title">
        <h2>Carrinho de compras</h2>
        <button
          className="nav-btn nav-close-btn"
          type="submit"
          onClick={showNavCarringo}
        >
          <FaTimes size={20} />
        </button>
      </div>

      <div className="product_quardado">
        {cart &&
          cart.map((item, index) => (
            <div className="produc">
              {' '}
              <div className="fot-name">
                {/* pegando as fotos */}
                <div className="imgs">
                  {get(item, 'photo', false) ? (
                    <img src={item.photo} alt="" />
                  ) : (
                    <FaUserCircle size={36} />
                  )}
                </div>
                {/* name */}
                <div className="name">
                  <h2>{item.name}</h2>
                </div>
              </div>
              {/* quantidade e o preço */}
              <div className="qtd-price">
                {/* <span>Qtd:</span> */}
                <div className="qtd-name">
                  <span className="name-QTD">QTD:</span>
                  <CenterAmount>
                    <Amount
                      valueAmount={item.unity}
                      calculeLess={() =>
                        calculeMore(index, item.unity, item.price)
                      }
                      calcule={() => calculeLess(index, item.unity, item.price)}
                    />
                  </CenterAmount>
                </div>

                {/* preço do produtor */}
                <span className="price">R${item.price}</span>
              </div>{' '}
              {/* Botao de remover produtos */}
              <button type="button" className="remover-product">
                <FaTimes className="icons-X" />
              </button>
            </div>
          ))}
      </div>

      <div className="total">
        <h2>Total:</h2>
        <span>R$:10.000</span>
      </div>
      <div className="finalisa-compra">
        <h2>Finalisar Compra</h2>
      </div>
    </>
  );
}

// Card.defaultProps = {
//   cart: false,
// };

Card.propTypes = {
  showNavCarringo: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cart: PropTypes.array.isRequired,
};
