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

  db.createTable('userTable', {
    id: {
      type: "int",
      primaryKey: true
    },
    firstname: {
      type: "string",
      length: 40
    },
    lastname: {
      type: "string",
      length: 40
    },
    email: {
      type: "string",
      length: 50
    },
    username: {
      type: "string",
      length: 40
    },
    password: {
      type: "string",
      length: 40
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('userTable', callback);
};


exports._meta = {
  "version": 1
};
