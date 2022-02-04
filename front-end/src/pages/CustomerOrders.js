import React, { useEffect, useState } from 'react';

import http from '../services/api';
import { CardOrders, Header } from '../components';
import '../styles/cardOrders.css';

const CustomerOrders = () => {
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState([]);

  const getUserData = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    return user;
  };

  useEffect(() => {
    const getSales = async () => {
      const userData = await getUserData();
      const salesList = await http.getSales(userData);
      setSales(salesList);
      setLoading(false);
    };
    getSales();
  }, []);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div className="content">
      <Header />
      <div className="container-card-order">
        { sales.map((sale) => <CardOrders sale={ sale } key={ sale.id } />) }
      </div>
    </div>
  );
};

export default CustomerOrders;
