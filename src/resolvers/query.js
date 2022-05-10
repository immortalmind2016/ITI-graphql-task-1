const Query = {
  me: async (_, args, context) => {
    console.log(await context.dataSources.user.findById(context.user._id));
    return context.dataSources.user.findById(context.user._id);
  },
};
module.exports.Query = Query;
