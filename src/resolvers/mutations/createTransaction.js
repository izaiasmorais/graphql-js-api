module.exports = async (_, { input }, { models }) => {
  newTransaction = await models.Transaction.create(input);

  return newTransaction;
};
