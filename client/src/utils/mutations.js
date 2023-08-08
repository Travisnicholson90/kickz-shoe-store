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

export const ADD_ADDRESS_TO_USER = gql`
  mutation AddAddressToUser($userId: ID!, $address: AddressInput!) {
    addAddressToUser(userId: $userId, address: $address) {
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
  }`;

  export const ADD_CART_TO_USER = gql`
  mutation AddCartToUser($userId: ID!, $cart: CartInput!) {
    addCartToUser(userId: $userId, cart: $cart) {
      _id
      firstName
      surname
      email
      password
      cart {
        name
        brand
        quantity
        size
        price
      }
    }
  }`;


