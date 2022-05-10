const { DataSource } = require("apollo-datasource");
const { UserModel } = require("../model/user.model");

class UserDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }
  create(input) {
    return UserModel.create(input);
  }
  async findById(id) {
    const user = await UserModel.findOne({ _id: id });
    console.log(
      "🚀 ~ file: user.js ~ line 13 ~ UserDataSource ~ findById ~ user",
      user
    );
    return user;
  }
}

module.exports.UserDataSource = UserDataSource;
