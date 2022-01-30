import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import addProduct from '../redux/actions/producActions';

const testIds = {
  15: 'customer_products__element-card-title-',
  16: 'customer_products__element-card-price-',
  17: 'customer_products__img-card-bg-image-',
  18: 'customer_products__button-card-add-item-',
  19: 'customer_products__button-card-rm-item-',
  20: 'customer_products__input-card-quantity-',
};

const Card = ({ id, thumb, name, price }) => {
  const [inputQuantity, setInputQuantity] = useState(0);
  const [idValue, setIdValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const dispatch = useDispatch();

  const handleButton = (e) => {
    setInputQuantity(inputQuantity + 1);
    setIdValue(id);
    setPriceValue(price);
  };

  useEffect(() => {
    dispatch(addProduct({ id: idValue, quantity: inputQuantity }));
  }, [inputQuantity]);

  return (
    <div>
      <h3
        data-testid={ `${testIds[16]}${id}` }
      >
        {price}
      </h3>
      <img
        style={ { width: '80px' } }
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
          onClick={ (e) => handleButton(e) }
        >
          +
        </button>
        <span
          data-testid={ `${testIds[20]}${id}` }
        >
          0
        </span>
        <input
          value={ inputQuantity }
          onChange={ (e) => setInputQuantity(e.target.value) }
        />
        <button
          type="button"
          data-testid={ `${testIds[19]}${id}` }
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
