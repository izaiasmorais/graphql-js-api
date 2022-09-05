module.exports = async (_, { id, input }, { models }) => {
  const podcastToUpdate = await models.Podcast.findOne({ _id: id });

  Object.keys(input).forEach((value) => {
    podcastToUpdate[value] = input[value];
    //name: "Marcelo" = name: "Pedro"
  });

  const updatedPodcast = await podcastToUpdate.save();

  return updatedPodcast;
};
