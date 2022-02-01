import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsTable, FinalizeOrder } from '../components';
import { removeProduct } from '../redux/actions/productActions';
import http from '../services/api';

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);

  const store = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    const newArr = products.filter((item) => item.id !== id);
    setProducts(newArr);
    dispatch(removeProduct(newArr));
  };

  useEffect(() => {
    setProducts(store.products);

    const getAllSellers = async () => {
      const allSellers = await http.getAllSellers();
      setSellers(allSellers);
    };

    getAllSellers();
  }, []);

  const totalPrice = Number(products.reduce(
    (prev, cur) => prev + (cur.price * cur.quantity), 0,
  ).toFixed(2));

  if (!sellers.length || !totalPrice) {
    return (<span>Loading...</span>);
  }

  return (
    <div>
      <ProductsTable
        products={ products }
        removeItem={ removeItem }
        totalPrice={ totalPrice }
      />
      <FinalizeOrder
        products={ products }
        sellers={ sellers }
        total={ totalPrice }
      />
    </div>
  );
};

export default Checkout;
