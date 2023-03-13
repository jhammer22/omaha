const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Game {
    _id: ID
    season: Int
    away_team: String
    away_points: Int
    home_team: String
    home_points: Int
    home_id: Int
    away_id: Int
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    games: [Game]
    game (_id: ID): Game
  }

 

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;