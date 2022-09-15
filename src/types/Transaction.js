const { gql } = require("apollo-server");

module.exports = gql`
  type Transaction {
    id: ID!
    name: String!
    description: String!
    price: String!
    created: String!
  }

  type Query {
    transactions: [Transaction]
  }

  input CreateTransactionInput {
    name: String!
    description: String!
    price: String!
    created: String!
  }

  input UpdateTransactionInput {
    name: String!
    description: String!
    price: String!
    created: String!
  }

  type DeletePayload {
    id: ID!
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction!
    updateTransaction(id: ID, input: UpdateTransactionInput!): Transaction!
    deleteTransaction(id: ID): DeletePayload!
  }
`;
