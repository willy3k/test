import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Amount({ valueAmount, calcule, calculeLess }) {
  const [setValue] = useState(1);

  return (
    <>
      {/* botao de incremneto */}
      <button className="add-amount" type="button" onClick={() => calcule()}>
        +
      </button>
      {/* input da quantidade */}
      <input
        className="value-amout"
        type="text"
        value={valueAmount}
        min="1"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      {/* botao de decremento */}
      <button
        className="less-amount"
        type="button"
        disabled={valueAmount <= 1 || Number.isNaN(valueAmount)}
        onClick={() => calculeLess()}
      >
        -
      </button>
    </>
  );
}

Amount.propTypes = {
  valueAmount: PropTypes.number.isRequired,
  calcule: PropTypes.func.isRequired,
  calculeLess: PropTypes.func.isRequired,
};
