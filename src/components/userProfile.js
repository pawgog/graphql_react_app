import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import UserDetails from './userDetails';
import { getProfileInfo } from '../mocks/queries';

const UsersProfile = () => {
  const { loading, error, data } = useQuery(getProfileInfo);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  return (
    <div className="user-list">
      {data.profileInfos.map(item => (
        <div key={item.id} className="user-profile">
          <UserDetails {...item} />
        </div>
      ))}
    </div>
  );
};

export default UsersProfile;
