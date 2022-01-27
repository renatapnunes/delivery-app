import React from 'react';
import PropTypes from 'prop-types';

const testIds = {
  15: 'customer_products__element-card-title-',
  16: 'customer_products__element-card-price-',
  17: 'customer_products__img-card-bg-image-',
  18: 'customer_products__button-card-add-item-',
  19: 'customer_products__button-card-rm-item-',
  20: 'customer_products__input-card-quantity-',
};

const Card = ({ id, thumb, name, price }) => (
  <div>
    <h3
      data-testid={ `${testIds[16]}${id}` }
    >
      {price}
    </h3>
    <img
      data-testid={ `${testIds[17]}${id}` }
      src={ thumb }
      alt={ `Uma garrafa de ${name}` }
    />
    <span
      data-testid={ `${testIds[15]}${id}` }
    >
      { name }
    </span>
    <div>
      <button
        type="button"
        data-testid={ `${testIds[18]}${id}` }
      >
        +
      </button>
      <span
        data-testid={ `${testIds[20]}${id}` }
      >
        0
      </span>
      <button
        type="button"
        data-testid={ `${testIds[19]}${id}` }
      >
        -
      </button>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
