module.exports = async (_, {}, { models }) => {
  return await models.Transaction.find();
};
