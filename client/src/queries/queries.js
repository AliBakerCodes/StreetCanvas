import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query allUsers {
  users {
    _id
    username
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($username: String!) {
    user(username: $username) {
      _id
      username
      pins
    }
  }
`;


export const QUERY_SINGLE_USER_BY_EMAIL = gql`
query UserEmail($email: String!) {
  userEmail(email: $email) {
    _id
    username
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      pins
    }
  }
`;

export const QUERY_PIN_BY_USER = gql`
  query pinByUser($username: String!) {
    pinsUser(username: $username) {
      _id
      username
      pins {
        pins
      }
    }
  }
`;

export const QUERY_PIN_BY_ID = gql`
   query singlePin($pinId: ID!) {
    pin(pinId: $pinId) {
      _id
      username {
        username
      }
      title
      thumbnail
      description
      lat
      lon
      radius
      glb
      usdz
    }
  }
`;

export const QUERY_PIN_BY_RAD = gql`
   query pinByRad($radius: String!) {
    pinRad(radius: $radius) {
      _id
      username {
        username
      }
      title
      thumbnail
      description
      lat
      lon
      radius
      glb
      usdz
    }
  }
`;

export const QUERY_PIN_BY_LAT_LON = gql`
   query pinByLatLon($lat: String!, $lon: String!) {
    pinLatLon(lat: $lat, lon: $lon) {
      _id
      username {
        username
      }
      title
      thumbnail
      description
      lat
      lon
      radius
      glb
      usdz
    }
  }
`;

export const QUERY_ALL_PINS = gql`
  query getAllPins {
    pins {
      _id
      username
      pins
    }
  }
`;