import React, { useEffect, useState } from 'react';
import { Card } from '../components';
import api from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <div>
        {
          products.map(({ name, price, url_image: urlImage, id }) => (
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
