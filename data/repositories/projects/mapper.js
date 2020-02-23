const ProjectModel = require("../../../domain/projects/model");

const toDatabase = function toDatabase(doc) {
  // TODO
};

const toDomainModel = function toDomainModel(postDoc) {
  return new ProjectModel(postDoc);
};

module.exports = {
  toDatabase,
  toDomainModel
};
