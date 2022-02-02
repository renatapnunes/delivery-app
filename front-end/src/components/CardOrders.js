import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import testId from '../utils/dataTestIds';

const SELLER_URL = '/seller/orders';

const CardOrders = ({ sale }) => {
  const { id, status, saleDate, totalPrice, deliveryNumber, deliveryAddress } = sale;
  const location = useLocation();

  const date = moment(Date.parse(saleDate)).format('DD/MM/YYYY');
  const address = `${deliveryAddress}, ${deliveryNumber}`;

  const navigate = useNavigate();

  if (location.pathname === SELLER_URL) {
    return (
      <button type="button" onClick={ () => navigate(`/seller/orders/${id}`) }>
        <div>
          Pedido
          <span data-testid={ `${testId[48]}${id}` }>{ id }</span>
        </div>
        <div data-testid={ `${testId[49]}${id}` }>{ status }</div>
        <div data-testid={ `${testId[50]}${id}` }>{ date }</div>
        <div data-testid={ `${testId[52]}${id}` }>{ address }</div>
        <div data-testid={ `${testId[51]}${id}` }>{ totalPrice.replace('.', ',') }</div>
      </button>
    );
  }

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
    deliveryNumber: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOrders;
