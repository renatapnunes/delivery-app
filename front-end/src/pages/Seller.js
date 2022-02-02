import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import http from '../services/api';

function Seller() {
  const [sales, setSales] = useState('');
  const [loading, setLoading] = useState(true);

  const loadingSales = async () => {
    const salesAPI = await http.getSales();
    setSales(salesAPI);
    setLoading(false);
  };
  useEffect(() => { loadingSales(); }, []);

  if (loading) return <h1>Carregando...</h1>;
  return (
    <div>
      <Header />
      <div>
        <ul>
          {sales.map((sale, i) => (
            <li key={ i } date-testid={ `seller_orders__element-order-date-${sale.id}` }>
              <p date-testid={ `seller_orders__element-delivery-status-${sale.id}` }>
                { sale.status }
              </p>
              <p date-testid={ `seller_orders__element-order-date-${sale.id}` }>
                { sale.saleDate }
              </p>
              <p date-testid={ `seller_orders__element-card-price-${sale.id}` }>
                { sale.totalPrice }
              </p>
              <p date-testid={ `seller_orders__element-card-address-${sale.id}` }>
                { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Seller;

// Vindo da API endpoint /sales
// deliveryAddress: "rua aaa"
// deliveryNumber: "444"
// id: 1
// saleDate: "2022-01-18T22:07:37.000Z"
// sellerId: 1
// seller_id: 1
// status: "entregue"
// totalPrice: "400.00"
// userId: 1
// .
