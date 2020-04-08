import gql from 'graphql-tag';

const getProfileInfo = gql`
  {
    profileInfos(size: 4) {
      id
      name
      age
      city
      country
      phone
      website
    }
  }
`;

export { getProfileInfo };
