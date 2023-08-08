import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      firstName
      surname
      email
      password
      contactNumber
      address {
        unit
        streetNumber
        streetNumber
        suburb
        state
        postcode
      }
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query UserById($userId: ID!) {
    user(userId: $userId) {
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
      cart {
        name
        brand
        quantity
        price
      }
    }
  }
`;

export const QUERY_ADDRESS_BY_USER_ID = gql`
  query AddressByUserId($userId: ID!) {
    addressByUserId(userId: $userId) {
      unit
      streetNumber
      streetName
      suburb
      state
      postcode
    }
  }
`;

export const QUERY_SHOES = gql`
  query Shoes {
    shoes {
      _id
      brand
      description
      name
      overview
      price
      specifications
      images {
        img
      }
      stock
    }
  }
`;

export const QUERY_SHOE_BY_ID = gql`
  query ShoeById($shoeId: ID!) {
    shoeById(shoeId: $shoeId) {
      _id
      brand
      category {
        name
      }
      description
      name
      overview
      price
      specifications
      images {
        img
      }
      stock
    }
  }
`;

export const QUERY_SHOE_BY_CATEGORY = gql`
  query SearchShoeByCategory($category: String!) {
    searchShoeByCategory(category: $category) {
      _id
      brand
      category {
        name
      }
      description
      images {
        img
      }
      name
      overview
      price
      specifications
      stock
    }
  }
`;

export const QUERY_SHOE_BY_CATEGORY_MENS = gql`
  query SearchShoeByCategoryMens($category: String!) {
    searchShoeByCategoryMens(category: $category) {
      _id
      brand
      category {
        name
      }
      description
      images {
        img
      }
      name
      overview
      price
      specifications
      stock
    }
  }
`;

export const QUERY_SHOE_BY_CATEGORY_WOMENS = gql`
  query SearchShoeByCategoryWomens($category: String!) {
    searchShoeByCategoryWomens(category: $category) {
      _id
      brand
      category {
        name
      }
      description
      images {
        img
      }
      name
      overview
      price
      specifications
      stock
    }
  }
`;

export const QUERY_SHOE_BY_BRAND = gql`
  query SearchShoeByBrand($brand: String!) {
    searchShoeByBrand(brand: $brand) {
      _id
      brand
      category {
        name
      }
      description
      images {
        img
      }
      name
      overview
      price
      specifications
      stock
    }
  }
`;

export const QUERY_SHOE_BY_PRICE = gql`
  query SearchShoeByPrice($maxPrice: Float!) {
    searchShoeByPrice(maxPrice: $maxPrice) {
      _id
      brand
      name
      description
      price
      images {
        img
      }
        stock
    }
  }
`;

export const CHECKOUT = gql`
  query Checkout($shoes: [ID]!) {
    checkout(shoes: $shoes) {
      session
    }
  }
`;
