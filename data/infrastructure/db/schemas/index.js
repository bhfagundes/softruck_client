const projectSchema = require("./Project");
const userSchema = require("./User");

module.exports.create = mongoose => ({
  Post: projectSchema(mongoose),
  User: userSchema(mongoose)
});
