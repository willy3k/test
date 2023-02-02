import styled from 'styled-components';
import {
  primaryDarkColor,
  primaryColor,
  primaryColorBackgroud,
  primaryColorfooter,
} from '../../config/colors';

export const PoductsContaine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .card-products {
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 220px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
  }
  div {
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nama-price {
    width: 100%;
    margin-top: 14px;
    margin: 0 5px;
    display: flex;
    align-content: center;
    justify-content: space-between;

    .name {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 19px;
    }

    .price {
      margin-left: 10px;
      border-radius: 5px;
      padding: 4px;
      color: ${primaryColor};
      background: ${primaryDarkColor};
    }
  }
  .descriçao {
    margin-top: 9px;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 12px;
  }

  .comprar {
    margin-top: 14px;
    margin-bottom: 0;
    background: ${primaryColorBackgroud};
    width: 100%;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .card-products {
      margin: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 250px;
      background: #ffffff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
      border-radius: 8px;
    }
  }
`;
export const ProfilePicture = styled.div`
  img {
    margin-top: 15px;
    width: 130px;
    height: 120px;
    border-radius: 15%;
  }
`;
export const Footer = styled.footer`
  background: ${primaryColorfooter};

  footer {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 15px;

    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    footer {
      font-size: 19px;
    }
  }
`;
