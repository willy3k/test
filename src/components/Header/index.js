/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
// import { CgMathPlus, CgMathMinus } from 'react-icons/cg';

import Card from '../Card/index';

import { Nav } from './styled';
import Loja from '../../pages/Loja';

export default function Header() {
  const [cart, setCart] = useState([]);

  // console.log('carrinho de comprar', cart);

  // const fillStorage = () => {
  //   try {
  //     if (cart) return;

  //     const carts = JSON.parse(localStorage.getItem('cart'));
  //     setCart(carts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  function addItemCard(photo, name, price) {
    const unity = 1;
    const itemObject = { photo, name, price, unity };
    // (espalhando),(adicionado)
    setCart([...cart, itemObject]);
    // fillStorage();
  }

  // function remove(itemId) {
  //   console.log(itemId);
  //   // const filteredCart = cart.filter(cartITem => cart.indexOf(cartITem) !== itemIndex)
  // }

  const navRef = useRef();
  const showNavCarringo = () => {
    navRef.current.classList.toggle('response_carrinho');
  };

  return (
    <>
      <Nav>
        <header>
          <div className="log">
            <div className="log-h1">
              <h1>MKS</h1>
            </div>
            <div className="sistemas">Sistemas</div>
          </div>
          <nav ref={navRef}>
            <Card
              showNavCarringo={showNavCarringo}
              cart={cart}
              setCart={setCart}
            />
            :
          </nav>

          <button
            className="nav-btn carrinho"
            type="submit"
            onClick={showNavCarringo}
          >
            {' '}
            <FaShoppingCart color="black" size={20} />
            <span color="black">{cart ? cart.length : 0}</span>
          </button>
        </header>
      </Nav>
      <Loja addItemCard={addItemCard} />
    </>
  );
}
