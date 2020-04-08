import React from 'react';
import avatar from '../images/avatar.png';

const UserDetails = props => {
  const { ...data } = props;

  return (
    <>
      <img src={avatar} alt="avatar" />
      <div className="user-profile__content">
        <div className="user-profile__name">
          <b>{data.name}</b>
          <br />
          (age: {data.age})
        </div>
        <div className="user-profile__address">
          <p>
            <b>Country: </b>
            {data.country}
          </p>
          <p>
            <b>City: </b>
            {data.city}
          </p>
          <p>
            <b>Phone number: </b>
            <br />
            {data.phone}
          </p>
        </div>
      </div>
      <a href={data.website}>Details</a>
    </>
  );
};

export default UserDetails;
