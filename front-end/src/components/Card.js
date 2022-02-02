import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/actions/productActions';
import testIds from '../utils/dataTestIds';

const Card = ({ id, thumb, name, price }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  const { products } = store;
  const [inputValue, setInputValue] = useState(0);
  const [suit, setSuit] = useState(false);
  const [cardInfo, setCardInfo] = useState(
    {
      name,
      id,
      quantity: 0,
      totalValue: '',
      price: parseFloat(price),
    },
  );

  const inputControl = ({ value }) => {
    setSuit(true);
    setInputValue(parseInt(value, 10));
  };

  const handleChange = (btnName) => {
    if (btnName === 'addButton') {
      setSuit(true);
      return setInputValue(inputValue + 1);
    }

    if (inputValue > 0) setInputValue(inputValue - 1);
  };

  useEffect(() => {
    const attQty = products.find(({ id: prodStoreId }) => prodStoreId === id);
    if (attQty) setInputValue(attQty.quantity);
  }, []);

  useEffect(() => {
    if (suit) {
      const totalValue = parseFloat((inputValue * cardInfo.price).toFixed(2));
      const quantity = inputValue;

      setCardInfo({ ...cardInfo, quantity, totalValue });
    }
  }, [inputValue]);

  useEffect(() => {
    if (suit) {
      dispatch(updateProduct({ ...cardInfo }));
    }
  }, [cardInfo]);

  return (
    <div
      className="product-card"
    >
      <h3
        data-testid={ `${testIds[16]}${id}` }
      >
        { `R$ ${price.replace('.', ',')}` }
      </h3>
      <div className="image-container">
        <img
          data-testid={ `${testIds[17]}${id}` }
          src={ thumb }
          alt={ `Uma garrafa de ${name}` }
          className="thumb"
        />
      </div>
      <span
        data-testid={ `${testIds[15]}${id}` }
      >
        { name }
      </span>
      <div className="buttons">
        <button
          value={ price }
          type="button"
          onClick={ (e) => handleChange(e.target.name) }
          id={ id }
          data-testid={ `${testIds[18]}${id}` }
          name="addButton"
        >
          +
        </button>
        <input
          name="inputQuantity"
          id={ id }
          value={ inputValue }
          onChange={ (e) => setInputValue(e.target.value) }
          onKeyPress={ (e) => inputControl(e.target) }
          type="number"
          data-testid={ `${testIds[20]}${id}` }
        />
        <button
          id={ id }
          value={ price }
          type="button"
          onClick={ (e) => handleChange(e.target.name) }
          data-testid={ `${testIds[19]}${id}` }
          name="subButton"
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
