const { gql } = require('apollo-server')

const typeDefs = gql`
  type Post {
    id: Int!
    body: String!,
    image: String
    created_at: String!
    updated_at: String!
    title: String!
    exif: String!
  }

  type Query {
    allPosts(page: Int!): [Post]
  }

  type Mutation {
    createPost(
      body: String!
      image: String
      title: String!
      exif: String!
    ): Post!
  }
`

module.exports = typeDefs