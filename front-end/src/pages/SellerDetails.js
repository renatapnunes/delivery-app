import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import http from '../services/api';
import dataTestIds from '../utils/dataTestIds';
import { TableDetails, Header } from '../components';

const SellerOrders = () => {
  const [loading, setLoading] = useState(true);
  const [saleProducts, setSaleProducts] = useState({});
  const { saleDate, status, totalPrice } = saleProducts;

  const date = moment(Date.parse(saleDate)).format('DD/MM/YYYY');

  const orderStatus = {
    prepOrder: 'PREPARAR PEDIDO',
    outForDelivery: 'SAIU PARA ENTREGA',
  };

  const { prepOrder, outForDelivery } = orderStatus;

  const { id } = useParams();

  const getUserData = () => JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getSales = async () => {
      const { token } = await getUserData();
      const saleProductsList = await http.getSalesById(token, id);
      setSaleProducts(saleProductsList);

      setLoading(false);
    };

    getSales();
  }, []);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <Header />
      <div>
        <div data-testid={ dataTestIds[54] }>{ `Pedido ${id}` }</div>
        <div data-testid={ dataTestIds[56] }>{ date }</div>
        <div data-testid={ dataTestIds[55] }>{ status }</div>
        <button type="button" data-testid={ dataTestIds[57] }>
          { prepOrder }
        </button>
        <button type="button" disabled data-testid={ dataTestIds[58] }>
          { outForDelivery }
        </button>
      </div>
      <div>
        <TableDetails saleProducts={ saleProducts } />
        <div>
          Total: R$
          <span data-testid={ dataTestIds[64] }>{totalPrice.replace('.', ',')}</span>
        </div>
      </div>
    </div>
  );
};

export default SellerOrders;
