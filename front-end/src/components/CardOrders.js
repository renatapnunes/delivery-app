import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import testId from '../utils/dataTestIds';

const CardOrders = ({ sale }) => {
  const { id, status, saleDate, totalPrice } = sale;

  const date = moment(Date.parse(saleDate)).format('DD/MM/YYYY');

  const navigate = useNavigate();

  return (
    <button type="button" onClick={ () => navigate(`/customer/orders/${id}`) }>
      <div>
        Pedido
        <span data-testid={ `${testId[33]}${id}` }>{ id }</span>
      </div>
      <div data-testid={ `${testId[34]}${id}` }>{ status }</div>
      <div data-testid={ `${testId[35]}${id}` }>{ date }</div>
      <div data-testid={ `${testId[36]}${id}` }>{ totalPrice.replace('.', ',') }</div>
    </button>
  );
};

CardOrders.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOrders;
