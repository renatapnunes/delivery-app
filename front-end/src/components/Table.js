import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import dataTestIds from '../utils/dataTestIds';

function Table({ users, func }) {
  const { current: { email: emailLocalStorage } } = useRef(
    JSON.parse(localStorage.getItem('user')) || '',
  );
  const [usersFiltered, setUsersFiltered] = useState([]);

  useEffect(() => {
    setUsersFiltered(users.filter((user) => user.email !== emailLocalStorage));
  }, [users]);

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        { usersFiltered.map(({ id, name, email, role }, i) => (
          <tr key={ i }>
            <td data-testid={ `${dataTestIds[70]}${id}` }>{ id }</td>
            <td data-testid={ `${dataTestIds[71]}${id}` }>{ name }</td>
            <td data-testid={ `${dataTestIds[72]}${id}` }>{ email }</td>
            <td data-testid={ `${dataTestIds[73]}${id}` }>{ role }</td>
            <td>
              <button
                type="button"
                data-testid={ `${dataTestIds[74]}${id}` }
                onClick={ () => func(id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })).isRequired,
  func: PropTypes.func.isRequired,
};
