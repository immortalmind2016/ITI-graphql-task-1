const jwt = require("jsonwebtoken");
const Mutation = {
  signUp: async (_, { input }, { dataSources: { user } }) => {
    console.log("🚀 ~ file: mutation.js ~ line 4 ~ signUp: ~ input", input);
    //Call Datasource method called create
    const createdUser = await user.create(input);
    //Create Token from my server
    const token = jwt.sign(
      { _id: createdUser._id, name: createdUser.name },
      process.env.JWT_SECRET
    );

    return token;
  },
  login: (_, args, {}) => {
    return null;
  },
};
module.exports.Mutation = Mutation;
