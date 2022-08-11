import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PIN = gql`
  mutation addPin( $username: User!,
        $title: String!,
        $thumbnail: String,
        $description: String,
        $lat: String!,
        $URL: String!,
        $radius: String!,
        $glb: String!,
        $usdz: String!) {
    addPin( username: $username
        title: $title
        thumbnail: $thumbnail
        description: $description
        lat: $lat
        URL: $URL
        radius: $radius
        glb: $glb
        usdz: $usdz) {
     
      }
    }
  }
`;

export const DELETE_PIN = gql`
  mutation deletePin($pinId: ID!) {
    deletePin(pinId: $pinId) {
      pin{
        _id
      }
      }
    }
  }
`;
