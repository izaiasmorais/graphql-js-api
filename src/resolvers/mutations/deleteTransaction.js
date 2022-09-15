module.exports = async (_, { id }, { models }) => {
  const deleteTransaction = await models.Transaction.deleteOne({ _id: id });

  return { id: id };
};
