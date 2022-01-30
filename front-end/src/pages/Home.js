import React, { useEffect, useState, useRef } from 'react';
import { Card } from '../components';
import http from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [localInfo, setLocalInfo] = useState('');
  const { current: { token } } = useRef(JSON.parse(localStorage.getItem('user') || ''));

  const getAllProducts = async () => {
    setLoading(true);
    setProducts(await http.getAllProducts());
    setLoading(false);
  };

  useEffect(() => { getAllProducts(); }, []);

  if (loading) return <p>Carregando...</p>;
  return (
    <div>
      <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
        {
          products.map(({ name, price, urlImage, id }) => (
            <Card
              thumb={ urlImage }
              name={ name }
              // onClick={ handleCategoryClick }
              price={ price }
              key={ id }
              id={ id }
            />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
