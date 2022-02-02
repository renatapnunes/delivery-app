import React from 'react';
import PropTypes from 'prop-types';

import dataTestIds from '../utils/dataTestIds';

const tableColumns = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

const TableDetails = ({ saleProducts }) => {
  const { Products } = saleProducts;

  const fillLine = ({ name, SalesProducts, price }, index) => (
    <tr key={ index }>
      <td data-testid={ `${dataTestIds[41]}${index}` }>{index}</td>
      <td data-testid={ `${dataTestIds[42]}${index}` }>{name}</td>
      <td data-testid={ `${dataTestIds[43]}${index}` }>{SalesProducts.quantity}</td>
      <td data-testid={ `${dataTestIds[44]}${index}` }>{price}</td>
      <td data-testid={ `${dataTestIds[45]}${index}` }>
        R$
        {(parseFloat(SalesProducts.quantity * price).toFixed(2).replace('.', ','))}
      </td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          { tableColumns.map((column, index) => <th key={ index }>{ column }</th>) }
        </tr>
      </thead>
      <tbody>
        { Products.map((product, index) => fillLine(product, index)) }
      </tbody>
    </table>
  );
};

TableDetails.propTypes = {
  saleProducts: PropTypes.shape({
    Products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default TableDetails;
