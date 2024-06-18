

// graphql/resolvers.js
const data = require('./data.js');

const resolvers = {
  branches: () => {
    return data.branches.map(branch => ({
      ...branch,
      bank: data.banks.find(bank => bank.id === branch.bankId)
    }));
  }
};

module.exports = resolvers;
