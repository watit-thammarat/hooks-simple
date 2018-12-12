import React from 'react';

import useResources from './useResoures';

const UserList = () => {
  const resources = useResources('users');

  return (
    <ul>
      {resources.map(r => (
        <li key={r.id}>{r.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
