// frontend/src/components/ClientStatusDashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../features/client/clientSlice';

const ClientStatusDashboard = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.client);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <div>
      <h2>Client Status</h2>
      {status === 'loading' ? 'Loading...' : (
        <ul>
          {list.map(client => (
            <li key={client.id}>
              {client.name} - {client.status} (Last Active: {client.lastActive})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientStatusDashboard;