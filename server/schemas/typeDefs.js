const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        surname: String
        email: String
        password: String    
        address: [Address]
        cart: [Cart]
        contactNumber: String
        orders: [Order]
    }

    type Address {
        unit: String
        streetNumber: String
        streetName: String
        suburb: String
        state: String
        postcode: String
    }

    type Cart {
        _id: ID
        name: String
        brand: String
        quantity: String
        size: String
        price: Int
    }

    type Shoes {
        _id: ID
        brand: String
        category: Category
        description: String
        name: String
        overview: String
        price: Float
        specifications: String
        images: [Image]
        stock: Int
    }

    type Order {
    _id: ID
    purchaseDate: String
    products: [Shoes]
  }

    type Category {
        name: String
    }

    type Image {
        img: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Checkout {
    session: ID
  }

    input AddressInput {
        unit: String
        streetNumber: String
        streetName: String
        suburb: String
        state: String
        postcode: String
    }

    input CartInput {
        name: String
        brand: String
        quantity: String
        size: String
        price: Int
    }
    
    input UserInput {
        firstName: String
        surname: String
        email: String
        password: String
        address: [AddressInput]
        cart: [CartInput]
        contactNumber: String
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        shoes: [Shoes]!
        shoeById(shoeId: ID!): Shoes
        addressByUserId(userId: ID!): [Address]
        searchShoeByCategory(category: String!): [Shoes]
        searchShoeByCategoryMens(category: String!): [Shoes]
        searchShoeByCategoryWomens(category: String!): [Shoes]
        searchShoeByBrand(brand: String!): [Shoes]
        searchShoeByPrice(maxPrice: Float!): [Shoes]
        order(_id: ID!): Order
        checkout(shoes: [ID]!): Checkout
    }

    type Mutation {
        addUser(user: UserInput!): Auth
        login(email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        addAddressToUser(userId: ID!, address: AddressInput!): User
        addCartToUser(userId: ID!, cart: CartInput!): User
        removeCart(userId: ID!, cartId: ID!): User
        updateUser(userId: ID!, user: UserInput!): User
        addOrder(userId: ID!, shoeId: [ID]!): Order
    }
    
`;

module.exports = typeDefs;
