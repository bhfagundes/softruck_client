const postRepository = require("./projects/repository");
const userRepository = require("./users/repository");

module.exports = db => ({
  postRepository: postRepository(db.schemas),
  userRepository: userRepository(db.schemas)
});
