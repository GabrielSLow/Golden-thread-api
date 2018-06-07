'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('projects_table', {
    project_id: {
      type: "int",
      length: 11,
      primaryKey: true
    },
    description: {
      type: "string",
      length: 100,
      primaryKey: true
    },
    budget: {
      type: "string",
      length: 100,
      primaryKey: true
    },
    charities_id: {
      type: "int",
      length: 11,
      primaryKey: true
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('projects_table', callback);
};

exports._meta = {
  "version": 1
};
