import styled from 'styled-components';

export const CenterAmount = styled.div`
  z-index: 10;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  .add-amount {
    padding: 0;
    font-size: 15px;

    width: 10px;
    height: 90%;
    margin: 0 5px;
    color: black;
  }
  .value-amout {
    width: 25px;
    height: 18px;
    color: black;
    font-size: 17px;
  }
  .less-amount {
    padding: 0;
    font-size: 18px;
    height: 100%;

    width: 10px;
    margin: 0 5px;

    color: black;
  }

  @media (max-width: 1000px) {
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;

    .value-amout {
      width: 27px;
      height: 28px;
      color: black;
      font-size: 17px;
    }
  }
`;
