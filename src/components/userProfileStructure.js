import React from 'react';
import UserData from './details/userDetails';

const UsersProfileStructure = props => {
  const { ...data } = props;
  return (
    <div className='users-profil-structure'>
      <UserData {...data} />
    </div>
  );
};

export default UsersProfileStructure;