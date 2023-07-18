import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($user: UserInput!) {
    addUser(user: $user) {
      token
      user {
        _id
        firstName
        surname
        email
        password
        address {
          unit
          streetNumber
          streetName
          suburb
          state
          postcode
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $user: UserInput!) {
    updateUser(userId: $userId, user: $user) {
      _id
      firstName
      surname
      email
      password
      contactNumber
      address {
        unit
        streetNumber
        streetName
        suburb
        state
        postcode
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation RemoveUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      email
    }
  }
`;
