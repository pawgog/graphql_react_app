import React from 'react';
import avatar from '../../images/avatar.png'
import '../../styles/userDetails.scss';

const UserDetails = props => {
  const { ...data } = props;

  return (
    <div className="user-detail__container">
      <img src={ avatar } alt="avatar" className="user-detail__photo" />
      <div className="user-detail__content">
        <div className="user-detail__content__name">{data.name} ({data.age})</div>
        <div className="user-detail__content__address"> 
          <span>{data.city}</span>
          <span>{data.country}</span>
        </div>
      </div>
      <a href={data.website}>Details</a>
    </div>
  );
};

export default UserDetails;