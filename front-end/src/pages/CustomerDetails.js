import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import http from '../services/api';
import dataTestIds from '../utils/dataTestIds';
import { TableDetails, Header } from '../components';

import '../styles/detailsPage.css';

const CustomerOrders = () => {
  const [loading, setLoading] = useState(true);
  const [saleProducts, setSaleProducts] = useState({});
  const { saleDate, status, totalPrice } = saleProducts;
  const [seller, setSeller] = useState('');

  const date = moment(Date.parse(saleDate)).format('DD/MM/YYYY');
  const statusColor = {
    Pendente: '#f9bd59',
    Preparando: '#f45757',
    Entregue: '#0aa050',
  };

  const { id } = useParams();

  const getUserData = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    return user;
  };

  useEffect(() => {
    const getSales = async () => {
      const { token } = await getUserData();
      const saleProductsList = await http.getSalesById(token, id);
      setSaleProducts(saleProductsList);

      const sellersList = await http.getAllSellers();
      setSeller(sellersList[0].name);

      setLoading(false);
    };

    getSales();
  }, []);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <Header />
      <div className="container-seller-customer-details">
        <div className="order-details">
          <div
            className="details-id"
            data-testid={ dataTestIds[37] }
          >
            { `Pedido ${id}` }
          </div>
          <div
            className="seller-customer"
            data-testid={ dataTestIds[38] }
          >
            { `P. Vend ${seller}` }
          </div>
          <div className="details-date" data-testid={ dataTestIds[39] }>{ date }</div>
          <div
            className="details-status"
            style={ { backgroundColor:
              status === 'Em Trânsito' ? '#ac203d' : statusColor[status] } }
            data-testid={ dataTestIds[40] }
          >
            { status }
          </div>
          <button
            className="change-status"
            type="button"
            disabled
            data-testid={ dataTestIds[47] }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        <TableDetails saleProducts={ saleProducts } />
        <div className="details-total-price">
          <span>Total: R$</span>
          <span data-testid={ dataTestIds[45] }>{totalPrice.replace('.', ',')}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;

// --------->> RETORNO DA API (GET /sales/:id) <<-------------
// {
//   "id": 2,
//   "userId": 3,
//   "sellerId": 1,
//   "totalPrice": "100.90",
//   "deliveryAddress": "Av teste dos testes",
//   "deliveryNumber": "315",
//   "saleDate": "2022-02-01T20:20:59.000Z",
//   "status": "ENTREGUE",
//   "salesProducts": [
//     {
//       "quantity": 3,
//       "product_id": 2,
//       "sale_id": 2
//     },
//     {
//       "quantity": 1,
//       "product_id": 6,
//       "sale_id": 2
//     },
//     {
//       "quantity": 12,
//       "product_id": 7,
//       "sale_id": 2
//     }
//   ],
//   "Products": [
//     {
//       "id": 2,
//       "name": "Heineken 600ml",
//       "price": "7.50",
//       "urlImage": "http://localhost:3001/images/heineken_600ml.jpg",
//       "SalesProducts": {
//         "quantity": 3,
//         "product_id": 2,
//         "sale_id": 2
//       }
//     },
//     {
//       "id": 6,
//       "name": "Skol Beats Senses 313ml",
//       "price": "4.49",
//       "urlImage": "http://localhost:3001/images/skol_beats_senses_313ml.jpg",
//       "SalesProducts": {
//         "quantity": 1,
//         "product_id": 6,
//         "sale_id": 2
//       }
//     },
//     {
//       "id": 7,
//       "name": "Becks 330ml",
//       "price": "4.99",
//       "urlImage": "http://localhost:3001/images/becks_330ml.jpg",
//       "SalesProducts": {
//         "quantity": 12,
//         "product_id": 7,
//         "sale_id": 2
//       }
//     }
//   ]
// }
