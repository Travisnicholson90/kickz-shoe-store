const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        surname: String
        email: String
        password: String    
        address: [Address]
        contactNumber: String
    }

    type Address {
        unit: String
        streetNumber: String
        streetName: String
        suburb: String
        state: String
        postcode: String
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

    input AddressInput {
        unit: String
        streetNumber: String
        streetName: String
        suburb: String
        state: String
        postcode: String
    }

    input UserInput {
        firstName: String
        surname: String
        email: String
        password: String
        address: [AddressInput]
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
    }

    type Mutation {
        addUser(user: UserInput!): Auth
        login(email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        addAddressToUser(userId: ID!, address: AddressInput!): User
        updateUser(userId: ID!, user: UserInput!): User
    }
    
`;

module.exports = typeDefs;
