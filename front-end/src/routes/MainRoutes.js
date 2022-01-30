import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as pages from '../pages';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <pages.Login /> } />
      <Route path="/register" element={ <pages.Register /> } />
      <Route path="/customer/products" element={ <pages.Home /> } />
      <Route path="/admin/manage" element={ <pages.Admin /> } />
      <Route path="/seller/orders" element={ <pages.Seller /> } />
    </Routes>
  );
}

export default MainRoutes;
