import React, { useEffect, useState } from 'react';

import http from '../services/api';
import { CardOrders, Header } from '../components';

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
    <>
      <Header />
      <div>
        { sales.map((sale) => <CardOrders sale={ sale } key={ sale.id } />) }
      </div>
    </>
  );
};

export default CustomerOrders;