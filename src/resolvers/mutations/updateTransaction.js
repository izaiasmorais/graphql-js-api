module.exports = async (_, { id, input }, { models }) => {
  const transactionToUpdate = await models.Transaction.findOne({ _id: id });

  Object.keys(input).forEach((value) => {
    transactionToUpdate[value] = input[value];
    //name: "Marcelo" = name: "Pedro"
  });

  const updatedTransaction = await transactionToUpdate.save();

  return updatedTransaction;
};
