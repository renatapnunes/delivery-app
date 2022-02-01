import React from 'react';
import PropTypes from 'prop-types';
import dataTestIds from '../utils/dataTestIds';

const ProductsTable = ({ products, removeItem, totalPrice }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover</th>
        </tr>
        {
          products.map(({ id, name, price, quantity }, index) => (
            <tr key={ index }>
              <td
                data-testid={ `${dataTestIds[22]}${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `${dataTestIds[23]}${index}` }
              >
                {name}

              </td>
              <td data-testid={ `${dataTestIds[24]}${index}` }>
                {quantity}

              </td>
              <td data-testid={ `${dataTestIds[25]}${index}` }>
                {(parseFloat(price).toFixed(2)).replace('.', ',')}
              </td>
              <td data-testid={ `${dataTestIds[26]}${index}` }>
                R$
                {(parseFloat(quantity * price).toFixed(2).replace('.', ','))}
              </td>
              <td data-testid={ `${dataTestIds[27]}${index}` }>
                <button type="button" onClick={ () => removeItem(id) }>
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <span data-testid={ dataTestIds[28] }>
      Total:
      {' '}
      {
        (parseFloat(totalPrice).toFixed(2)).replace('.', ',')
      }
    </span>
  </div>
);

export default ProductsTable;

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
