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
  db.createTable('donationTable', {
    donations_id: {
      type: "int",
      length: 11,
      primaryKey: true
    },
    user_id: {
      type: 'int',
      length: 11,
      required: true
    },
    charities_id: {
      type: 'int',
      length: 11,
      required: true
    },
    projects_id: {
      type: 'int',
      length: 11,
      required: true
    },
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('donationTable', callback);
};

exports._meta = {
  "version": 1
};
