// graphql/schema.js
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Bank {
    id: Int
    name: String
  }

  type Branch {
    ifsc: String
    branch: String
    bank: Bank
  }

  type Query {
    branches: [Branch]
  }
`);

module.exports = schema;
