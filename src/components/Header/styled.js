import styled from 'styled-components';
import { primaryColorBackgroud, primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 20px 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${primaryColorBackgroud};

  .log {
    color: ${primaryColor};
    display: flex;
  }
  div .log-h1 {
    font-size: 35px;
    font-weight: 600;
    font-style: normal;
  }

  .sistemas {
    font-family: 'Montserrat';
    font-style: normal;
    padding-bottom: 10px;
    padding-left: 7px;
    display: flex;
    align-items: flex-end;
    font-weight: 300;
    font-size: 23px;
  }

  button {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ;
    width: 90px;
    height: 45px;
    border-radius: 8px;

    span {
      width: 13px;
      height: 22px;

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: black;
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .nav-close-btn {
    padding: 5px;
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    outline: none;
    color: white;
    visibility: hidden;
    opacity: ;
  }

  header .nav-close-btn {
    visibility: visible;
    opacity: 1;
  }
  header nav {
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    transition: 1s;
    transform: translateX(100vh);
  }
  header .response_carrinho {
    transform: none;
  }
  nav .title {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    color: white;

    position: absolute;
    top: 2rem;
    right: 0;

    h2 {
      margin-left: 20px;
      margin-right: 50px;
      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
    }
  }
  nav .nav-close-btn {
    margin: auto;
    width: 33px;
    height: 33px;
    color: white;
    background: black;
    border-radius: 50%;
  }

  // pordutos salvos
  .product_quardado {
    width: 90%;
    height: 60%;
    overflow-y: scroll;
    border-radius: 8px;
  }
  .product_quardado::-webkit-scrollbar {
    color: transparent;
    background: transparent;
    border-radius: 20px;
  }
  .produc {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 98%;
    height: 95px;
    margin-top: 5px;
    margin-bottom: 28px;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
  .remover-product {
    color: white;
    background: black;
    top: -15px;
    right: -5px;
    position: absolute;
    width: 28px;
    height: 28px;
    padding: 5px;
    border-radius: 50%;
    font-size: 20px;
  }
  .fot-name {
    width: 158px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .imgs {
    margin: 0 8px 0 0;
    width: 59px;
    height: 60px;
  }
  img {
    width: 100%;
  }
  .name {
    width: 113px;
    height: 33;
  }
  .produc h2 {
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
  }
  // preço
  .produc span {
    margin-left: 3px;
    margin-bottom: -7px;
    padding: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
  }

  // QTD e price
  .qtd-price {
    display: flex;
    align-items: center;
  }

  .qtd-name {
    display: flex;
    flex-direction: column;
    margin-bottom: 13px;

    span {
      font-size: 8px;
    }
  }

  // total
  .total {
    color: ${primaryColor};
    display: flex;
    align-items: center;
    padding: 0 47px;
    justify-content: space-between;
    width: 100%;
    font-weight: 900;
    font-size: 18px;
    span {
      font-size: 23px;
    }
  }
  .finalisa-compra {
    color: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: black;
    h2 {
      color: white;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
    }
  }

  @media (max-width: 600px) {
    /* left: 0px;
    top: 0px;
    width: 100%;
    padding: 20px 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${primaryColorBackgroud};
    div .log-h1 {
      font-size: 32px;
      font-weight: 600;
      font-style: normal;
    }
    .sistemas {
      font-family: 'Montserrat';
      font-style: normal;
      padding-bottom: 10px;
      padding-left: 7px;
      display: flex;
      align-items: flex-end;
      font-weight: 300;
      font-size: 16px;
    }
    button {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: ;
      width: 90px;
      height: 40px;
      border-radius: 15px;

      span {
        width: 13px;
        height: 22px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: black;
      }
    }
    header {
      height: 48px;
    }*/
    header nav {
      top: 0;
      right: 0;
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background: #0f52ba;
      box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
      transition: 1s;
      transform: translateX(100vh);
    }
    nav .title {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      color: white;
      h2 {
        margin-left: 20px;
        margin-right: 50px;
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
      }
    }

    nav .nav-close-btn {
      margin: auto;
      width: 33px;
      height: 33px;
      color: ${primaryColorBackgroud};
      background: black;
      border-radius: 50%;
    }

    .product_quardado {
      margin-top: 55px;
      width: 90%;
      height: 70%;
    }
    .produc {
      margin: 12px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      height: 220px;
      background: #ffffff;
      box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }
    .fot-name {
      padding: auto;
      width: 158px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .imgs {
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
    }
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      width: 211px;
      height: 33;
    }
    .produc h2 {
      font-weight: 400;
      font-size: 20px;
      line-height: 17px;
    }
    // QTD e price
    .qtd-price {
      display: flex;
      align-items: center;
    }
    .qtd-price .name-QTD {
      margin-left: 3px;
      margin-bottom: -7px;
      padding: 5px;
      font-weight: 700;
      font-size: 11px;
      line-height: 17px;
    }
    .produc .price {
      padding: 7px;
      color: ${primaryColor};
      margin-left: 30px;
      background: #373737;
      border-radius: 5px;
    }
    // botao remover producto
    .remover-product {
      top: 0;
      right: 0;
      color: black;
      background: white;

      font-size: 30px;
    }
    // QTD e price
    .qtd-price {
      display: flex;
      align-items: center;
    }

    .qtd-name {
      display: flex;
      flex-direction: column;
      margin-bottom: 13px;

      span {
        font-size: 8px;
      }
    }

    // total
    .total {
      bottom: 0;
      color: ${primaryColor};
      display: flex;
      align-items: center;
      padding: 0 47px;
      justify-content: space-between;
      width: 100%;
      font-weight: 900;
      font-size: 18px;
      span {
        font-size: 23px;
      }
    }
    .finalisa-compra {
      color: ${primaryColor};
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 45px;
      background: black;
      h2 {
        color: white;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 15px;
      }
    }
  }
`;
