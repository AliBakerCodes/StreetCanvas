const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {

        _id: ID!
        username: String!
        email: String!
        password: String!
        pins: [Pin]!

    }

       type Pin {

        _id: ID!
        username: User!
        title: String!
        thumbnail: String
        description: String
        lat: String!
        lon: String!
        radius: String!
        glb: String!
        usdz: String!
        
    }

    type Auth {

        token: ID!
        user: User

    }

    type Query {

        #Get all users
        users: [User]!

        #Get users by username
        user(username : String!): User

        #Get user by email
        userEmail(email: String!): User

        # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
        #Gets current user using context
        me: User

        #Gets pins from user
        pinsUser(username: String!): [Pin]

        #Gets pin from pin ID
        pin(pinId: ID!): Pin

        #Gets pin from radius
        pinRad(radius: String!): Pin

        #Gets pin from lat/lon
        pinLatLon(lat: String!, lon: String!): Pin

        #Get all pins
        pins: [Pin]

    }

    type Mutation {

        #Register new user
        addUser(username: String!, email: String!, password: String!): Auth

        #login existing user
        login(email: String!, password: String!): Auth 

        #Remove user
        deleteUser(userId: ID!) : User
        
        #Add new pin
        addPin(username: String! title: String!, thumbnail: String, description: String, lat: String!, lon: String!, radius: String!, glb: String!, usdz: String!): Pin

        #Delete pin
        deletePin(pinId: ID!): Pin

    }

    
`

module.exports = typeDefs;