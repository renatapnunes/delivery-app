import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Header } from '../components';
import constant from '../utils/constants';
import http from '../services/api';
import dataTestIds from '../utils/dataTestIds';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const store = useSelector((state) => state.products);
  const navigate = useNavigate();
  const { current: { token } } = useRef(JSON.parse(localStorage.getItem('user')) || '');

  const { products: prods } = store;
  const total = prods.reduce((acc, elem) => acc + elem.totalValue, 0);

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await http.getProducts({ token });
      if (result === constant.UNAUTHORIZED || !token) return navigate('/login');
      setProducts(result);
      setLoading(false);
    };

    getAllProducts();
  }, [navigate, token]);

  if (loading) return <h1>Carregando</h1>;

  return (
    <div className="content">
      <Header />
      <button
        className="price-button"
        type="button"
        disabled={ total <= 0 }
        data-testid={ dataTestIds[79] }
        onClick={ () => navigate('/customer/checkout') }
      >
        <h3
          className="total-price-output"
          data-testid={ dataTestIds[21] }
        >
          {
            `R$ ${(parseFloat(total).toFixed(2)).replace('.', ',')}`
          }
        </h3>
      </button>
      <div className="products-cards-container">
        {
          products.map(({ name, price, urlImage, id, quantity }) => (
            <Card
              thumb={ urlImage }
              name={ name }
              price={ price }
              key={ id }
              id={ id }
              quantity={ quantity }
            />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
