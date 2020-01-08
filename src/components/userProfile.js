import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import UsersProfileStructure from './userProfileStructure';
import '../styles/usersProfile.scss';

const UsersProfile = () => (
  <Query
    query={gql`
      {
        profileInfos (size: 4) {
          id
          name
          age
          city
          country
          website
          }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error </p>;
      return (
        <div className="users-profile">
          {
            data.profileInfos.map(item => (
              <div key={item.id} className="user-profile">
                <UsersProfileStructure {...item} />
              </div>
            ))}
        </div>
      )
    }}
  </Query>
)

export default UsersProfile